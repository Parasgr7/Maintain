function friend_widget_click_handler(){jQuery(".widget div#friends-list-options a").on("click",function(){var a=this;return jQuery(a).addClass("loading"),jQuery(".widget div#friends-list-options a").removeClass("selected"),jQuery(this).addClass("selected"),jQuery.post(ajaxurl,{action:"widget_friends",cookie:encodeURIComponent(document.cookie),_wpnonce:jQuery("input#_wpnonce-friends").val(),"max-friends":jQuery("input#friends_widget_max").val(),filter:jQuery(this).attr("id")},function(b){jQuery(a).removeClass("loading"),friend_widget_response(b)}),!1})}function friend_widget_response(a){a=a.substr(0,a.length-1),a=a.split("[[SPLIT]]"),"-1"!==a[0]?jQuery(".widget ul#friends-list").fadeOut(200,function(){jQuery(".widget ul#friends-list").html(a[1]),jQuery(".widget ul#friends-list").fadeIn(200)}):jQuery(".widget ul#friends-list").fadeOut(200,function(){var b="<p>"+a[1]+"</p>";jQuery(".widget ul#friends-list").html(b),jQuery(".widget ul#friends-list").fadeIn(200)})}jQuery(document).ready(function(){friend_widget_click_handler(),"undefined"!=typeof wp&&wp.customize&&wp.customize.selectiveRefresh&&wp.customize.selectiveRefresh.bind("partial-content-rendered",function(){friend_widget_click_handler()})});