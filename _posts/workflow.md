
## staging.yml
create a file under `.github/workflows/staging.yml`

```bash
name: Deploy to staging.digitechpoint.com

on:
  push:
    branches: ["staging"]
  workflow_dispatch:

concurrency:
  group: staging-${{ github.ref }}
  cancel-in-progress: false

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: staging
    timeout-minutes: 15

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      # ADD THIS STEP: Setup Node.js and build assets
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm install --legacy-peer-deps
        
      - name: Build assets
        run: npm run build
        env:
          NODE_OPTIONS: "--max-old-space-size=4096"
          VITE_REVERB_APP_KEY: ${{ secrets.VITE_REVERB_APP_KEY }}
          VITE_REVERB_HOST: ${{ secrets.VITE_REVERB_HOST }}
          VITE_REVERB_PORT: ${{ secrets.VITE_REVERB_PORT }}
          VITE_REVERB_SCHEME: ${{ secrets.VITE_REVERB_SCHEME }}        

      - name: Verify build output
        run: |
          set -Eeuo pipefail

          test -d public/build
          test -f public/build/manifest.json

          ls -la public/build/
          echo "✅ Build completed successfully!"

      - name: Upload build artifact
        uses: actions/upload-artifact@v4
        with:
          name: staging-build-${{ github.sha }}
          path: |
            public/build/
            public/mediapipe-wasm/
          if-no-files-found: error
          retention-days: 7
          compression-level: 0

      - name: Deploy to staging.digitechpoint.com
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.STAGING_HOST }}
          username: ${{ secrets.STAGING_USERNAME }}
          port: ${{ secrets.STAGING_PORT }}
          key: ${{ secrets.STAGING_SSHKEY }}
          script_stop: true
          command_timeout: 30m
          script: |
            set -e
            test -d /srv/users/digitechpoint/tmp/digitechpoint/app.digitechpoint.com
            test -d /srv/users/digitechpoint/apps/digitechpoint

            cd /srv/users/digitechpoint/tmp/digitechpoint/app.digitechpoint.com
            git pull origin staging

            rsync -avh --progress \
              --exclude '.git' \
              --exclude '.env' \
              /srv/users/digitechpoint/tmp/digitechpoint/app.digitechpoint.com/ \
              /srv/users/digitechpoint/apps/digitechpoint/

            cd /srv/users/digitechpoint/apps/digitechpoint
            
            php artisan migrate --force
            php artisan optimize:clear
            php artisan config:clear
            php artisan cache:clear
            php artisan config:cache
            php artisan route:cache
            php artisan view:cache
            php artisan queue:restart

      - name: Upload compiled frontend assets
        uses: appleboy/scp-action@v1.0.0
        with:
          host: ${{ secrets.STAGING_HOST }}
          username: ${{ secrets.STAGING_USERNAME }}
          port: ${{ secrets.STAGING_PORT }}
          key: ${{ secrets.STAGING_SSHKEY }}
          source: "public/build,public/mediapipe-wasm"
          target: "/srv/users/digitechpoint/apps/digitechpoint/public/"
          strip_components: 1
          overwrite: true

```
## production.yml

create a file under `.github/workflows/production.yml`

```bash
name: Deploy to app.digitechpoint.com

on:
  push:
    branches: ["main"]
  workflow_dispatch:

concurrency:
  group: production-${{ github.ref }}
  cancel-in-progress: false

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: main
    timeout-minutes: 15

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      # ADD THIS STEP: Setup Node.js and build assets
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm install --legacy-peer-deps
        
      - name: Build assets
        run: npm run build
        env:
          NODE_OPTIONS: "--max-old-space-size=4096"
          VITE_REVERB_APP_KEY: ${{ secrets.VITE_REVERB_APP_KEY }}
          VITE_REVERB_HOST: ${{ secrets.VITE_REVERB_HOST }}
          VITE_REVERB_PORT: ${{ secrets.VITE_REVERB_PORT }}
          VITE_REVERB_SCHEME: ${{ secrets.VITE_REVERB_SCHEME }}        

      - name: Verify build output
        run: |
          set -Eeuo pipefail

          test -d public/build
          test -f public/build/manifest.json

          ls -la public/build/
          echo "✅ Build completed successfully!"

      - name: Upload build artifact
        uses: actions/upload-artifact@v4
        with:
          name: staging-build-${{ github.sha }}
          path: |
            public/build/
            public/mediapipe-wasm/
          if-no-files-found: error
          retention-days: 7
          compression-level: 0

      - name: Deploy to app.digitechpoint.com
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          port: ${{ secrets.PORT }}
          key: ${{ secrets.SSHKEY }}
          script_stop: true
          command_timeout: 30m
          script: |
            set -e
            test -d /srv/users/digitechpoint/tmp/digitechpoint/app.digitechpoint.com
            test -d /srv/users/digitechpoint/apps/digitechpoint

            cd /srv/users/digitechpoint/tmp/digitechpoint/app.digitechpoint.com
            git pull --ff-only

            rsync -avh --progress \
              --exclude '.git' \
              --exclude '.env' \
              /srv/users/digitechpoint/tmp/digitechpoint/app.digitechpoint.com/ \
              /srv/users/digitechpoint/apps/digitechpoint/

            cd /srv/users/digitechpoint/apps/digitechpoint

            php artisan migrate --force
            php artisan optimize:clear
            php artisan config:clear
            php artisan cache:clear
            php artisan config:cache
            php artisan route:cache
            php artisan view:cache
            php artisan queue:restart

      - name: Upload compiled frontend assets
        uses: appleboy/scp-action@v1.0.0
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          port: ${{ secrets.PORT }}
          key: ${{ secrets.SSHKEY }}
          source: "public/build,public/mediapipe-wasm"
          target: "/srv/users/digitechpoint/apps/digitechpoint/public/"
          strip_components: 1
          overwrite: true

```
The environment variables should be changed.
