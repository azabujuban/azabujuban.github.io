(function(b){var e=b('<div class="lightbox-overlay">'),c=b('<div class="lightbox-slider">'),l=b('<div class="lightbox-title"></div>'),r=b('<a class="lightbox-arrow-left"></a>'),s=b('<a class="lightbox-arrow-right"></a>'),t=b('<a class="lightbox-close"></a>'),g=!1;b.fn.touchTouch=function(){function w(a){if(g)return!1;e.show();setTimeout(function(){e.addClass("visible")},100);m(a);g=!0}function n(){if(!g)return!1;e.hide().removeClass("visible");g=!1;b(".placeholder").empty();f=u}function m(a){c.css("left",
100*-a+"%");(a=f.eq(a).find("img").attr("alt"))?l.html('<span class="lightbox-title-container">'+a+"</span>"):l.html("")}function h(a){setTimeout(function(){v(a)},1E3)}function v(a){if(0>a||a>=f.length)return!1;x(f.eq(a).attr("href"),function(){k.eq(a).html(this)})}function x(a,d){var c=b("<img>").on("load",function(){d.call(c)});c.attr("src",a)}function p(){d+1<f.length?(d++,m(d),h(d+1)):(c.addClass("rightSpring"),setTimeout(function(){c.removeClass("rightSpring")},500))}function q(){0<d?(d--,m(d),
h(d-1)):(c.addClass("leftSpring"),setTimeout(function(){c.removeClass("leftSpring")},500))}var k=b([]),d=0,u=this,f=u;e.hide().appendTo("body");c.appendTo(e);t.appendTo(e);l.appendTo(e);f.each(function(){k=k.add(b('<div class="placeholder">'))});c.append(k).on("click",function(a){b(a.target).is("img")||n()});t.on("click",function(a){b(a.target).is("img")||n()});b("body").on("touchstart",".lightbox-slider img",function(a){var b=a.originalEvent,d=b.changedTouches[0].pageX;c.on("touchmove",function(a){a.preventDefault();
b=a.originalEvent.touches[0]||a.originalEvent.changedTouches[0];10<b.pageX-d?(c.off("touchmove"),q()):-10>b.pageX-d&&(c.off("touchmove"),p())});return!1}).on("touchend",function(){c.off("touchmove")});f.on("click",function(a){a.preventDefault();a=b(this);var c,e,g=a.parent().closest("[data-gallery]");a.attr("data-gallery")?(c=a.attr("data-gallery"),e="item"):g.length&&(c=g.attr("data-gallery"),e="ancestor");c&&"item"==e?f=b("[data-gallery="+c+"]"):c&&"ancestor"==e&&(f=f.filter(function(){return b(this).parent().closest("[data-gallery]").length}));
d=f.index(this);w(d);v(d);h(d+1);h(d-1)});"ontouchstart"in window||(e.append(r).append(s),r.click(function(a){a.preventDefault();q()}),s.click(function(a){a.preventDefault();p()}));b(window).bind("keydown",function(a){37==a.keyCode?q():39==a.keyCode&&p();27==a.keyCode&&n()})}})(jQuery);
