---
layout: post
title: How to check installed modules in Python?
description: There are many ways you can get the list of installed packages on python.
date: 2019-02-24T01:03:08+00:00
author: Sam Azgor
layout: post
permalink: /check-python-modules/
image: /assets/images/check-python-modules/Python3-powered_hello-world.png
categories:
  - How-To Tutorials
tags:
  - How-To
  - Python
format: article
---

Would you like to get a list of Python modules? There are many ways you can get the list of installed packages on python. Here is How can you get a list of Python modules installed in your machine?

<h2>How to check installed modules in Python?</h2>

<figure>
<amp-img src="/assets/images/check-python-modules/py-help.png" alt="Python Help" width="600" height="337" layout="responsive">
</amp-img>
<figcaption>*Python Help* 
</figcaption>
</figure>

## 1. Using help function.

You can use `help function` in python shell to get the list of modules installed. 
```
help("modules")
```
or
```
help('modules package')
```

<figure>
<amp-img src="/assets/images/check-python-modules/py-pip.png" alt="Python pip" width="600" height="337" layout="responsive">
</amp-img>
<figcaption>*pip* 
</figcaption>
</figure>

## 2. using python-pip

Install `pip` by the following command.

```
sudo apt-get install python-pip
```
then enter this

```
pip freeze
```
or
```
pip list
```

<figure>
<amp-img src="/assets/images/check-python-modules/pydoc.png" alt="Pydoc" width="600" height="337" layout="responsive">
</amp-img>
<figcaption>*pydoc* 
</figcaption>
</figure>

## 3. Using pydoc

Enter the following command in your terminal
```
pydoc modules
```

<hr>
<pre>Ref: 
<a href="https://docs.python.org/2/library/pydoc.html" target="_blank" rel="noreferrer">Python 2</a> | <a href="https://docs.python.org/3.7/library/pydoc.html" target="_blank" rel="noreferrer">Python 3</a> | <a href="http://xahlee.info/python/standard_modules.html" target="_blank" rel="noreferrer">Xah Lee</a> |  <a href="https://stackoverflow.com/q/739993/4493086" target="_blank" rel="noreferrer">Click</a></pre>
