function groups_widget_click_handler(){jQuery(".widget div#groups-list-options a").on("click",function(){var a=this;return jQuery(a).addClass("loading"),jQuery(".widget div#groups-list-options a").removeClass("selected"),jQuery(this).addClass("selected"),jQuery.post(ajaxurl,{action:"widget_groups_list",cookie:encodeURIComponent(document.cookie),_wpnonce:jQuery("input#_wpnonce-groups").val(),max_groups:jQuery("input#groups_widget_max").val(),filter:jQuery(this).attr("id")},function(b){jQuery(a).removeClass("loading"),groups_widget_response(b)}),!1})}function groups_widget_response(a){a=a.substr(0,a.length-1),a=a.split("[[SPLIT]]"),"-1"!==a[0]?jQuery(".widget ul#groups-list").fadeOut(200,function(){jQuery(".widget ul#groups-list").html(a[1]),jQuery(".widget ul#groups-list").fadeIn(200)}):jQuery(".widget ul#groups-list").fadeOut(200,function(){var b="<p>"+a[1]+"</p>";jQuery(".widget ul#groups-list").html(b),jQuery(".widget ul#groups-list").fadeIn(200)})}jQuery(document).ready(function(){groups_widget_click_handler(),"undefined"!=typeof wp&&wp.customize&&wp.customize.selectiveRefresh&&wp.customize.selectiveRefresh.bind("partial-content-rendered",function(){groups_widget_click_handler()})});