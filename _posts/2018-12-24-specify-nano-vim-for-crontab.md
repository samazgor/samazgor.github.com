---
layout: post
id: 1218
title: Specify Editor for Crontab File
date: 2018-12-24T04:24:19+00:00
author: Sam Azgor
layout: post
permalink: /specify-nano-vim-for-crontab/
image: /assets/images/specify-nano-vim-for-crontab/Crontab-File.png
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

<h2>The Crontab File</h2>
Cron is a tool for configuring scheduled tasks on Unix systems. It is used to schedule commands or scripts to run periodically and at fixed intervals.

The command crontab (cron table) is used to edit the list of scheduled tasks in operation, and is done on a per-user basis. Each user, including root, can have a cron file. So the user who has appropriate permissions can create their own crontab file.

<h2>How to specify nano or vim as editor for crontab file</h2>
Edit crontab with an editor other than the default

<b>Using nano to edit the cron</b>

```
export VISUAL=nano; crontab -e
```

<b>Using vim to edit the cron</b>

```
export VISUAL=vim; crontab -e
```

<hr>
<h2>Setting Nano as the default crontab commandline editor</h2>
Enter following command and select `1`

```
select-editor
```

<figure>
<amp-img src="/assets/images/specify-nano-vim-for-crontab/Nano-as-the-default-editor.png" alt="Nano as the default Commandline Editor" width="683" height="384" layout="responsive">
</amp-img>
<figcaption>*Nano as the default Commandline Editor* 
</figcaption>
</figure>

<hr>

Run the following command to check if you have a crontab file:

```
crontab -l
```

If you don't have a crontab file the message _no crontab for `username`_ will appear.

<figure>
<amp-img src="/assets/images/specify-nano-vim-for-crontab/crontab-l.png" alt="Check if Cron is running" width="683" height="384" layout="responsive">
</amp-img>
<figcaption>*Check if Cron is running* 
</figcaption>
</figure>

To create or edit a crontab file run the following command:

```
crontab -e
```

Default crontab file - <a href="https://gist.github.com/samazgor/ff45bb8bd0210a9789b409536697033d">Gist</a>

<h2>How To Remove A Crontab File</h2>
However, if you want to remove your user's crontab file run the following command:

```
crontab -r
```

A safer way to do this is to run the following command:

```
crontab -i
```
<hr>

<footer>
  <h3>Sources/References</h3>
+ Ask Ubuntu: <a href="https://askubuntu.com/a/726710/409312">Difference between Nano and Vim</a>
+ stackoverflow: <a href="https://stackoverflow.com/a/17364492/4493086">How to specify a editor to open crontab file</a>
+ Wikipedia: <a href="https://en.wikipedia.org/wiki/Cron">Cron</a>
+ <a href="https://askubuntu.com/a/264720/409312">Ask Ubuntu: Changing default crontab editor</a>
+ Ubuntu Help: <a href="https://help.ubuntu.com/community/CronHowto">CronHowto</a>
</footer>
