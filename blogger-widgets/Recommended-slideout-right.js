﻿$(function(){if(typeof bpslidein_custom_css=='undefined'||!bpslidein_custom_css)$('head').append('<style>#bpslidein{z-index:5;width:400px;height:100px;padding:10px;background-color:#fff;border-top:5px solid #FF4903;position:fixed;right:-430px;bottom:0;-moz-box-shadow:-2px 0 5px #aaa;-webkit-box-shadow:-2px 0 5px #aaa;box-shadow:-2px 0 5px #aaa;font-family:Arial, Helvetica, sans-serif;}#bpslidein p{font-size:11px;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;letter-spacing:1px;color:#555;}#bpslidein_title{color:#555;font-weight:700;font-size:16px;margin:10px 20px 10px 0;}#bpslidein a,#bpslidein a:hover,#bpslidein_title{text-decoration:none;color:#FF4903;}#bpslidein .close,#bpslidein .expand,#bpslidein .help{border:2px solid #EEE;cursor:pointer;color:#9A9AA1;width:13px;height:15px;padding:2px 0 0 5px;position:absolute;right:10px;font-size:17px;font-weight:700;font-family:Arial, Helvetica, sans-serif;font-size:12px;}#bpslidein .help{right:35px;}#bpslidein_title,#bpslidein_image{float:left;width:80px;}#bpslidein_title{width:290px;}</style>');$('#bpslidein').show();var bpslidein_gone_in=false;var bp_scroll_lock=false;$(window).scroll(function(){if(bp_scroll_lock)return;if(bpslidein_gone_in==false)$('#bpslidein .expand').hide();if(document.getElementById("bpslidein_place_holder")){var distanceTop=$('#bpslidein_place_holder').offset().top-$(window).height();} else {var distanceTop = $(document).height() - $(window).height();}if($(window).scrollTop()>=distanceTop){if(bpslidein_gone_in==false){$('#bpslidein').animate({'right':'0px','bottom':'0px'},300)}else $('#bpslidein').animate({'bottom':'-80px','right':'0px'},300)}else $('#bpslidein').stop(true).animate({'right':'-430px','bottom':'0px'},300)});$('#bpslidein .help').bind('click', function () {try{location.href='http://sam.azgor.com/2013/02/recommended-slide-out-post-widget-with-social-buttons-for-blogger.html?utm_source=blog&utm_medium=gadget&utm_campaign=bp_slideout';}catch(err){}});$('#bpslidein .close').bind('click',function(){bp_scroll_lock=true;$('#bpslidein').stop(true).animate({'bottom':'-80px'},300);bp_scroll_lock=false;bpslidein_gone_in=true;$('#bpslidein .expand').show();$('#bpslidein .close').hide()});$('#bpslidein .expand').bind('click',function(){$('#bpslidein .expand').hide();$('#bpslidein').stop(true).animate({'bottom':'0px'},300);bpslidein_gone_in=false;$('#bpslidein .close').show()})});var bpslideinprocessJson=function(json,status){if(json.feed.entry)var randomNum=Math.ceil(Math.random()*json.feed.openSearch$totalResults.$t);$.ajax({url:'/feeds/posts/summary',data:{'max-results':'2','alt':'json-in-script','start-index':randomNum},success:bpslideinprocessRecommendation,dataType:'jsonp',cache:true})};$.ajax({url:'/feeds/posts/summary',data:{'max-results':'1','alt':'json-in-script'},success:bpslideinprocessJson,dataType:'jsonp',cache:true});var bpslideinprocessRecommendation=function(json,status){try{if(json.feed.entry){for(var i=0;i<json.feed.entry.length;i++){var entry=json.feed.entry[i];var url='';for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){url=entry.link[k].href+'?utm_source=blog&utm_medium=gadget&utm_campaign=bp_slideout_plugin';break}};var title=entry.title.$t;if(location.href.indexOf(url)==-1){try{var thumbUrl='';thumbUrl=entry.media$thumbnail.url;$('#bpslidein_image').html('<img src="'+thumbUrl+'"  class="image" title="'+title+'" />')}catch(error){}var link=$('<a>');link.attr('title',title);link.text(title);link.attr('href',url);$('#bpslidein_title').empty();link.appendTo($('#bpslidein_title'));return}}}}catch(error){$('#bpslidein_title').html('<p>Sorry! Some error occurred while fetching the Blog Feed.</p>')}};