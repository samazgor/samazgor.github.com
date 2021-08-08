---
layout: post
title: How to Enable SSH Password Authentication
description: Here's a quick tutorial, i am showing how to enable password authentication on server.
date: 2021-08-07T01:03:08+00:00
author: Sam Azgor
permalink: /enable-ssh-password-authentication/
image: /assets/images/enable-ssh-password-authentication/SSH.png
categories:
  - How-To Tutorials
tags:
  - How-To
  - SSH
  - Article
format: article
---

Some server providers, such as Amazon EC2 and Google Compute Engine, disable SSH password authentication by default. That is, you can only log in over SSH using public key authentication.

### How to Enable SSH Password Authentication

<figure>
<amp-img src="/assets/images/enable-ssh-password-authentication/sftp-access.png" alt="SSH Enable" width="600" height="337" layout="responsive">
</amp-img>
<figcaption>*SSH* 
</figcaption>
</figure>

To enable SSH password authentication, you must SSH in as root to edit this file. Then, change the line

```
sudo nano /etc/ssh/sshd_config
```

Then, change the line

```
PasswordAuthentication no
```

to

```
PasswordAuthentication yes
```

After making that change, restart the SSH service by running the following command as root:

```
sudo service ssh restart
```

## Enable Logging In as root

Some providers also disable the ability to SSH in directly as root. In those cases, they created a different user for you that has sudo privileges (often named ubuntu). With that user, you can get a root shell by running the command:

```
sudo -i
```

If you instead want to be able to directly SSH in as root, again edit this file:

```
/etc/ssh/sshd_config
```

And change the line

```
PermitRootLogin no
```

to

```
PermitRootLogin yes
```

After making that change, restart the SSH service by running the following command as root:

```
sudo service ssh restart
```

If you enable this setting, don't forget to set a strong password for root by running the command.

```
sudo passwd root
```


<hr>
<footer>

</footer>
