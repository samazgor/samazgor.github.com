---
id: 568
title: 'Turn Plain Text URLs into Hyperlink &#8211; Google Spreadsheet Tricks'
date: 2016-03-11T23:26:05+00:00
author: Sam Azgor
layout: post
guid: https://sam.azgor.com/?p=568
permalink: /make-all-plain-text-links-clickable/
image: /wp-content/uploads/make-all-plain-text-links-clickable/Google-Sheet.png
categories:
  - How-To Tutorials
tags:
  - How-To
  - Article
---
If you have a spreadsheet with the huge number of rows with URLs which are displaying as text, and these are not clickable in your Google Spreadsheet, you can try the following method to make them as hyperlinked.

I've seen a script for automation, but it's not working for me. I am trying to make the script be worked.
<h2>Method 1: Make All Plain Text Links Clickable</h2>
If your rows contain only URLs and no text at the beginning. Follow the below instruction and make clickable within few action. It'll not work if you want to make the text a clickable URL.
<ul>
 	<li>Insert an additional column (alt, i, c) to the left of column A. Your stuff is now in column B.</li>
 	<li>Then, in the first cell (A1) type <em>http://</em>, Then copy and paste down as far as you have content in column B.</li>
 	<li>Next, go to cell C1 and type =concatenate(A1; B1) and hit enter. You should see what you want in cell C1.</li>
 	<li>Then copy the contents of C1 and paste down as far as you need.</li>
 	<li>If you are finished, you can select column C, copy, and then paste special: here uncheck paste all, but check numbers and uncheck formulas and hit enter.</li>
 	<li>Then you can delete columns A and B.</li>
</ul>

<hr />

<h2>Method 2: Make All Plain Text Links Clickable</h2>
Previously I make URLs clickable by the following method. But above solution is much easier and will save time to format existing cells so URLs become clickable.
<ul>
 	<li>Open your spreadsheet.</li>
 	<li>Click the cell in your spreadsheet where you’d like the link to appear.</li>
 	<li>Choose from the following options:
<ul>
 	<li>Click the “Insert” drop-down menu and select Link.</li>
 	<li>Click the link icon in the toolbar.</li>
 	<li>Right click in your spreadsheet and select the Insert link option.</li>
 	<li>Use the Ctrl + K keyboard shortcut (Cmd + K on a Mac).</li>
</ul>
</li>
 	<li>Simply hit Enter button and switch to another cell.  If you prefer customization of text and URLs you can modify before press Enter. I assume you dont have time for that :P</li>
</ul>
Ref: <a href="https://support.google.com/docs/answer/45893?hl=en&amp;visit_id=1-636380902195065082-1874623459&amp;rd=1">Google Help</a>
