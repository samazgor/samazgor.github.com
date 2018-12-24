---
layout: post
id: 1218
title: Specify Editor for Crontab File
date: 2018-12-24T04:24:19+00:00
author: Sam Azgor
layout: post
permalink: /specify-nano-vim-for-crontab/
image: /assets/images/specify-nano-vim-for-crontab/Nano-vs-Vim.png
categories:
  - How-To Tutorials
tags:
  - How-To
  - Editor
format: article
---
Many people love using Vim in command line. But Nano is easier to use if you are not familiar with vim. Different between Nano & Vim.

<h3>Nano:</h3>

+ Easy to use and master.
+ Nano has most of the shortcuts listed at the bottom of the window, making it extremely simple to use.
+ Search function
+ Search and replace
+ "Goto line" command
+ Automatic indentation

<h3>Vim:</h3>

+ Tough to get started with and master. The editing and command modes will confuse beginners.
+ Session recovery
+ Split screen
+ Tab expansion
+ Completion commands
+ Syntax coloring

<figure>
<amp-img src="/assets/images/specify-nano-vim-for-crontab/Nano-vs-Vim.png" alt="Vim vs Nano Editor" width="683" height="384" layout="responsive">
</amp-img>
<figcaption>*Vim vs Nano Editor* 
</figcaption>
</figure>

<h2>How to specify nano or vim as editor for crontab file</h2>
Edit crontab with an editor other than the default

<b>Using nano to edit the cron</b>

`export VISUAL=nano; crontab -e`

<b>Using vim to edit the cron</b>

`export VISUAL=vim; crontab -e`

<hr>
<h2>Setting Nano as the default crontab commandline editor</h2>
Enter following command and select `1`

`select-editor`

<figure>
<amp-img src="/assets/images/specify-nano-vim-for-crontab/Nano-as-the-default-editor.png" alt="Nano as the default Commandline Editor" width="683" height="384" layout="responsive">
</amp-img>
<figcaption>*Nano as the default Commandline Editor* 
</figcaption>
</figure>

<hr>
<small>Sources: Ask Ubuntu & stackoverflow: <a href="https://askubuntu.com/a/726710/409312">Difference between Nano and Vim</a> - <a href="https://askubuntu.com/a/264720/409312">Changing default crontab editor
</a> - <a href="https://stackoverflow.com/a/17364492/4493086>How to specify a editor to open crontab file? “export EDITOR=vi” does not work</a></small>
