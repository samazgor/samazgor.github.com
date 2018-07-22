---
layout: post
title: How To Upgrade Filezilla to Latest Version on Ubuntu 16.04
description: 
date: 2018-07-22T01:03:09+00:00
author: Sam Azgor
layout: post
permalink: /upgrade-filezilla-on-ubuntu/
image: /assets/images/upgrade-filezilla-on-ubuntu/FileZilla-Update.png
categories:
  - How-To Tutorials
tags:
  - How-To
  - Filezilla
format: article
---

<h2>How to update FileZilla in Ubuntu 16.04 LTS</h2>

When you check for updates within FileZilla, you see that new version is available. How can you update it to the latest version? Here is the solution: how i upgrade from 3.33.0 to 3.34.0.

The latest version is 3.34.0 now (July 22, 2018).

1) The final version will auto downloaded by Filezilla in your Download folder of ubuntu. If not, Download FileZilla Client for Linux <a href="https://filezilla-project.org/download.php?type=client">from here</a>. For my instance the file name is "FileZilla_3.34.0_x86_64-linux-gnu.tar.bz2".

2) Open Terminal paste the following code. (Extract the archive file and navigate to FileZill3 folder)

```
cd ~/Downloads
tar -vxjf FileZilla_3.34.0_x86_64-linux-gnu.tar.bz2
cd FileZilla3/
```

3) Install the missing `libpng16` that FileZilla is requesting:

```
sudo apt install libpng16-dev
```

Setup the `ubuntu-toolchain-r` PPA for installing the correct version of `libstdc++.so.6` that FileZilla is looking for.

```
sudo add-apt-repository ppa:ubuntu-toolchain-r/test
sudo apt-get update
sudo apt-get upgrade
```

3) Now, copy over the updated FileZilla files to their correct locations by the following command.

```
sudo cp -ravx * /usr/
```

That's it. Run filezilla normally and enjoy the latest version.

<figure>
<amp-img src="/assets/images/upgrade-filezilla-on-ubuntu/Filezilla3.34.0.png" alt="Update FileZilla on Ubuntu" width="600" height="337" layout="responsive">
</amp-img>
<figcaption>*FileZilla 3.34.0 on Ubuntu 16.04* 
</figcaption>
</figure>

<pre>Ref: <a href="https://askubuntu.com/a/1000276" target="_blank">Click</a></pre>
