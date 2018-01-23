---
layout: post
title: Ubuntu 16.04 Fixing no copy and paste into Remmina RDP Client
description: 
date: 2018-01-23T11:23:59+00:00
author: Sam Azgor
layout: post
permalink: /remmina-rdp-copy-paste-issue/
image: /assets/images/remmina-rdp-ubuntu/remmina-rdp-copy-paste-issue.png
categories:
  - How-To Tutorials
tags:
  - How-To
  - RDP
format: article
---

<h2>Cannot get Remmina to copy and paste from client to server?</h2>

Here is the solution:

1) Open Terminal and paste the following code

```
sudo apt-add-repository ppa:remmina-ppa-team/remmina-next

sudo apt-get update

sudo apt-get install remmina remmina-plugin-rdp
```

2) Now close Remmina RDP Client and open it again.

<figure>
<amp-img src="/assets/images/remmina-rdp-ubuntu/remmina-rdp-copy-paste-issue.png" alt="Remmina RDP Client" width="600" height="300" layout="responsive">
</amp-img>
<figcaption>*Remmina RDP Client* 
</figcaption>
</figure>

Ref: https://bugs.launchpad.net/ubuntu/+source/remmina/+bug/1439478
