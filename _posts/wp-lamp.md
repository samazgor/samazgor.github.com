---
layout: post
title: WordPress on LAMP
description: Here's a quick tutorial, i am showing how to install wordpress on apache server.
date: 2022-03-03T01:03:08+00:00
author: Sam Azgor
permalink: /wordpress-lamp/
image: /assets/images/enable-ssh-password-authentication/SSH.png
categories:
  - How-To Tutorials
tags:
  - How-To
  - WordPress
  - Article
format: article
---

In this tutorial, I will show you how to set up and install WordPress on cloud platforms — AWS, GCP, Azure & DO. When we talk about installing WordPress on the cloud, we are basically hosting it through a cloud infrastructure service.

### How to Enable SSH Password Authentication

Inthis tutorial, we’ll learn how to set up and run WordPress blog or site on a LAMP Stack (Linux, Apache, MySQL, and PHP). Ubuntu OS takes care of the first requirement. We’ll focus on how to get the rest of the components done.

<figure>
<amp-img src="/assets/images/enable-ssh-password-authentication/sftp-access.png" alt="SSH Enable" width="600" height="337" layout="responsive">
</amp-img>
<figcaption>*SSH* 
</figcaption>
</figure>

First lets update the server. 

```
sudo apt update && upgrade
```

Now, lets enable ftp.

```
sudo nano /etc/ssh/sshd_config
```

Modify this line `PasswordAuthentication no` and make it `PasswordAuthentication yes`.

Now restart the SSH

```
sudo systemctl reload sshd
```


```
sftp://IP_ADDRESS
U: dtpuser
P: YOUR_STRONG_PASS
```

## FTP & Apache
```
sudo mkdir /var/www/azgor.com
```

```
sudo adduser dtpuser
```

```
sudo groupadd wordpress
sudo usermod -aG wordpress dtpuser
sudo usermod -aG wordpress www-data
sudo chown -R www-data:wordpress /var/www/azgor.com
sudo find /var/www/azgor.com/ -type d -exec chmod 750 {} \;
sudo find /var/www/azgor.com/ -type f -exec chmod 640 {} \;

cd /var/www/azgor.com
curl -O https://wordpress.org/latest.tar.gz
tar xzvf latest.tar.gz --strip 1
rm -rf latest.tar.gz

sudo apt install apache2
sudo systemctl status apache2
sudo systemctl restart apache2
hostname -I

sudo nano /etc/apache2/sites-available/azgor.conf

<VirtualHost *:80>
    ServerAdmin sam@azgor.com
    ServerName azgor.com
    ServerAlias www.azgor.com
    DocumentRoot /var/www/azgor.com
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>

sudo a2ensite azgor.conf
sudo a2dissite 000-default.conf
sudo apache2ctl configtest
systemctl reload apache2
sudo systemctl restart apache2
sudo a2enmod rewrite
```

## SSL
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
sudo certbot --apache

## MySQL
```
sudo apt install mysql-server -y
sudo mysql -u root -p
```

```
CREATE DATABASE db_name;
CREATE USER 'db_user' IDENTIFIED BY 'STRONG_PASSWORD';
GRANT ALL PRIVILEGES ON db_name.* TO 'db_user';
FLUSH PRIVILEGES;
EXIT;
```
## PHP
```
sudo apt install php-fpm php-mysql -y
sudo nano /etc/php/7.4/fpm/php.ini
cgi.fix_pathinfo=0
memory_limit = 256M
post_max_size = 128M
upload_max_filesize = 128M
file_uploads = On
max_execution_time = 600
max_input_time = 600
```

```
sudo systemctl restart php7.4-fpm
```

sudo apt install php-curl php-gd php-mbstring php-xml php-xmlrpc php-zip php-cli -y
sudo apt-get install libapache2-mod-php -y


<hr>
<footer>

</footer>
