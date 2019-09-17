"use strict";$(document).ready(function(){function e(e){e.on("wheel",function(e){e.preventDefault(),e.originalEvent.deltaY<0?$(this).slick("slickNext"):$(this).slick("slickPrev")})}function t(e,t){$(e).on("init reInit afterChange",function(e,o,i,n){var s=(i?i:0)+1;$(t).text(s+"/"+o.slideCount)})}function o(e){var t=document.getElementsByClassName("grid")[0],o=parseInt(window.getComputedStyle(t).getPropertyValue("grid-auto-rows")),i=parseInt(window.getComputedStyle(t).getPropertyValue("grid-row-gap")),n=Math.ceil((e.querySelector(".content").getBoundingClientRect().height+i)/(o+i));e.style.gridRowEnd="span "+n}function i(){for(var e=$(".catalog .item"),t=0;t<e.length&&!window.CP.shouldStopExecution(0);t++)o(e[t]);window.CP.exitedLoop(0)}const n=$(".slider-my"),s=$(".notice .slider-notice, .enterprise .slider-ent");var a=new Swiper(".gallery-thumbs",{spaceBetween:10,slidesPerView:5,loop:!0,freeMode:!0,loopedSlides:5,watchSlidesVisibility:!0,watchSlidesProgress:!0});new Swiper(".gallery-top",{spaceBetween:10,loop:!0,loopedSlides:5,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:a},pagination:{el:".swiper-pagination",type:"fraction",renderFraction:function(e,t){return'<span class="'+e+'"></span><span class="fr">из</span><span class="'+t+'"></span>'}}});t(".slider-my",".slider-count-mobile"),t(".enterprise .slider-ent",".slider-count-mobile-ent"),t(".n-group .slider-notice",".slider-count-mobile-notice"),n.slick({dots:!1,infinite:!0,slidesToShow:5,slidesToScroll:1,variableWidth:!0,responsive:[{breakpoint:620,settings:{variableWidth:!1,slidesToShow:1}}]}),s.slick({dots:!1,infinite:!0,slidesToShow:2,slidesToScroll:1,variableWidth:!0,responsive:[{breakpoint:620,settings:{variableWidth:!1,slidesToShow:1}}]}),e(n),e(s),$(".nav-block img").click(function(){$(".menu-wrapper").addClass("menu-active")}),$("nav img, nav .texts, nav .btn, .grey-bg").click(function(){$(".menu-wrapper").removeClass("menu-active")}),$(".slider-my .detals").click(function(e){e.preventDefault(),$(".slider-my .info").not($(this).closest(".selected")).removeClass("selected"),$(this).closest(".info").toggleClass("selected")}),$(".slider-ent .detals").click(function(e){e.preventDefault(),$(".slider-ent .texts .detals-text").removeClass("selected"),$(this).closest(".texts ").toggleClass("selected")}),$(".enterprise-page .filter-company .detals").click(function(e){e.preventDefault(),$(".enterprise-page .filter-company .detals-text").removeClass("selected"),$(this).closest(".texts ").toggleClass("selected")}),$(".footer-wrapper .block").click(function(e){e.preventDefault(),$(this).toggleClass("footer-active")});var r=0;$(window).scroll(function(e){var t=$(this).scrollTop();t>r?$("header .header-move").addClass("header-scroll"):$("header .header-move").removeClass("header-scroll"),r=t}),$(".personal-page .controls .btn-s").on("click",function(){$(".personal-page .controls .btn-s").removeClass("active"),$(this).addClass("active"),$(this).hasClass("for-about-us")?($(".personal-page .about-us").css("display","flex"),$(".personal-page .tab-comments").css("display","none")):$(this).hasClass("for-tab-comments")?($(".personal-page .tab-comments").css("display","flex"),$(".personal-page .about-us").css("display","none")):($(".personal-page .about-us").css("display","none"),$(".personal-page .tab-comments").css("display","none"))}),$(".company-page .catalog .item .title").on("click",function(){window.matchMedia("(max-width: 620px)").matches&&(0===$(this).parent().height()?($(this).parent().height($(this).parent().find(".items").height()+45),$(this).parent().addClass("active-item")):($(this).parent().height(0),$(this).parent().removeClass("active-item")),$(".company-page .catalog .item .block").not($(this).parent()).height(0),$(this).parent().css("zIndex",6),$(".company-page .catalog .item .block").not($(this).parent()).removeClass("active-item"),$(".company-page .catalog .item .block").not($(this).parent()).css("zIndex",5))}),$(".company-page .catalog .item .else").on("click",function(){195===$(this).parent().height()?($(this).parent().height($(this).parent().find(".items").height()+45),$(this).parent().addClass("active-item")):($(this).parent().height(195),$(this).parent().removeClass("active-item")),$(".company-page .catalog .item .block").not($(this).parent()).height(195),$(this).parent().css("zIndex",6),$(".company-page .catalog .item .block").not($(this).parent()).removeClass("active-item"),$(".company-page .catalog .item .block").not($(this).parent()).css("zIndex",5)}),$(".company-page .list .loading").on("click",function(){$(this).parent().addClass("active-list")}),setTimeout(function(){$(".enterprise-page .grid .item .content").css("height","100%")}),$(".filter .points").on("click",function(){$(".category-modal").toggleClass("show")}),$(".announcement-page .clerk .text").on("click",function(){$(this).parent().toggleClass("hide")}),$(".announcement-page .mobile-call .wrapp").on("click",function(){$(this).parent().find(".modal").addClass("active")}),$(".announcement-page .mobile-call .fa-times").on("click",function(){$(this).parent().parent().toggleClass("active")}),"object"!=typeof window.CP&&(window.CP={}),window.CP.PenTimer={programNoLongerBeingMonitored:!1,timeOfFirstCallToShouldStopLoop:0,_loopExits:{},_loopTimers:{},START_MONITORING_AFTER:2e3,STOP_ALL_MONITORING_TIMEOUT:5e3,MAX_TIME_IN_LOOP_WO_EXIT:2200,exitedLoop:function(e){this._loopExits[e]=!0},shouldStopLoop:function(e){if(this.programKilledSoStopMonitoring)return!0;if(this.programNoLongerBeingMonitored)return!1;if(this._loopExits[e])return!1;var t=this._getTime();if(0===this.timeOfFirstCallToShouldStopLoop)return this.timeOfFirstCallToShouldStopLoop=t,!1;var o=t-this.timeOfFirstCallToShouldStopLoop;if(o<this.START_MONITORING_AFTER)return!1;if(o>this.STOP_ALL_MONITORING_TIMEOUT)return this.programNoLongerBeingMonitored=!0,!1;try{this._checkOnInfiniteLoop(e,t)}catch(i){return this._sendErrorMessageToEditor(),this.programKilledSoStopMonitoring=!0,!0}return!1},_sendErrorMessageToEditor:function(){try{if(this._shouldPostMessage()){var e={action:"infinite-loop",line:this._findAroundLineNumber()};parent.postMessage(e,"*")}else this._throwAnErrorToStopPen()}catch(t){this._throwAnErrorToStopPen()}},_shouldPostMessage:function(){return document.location.href.match(/boomerang/)},_throwAnErrorToStopPen:function(){throw"We found an infinite loop in your Pen. We've stopped the Pen from running. Please correct it or contact support@codepen.io."},_findAroundLineNumber:function(){var e=new Error,t=0;if(e.stack){var o=e.stack.match(/boomerang\S+:(\d+):\d+/);o&&(t=o[1])}return t},_checkOnInfiniteLoop:function(e,t){if(!this._loopTimers[e])return this._loopTimers[e]=t,!1;if(t-this._loopTimers[e]>this.MAX_TIME_IN_LOOP_WO_EXIT)throw"Infinite Loop found on loop: "+e},_getTime:function(){return+new Date}},window.CP.shouldStopExecution=function(e){var t=window.CP.PenTimer.shouldStopLoop(e);return!0===t&&console.warn("Sorry!"),t},window.CP.exitedLoop=function(e){window.CP.PenTimer.exitedLoop(e)},window.onload=i(),window.addEventListener("resize",i);for(var l=document.getElementsByClassName("item"),c=0;c<l.length&&!window.CP.shouldStopExecution(1);c++);window.CP.exitedLoop(1)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJtb3VzZVdoZWVsIiwiZWxlbWVudCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib3JpZ2luYWxFdmVudCIsImRlbHRhWSIsInRoaXMiLCJzbGljayIsImNvdW50IiwiZWwiLCJjX2VsIiwiZXZlbnQiLCJjdXJyZW50U2xpZGUiLCJuZXh0U2xpZGUiLCJpIiwidGV4dCIsInNsaWRlQ291bnQiLCJyZXNpemVHcmlkSXRlbSIsIml0ZW0iLCJncmlkIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInJvd0hlaWdodCIsInBhcnNlSW50Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJyb3dHYXAiLCJyb3dTcGFuIiwiTWF0aCIsImNlaWwiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwic3R5bGUiLCJncmlkUm93RW5kIiwicmVzaXplQWxsR3JpZEl0ZW1zIiwiYWxsSXRlbXMiLCJ4IiwibGVuZ3RoIiwiQ1AiLCJzaG91bGRTdG9wRXhlY3V0aW9uIiwiZXhpdGVkTG9vcCIsInNsaWRlciIsInNsaWRlcl9ub3RpY2UiLCJnYWxsZXJ5VGh1bWJzIiwiU3dpcGVyIiwic3BhY2VCZXR3ZWVuIiwic2xpZGVzUGVyVmlldyIsImxvb3AiLCJmcmVlTW9kZSIsImxvb3BlZFNsaWRlcyIsIndhdGNoU2xpZGVzVmlzaWJpbGl0eSIsIndhdGNoU2xpZGVzUHJvZ3Jlc3MiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwidGh1bWJzIiwic3dpcGVyIiwicGFnaW5hdGlvbiIsInR5cGUiLCJyZW5kZXJGcmFjdGlvbiIsImN1cnJlbnRDbGFzcyIsInRvdGFsQ2xhc3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInZhcmlhYmxlV2lkdGgiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiY2xpY2siLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwibm90IiwiY2xvc2VzdCIsInRvZ2dsZUNsYXNzIiwibGFzdFNjcm9sbFRvcCIsInNjcm9sbCIsInN0Iiwic2Nyb2xsVG9wIiwiaGFzQ2xhc3MiLCJjc3MiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInBhcmVudCIsImZpbmQiLCJzZXRUaW1lb3V0IiwiUGVuVGltZXIiLCJwcm9ncmFtTm9Mb25nZXJCZWluZ01vbml0b3JlZCIsInRpbWVPZkZpcnN0Q2FsbFRvU2hvdWxkU3RvcExvb3AiLCJfbG9vcEV4aXRzIiwiX2xvb3BUaW1lcnMiLCJTVEFSVF9NT05JVE9SSU5HX0FGVEVSIiwiU1RPUF9BTExfTU9OSVRPUklOR19USU1FT1VUIiwiTUFYX1RJTUVfSU5fTE9PUF9XT19FWElUIiwibyIsInNob3VsZFN0b3BMb29wIiwicHJvZ3JhbUtpbGxlZFNvU3RvcE1vbml0b3JpbmciLCJ0IiwiX2dldFRpbWUiLCJfY2hlY2tPbkluZmluaXRlTG9vcCIsIl9zZW5kRXJyb3JNZXNzYWdlVG9FZGl0b3IiLCJfc2hvdWxkUG9zdE1lc3NhZ2UiLCJhY3Rpb24iLCJsaW5lIiwiX2ZpbmRBcm91bmRMaW5lTnVtYmVyIiwicG9zdE1lc3NhZ2UiLCJfdGhyb3dBbkVycm9yVG9TdG9wUGVuIiwibG9jYXRpb24iLCJocmVmIiwibWF0Y2giLCJFcnJvciIsInN0YWNrIiwiRGF0ZSIsImNvbnNvbGUiLCJ3YXJuIiwib25sb2FkIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFDQUEsR0FBRUMsVUFBVUMsTUFBTSxXQXNDZCxRQUFTQyxHQUFXQyxHQUNoQkEsRUFBUUMsR0FBRyxRQUFTLFNBQVVDLEdBQzFCQSxFQUFFQyxpQkFFRUQsRUFBRUUsY0FBY0MsT0FBUyxFQUN6QlQsRUFBRVUsTUFBTUMsTUFBTSxhQUVkWCxFQUFFVSxNQUFNQyxNQUFNLGVBSTFCLFFBQVVDLEdBQU1DLEVBQUlDLEdBQ2hC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RWhCLE1BQU9xRixJQUVYRSxxQkFBc0IsU0FBU0wsRUFBR0csR0FDOUIsSUFBSzdGLEtBQUtzRixZQUFZSSxHQUFJLE1BQU8xRixNQUFLc0YsWUFBWUksR0FBS0csR0FBRyxDQUMxRCxJQUFJQSxFQUFJN0YsS0FBS3NGLFlBQVlJLEdBQUsxRixLQUFLeUYseUJBQTBCLEtBQU0sZ0NBQWtDQyxHQUV6R0ksU0FBVSxXQUNOLE9BQVEsR0FBSWMsUUFFakIzRixPQUFPZ0IsR0FBR0Msb0JBQXNCLFNBQVN3RCxHQUN4QyxHQUFJRyxHQUFJNUUsT0FBT2dCLEdBQUdpRCxTQUFTUyxlQUFlRCxFQUMxQyxRQUFPLElBQU9HLEdBQUtnQixRQUFRQyxLQUFLLFVBQVdqQixHQUM1QzVFLE9BQU9nQixHQUFHRSxXQUFhLFNBQVN1RCxHQUMvQnpFLE9BQU9nQixHQUFHaUQsU0FBUy9DLFdBQVd1RCxJQXVCbEN6RSxPQUFPOEYsT0FBU2xGLElBQ2hCWixPQUFPK0YsaUJBQWlCLFNBQVVuRixFQUdsQyxLQUFLLEdBRERDLEdBQVd2QyxTQUFTdUIsdUJBQXVCLFFBQ3RDaUIsRUFBSSxFQUFHQSxFQUFJRCxFQUFTRSxTQUFrQmYsT0FBT2dCLEdBQUdDLG9CQUFvQixHQUF4Q0gsS0FFcENkLE9BQU9nQixHQUFHRSxXQUFXIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IHNsaWRlciA9ICQoXCIuc2xpZGVyLW15XCIpO1xyXG4gICAgY29uc3Qgc2xpZGVyX25vdGljZSA9ICQoXCIubm90aWNlIC5zbGlkZXItbm90aWNlLCAuZW50ZXJwcmlzZSAuc2xpZGVyLWVudFwiKTtcclxuXHJcbiAgICAvLyBnYWxsZXJ5IGluaXRcclxuICAgIHZhciBnYWxsZXJ5VGh1bWJzID0gbmV3IFN3aXBlcignLmdhbGxlcnktdGh1bWJzJywge1xyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIGZyZWVNb2RlOiB0cnVlLFxyXG4gICAgICAgIGxvb3BlZFNsaWRlczogNSwgLy9sb29wZWQgc2xpZGVzIHNob3VsZCBiZSB0aGUgc2FtZVxyXG4gICAgICAgIHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogdHJ1ZSxcclxuICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICB2YXIgZ2FsbGVyeVRvcCA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5LXRvcCcsIHtcclxuICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgIGxvb3A6dHJ1ZSxcclxuICAgICAgICBsb29wZWRTbGlkZXM6IDUsIC8vbG9vcGVkIHNsaWRlcyBzaG91bGQgYmUgdGhlIHNhbWVcclxuICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRodW1iczoge1xyXG4gICAgICAgICAgICBzd2lwZXI6IGdhbGxlcnlUaHVtYnMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ZyYWN0aW9uJyxcclxuICAgICAgICAgICAgcmVuZGVyRnJhY3Rpb246IGZ1bmN0aW9uIChjdXJyZW50Q2xhc3MsIHRvdGFsQ2xhc3MpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgY3VycmVudENsYXNzICsgJ1wiPjwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJmclwiPtC40Lc8L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiJyArIHRvdGFsQ2xhc3MgKyAnXCI+PC9zcGFuPic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vIHNsaWRlciBtb3VzZSB3aGVlbFxyXG4gICAgZnVuY3Rpb24gbW91c2VXaGVlbChlbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5vbignd2hlZWwnLCAoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZS5vcmlnaW5hbEV2ZW50LmRlbHRhWSA8IDApIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuc2xpY2soJ3NsaWNrTmV4dCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zbGljaygnc2xpY2tQcmV2Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiAgY291bnQoZWwsIGNfZWwpIHtcclxuICAgICAgICAkKGVsKS5vbignaW5pdCByZUluaXQgYWZ0ZXJDaGFuZ2UnLCBmdW5jdGlvbihldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKXtcclxuICAgICAgICAgICAgdmFyIGkgPSAoY3VycmVudFNsaWRlID8gY3VycmVudFNsaWRlIDogMCkgKyAxO1xyXG4gICAgICAgICAgICAkKGNfZWwpLnRleHQoaSArICcvJyArIHNsaWNrLnNsaWRlQ291bnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNsaWRlcnMgaW5pdFxyXG4gICAgY291bnQoJy5zbGlkZXItbXknLCAnLnNsaWRlci1jb3VudC1tb2JpbGUnKTtcclxuICAgIGNvdW50KCcuZW50ZXJwcmlzZSAuc2xpZGVyLWVudCcsICcuc2xpZGVyLWNvdW50LW1vYmlsZS1lbnQnKTtcclxuICAgIGNvdW50KCcubi1ncm91cCAuc2xpZGVyLW5vdGljZScsICcuc2xpZGVyLWNvdW50LW1vYmlsZS1ub3RpY2UnKTtcclxuICAgIHNsaWRlci5zbGljayh7XHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA2MjAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcbiAgICBzbGlkZXJfbm90aWNlLnNsaWNrKHtcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDYyMCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuICAgIG1vdXNlV2hlZWwoc2xpZGVyKTtcclxuICAgIG1vdXNlV2hlZWwoc2xpZGVyX25vdGljZSk7XHJcblxyXG4gICAgLy8gbWVudSB0b2dnbGVcclxuICAgICQoJy5uYXYtYmxvY2sgaW1nJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5tZW51LXdyYXBwZXInKS5hZGRDbGFzcygnbWVudS1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gICAgJCgnbmF2IGltZywgbmF2IC50ZXh0cywgbmF2IC5idG4sIC5ncmV5LWJnJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5tZW51LXdyYXBwZXInKS5yZW1vdmVDbGFzcygnbWVudS1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHRvZ2dsZSBzbGlkZXIgaXRlbSBkZXRhbHNcclxuICAgICQoJy5zbGlkZXItbXkgLmRldGFscycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoXCIuc2xpZGVyLW15IC5pbmZvXCIpLm5vdCgkKHRoaXMpLmNsb3Nlc3QoJy5zZWxlY3RlZCcpKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmluZm8nKS50b2dnbGVDbGFzcygnc2VsZWN0ZWQnKTtcclxuXHJcbiAgICB9KTtcclxuICAgICQoJy5zbGlkZXItZW50IC5kZXRhbHMnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgJChcIi5zbGlkZXItZW50IC50ZXh0cyAuZGV0YWxzLXRleHRcIikucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy50ZXh0cyAnKS50b2dnbGVDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLmVudGVycHJpc2UtcGFnZSAuZmlsdGVyLWNvbXBhbnkgLmRldGFscycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAkKFwiLmVudGVycHJpc2UtcGFnZSAuZmlsdGVyLWNvbXBhbnkgLmRldGFscy10ZXh0XCIpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcudGV4dHMgJykudG9nZ2xlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICB9KTtcclxuICAgICQoJy5mb290ZXItd3JhcHBlciAuYmxvY2snKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdmb290ZXItYWN0aXZlJyk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIHNjcm9sbCAgdXAgLyBkb3duXHJcbiAgICB2YXIgbGFzdFNjcm9sbFRvcCA9IDA7XHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIHZhciBzdCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgaWYgKHN0ID4gbGFzdFNjcm9sbFRvcCl7XHJcbiAgICAgICAgICAgICQoJ2hlYWRlciAuaGVhZGVyLW1vdmUnKS5hZGRDbGFzcygnaGVhZGVyLXNjcm9sbCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnaGVhZGVyIC5oZWFkZXItbW92ZScpLnJlbW92ZUNsYXNzKCdoZWFkZXItc2Nyb2xsJylcclxuICAgICAgICB9XHJcbiAgICAgICAgbGFzdFNjcm9sbFRvcCA9IHN0O1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcGVyc29uYWwgdGFic1xyXG4gICAgJCgnLnBlcnNvbmFsLXBhZ2UgLmNvbnRyb2xzIC5idG4tcycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcucGVyc29uYWwtcGFnZSAuY29udHJvbHMgLmJ0bi1zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdmb3ItYWJvdXQtdXMnKSl7XHJcbiAgICAgICAgICAgICQoJy5wZXJzb25hbC1wYWdlIC5hYm91dC11cycpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XHJcbiAgICAgICAgICAgICQoJy5wZXJzb25hbC1wYWdlIC50YWItY29tbWVudHMnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIH0gZWxzZSBpZigkKHRoaXMpLmhhc0NsYXNzKCdmb3ItdGFiLWNvbW1lbnRzJykpe1xyXG4gICAgICAgICAgICAkKCcucGVyc29uYWwtcGFnZSAudGFiLWNvbW1lbnRzJykuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKTtcclxuICAgICAgICAgICAgJCgnLnBlcnNvbmFsLXBhZ2UgLmFib3V0LXVzJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICQoJy5wZXJzb25hbC1wYWdlIC5hYm91dC11cycpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgICQoJy5wZXJzb25hbC1wYWdlIC50YWItY29tbWVudHMnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vY29tcGFueSBpdGVtc1xyXG4gICAgJCgnLmNvbXBhbnktcGFnZSAuY2F0YWxvZyAuaXRlbSAudGl0bGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA2MjBweCknKS5tYXRjaGVzKSB7XHJcbiAgICAgICAgICAgIC8vIG1vYmlsZVxyXG4gICAgICAgICAgICBpZigkKHRoaXMpLnBhcmVudCgpLmhlaWdodCgpID09PSAwKXtcclxuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuaGVpZ2h0KCQodGhpcykucGFyZW50KCkuZmluZCgnLml0ZW1zJykuaGVpZ2h0KCkgKyA0NSk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUtaXRlbScpO1xyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmhlaWdodCgwKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1pdGVtJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCgnLmNvbXBhbnktcGFnZSAuY2F0YWxvZyAuaXRlbSAuYmxvY2snKS5ub3QoJCh0aGlzKS5wYXJlbnQoKSkuaGVpZ2h0KDApO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNzcygnekluZGV4JywgNik7XHJcbiAgICAgICAgICAgICQoJy5jb21wYW55LXBhZ2UgLmNhdGFsb2cgLml0ZW0gLmJsb2NrJykubm90KCQodGhpcykucGFyZW50KCkpLnJlbW92ZUNsYXNzKCdhY3RpdmUtaXRlbScpO1xyXG4gICAgICAgICAgICAkKCcuY29tcGFueS1wYWdlIC5jYXRhbG9nIC5pdGVtIC5ibG9jaycpLm5vdCgkKHRoaXMpLnBhcmVudCgpKS5jc3MoJ3pJbmRleCcsIDUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJCgnLmNvbXBhbnktcGFnZSAuY2F0YWxvZyAuaXRlbSAuZWxzZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBkZXNrdG9wXHJcbiAgICAgICAgICAgIGlmKCQodGhpcykucGFyZW50KCkuaGVpZ2h0KCkgPT09IDE5NSl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmhlaWdodCgkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5pdGVtcycpLmhlaWdodCgpICsgNDUpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlLWl0ZW0nKTtcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5oZWlnaHQoMTk1KTtcclxuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1pdGVtJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCgnLmNvbXBhbnktcGFnZSAuY2F0YWxvZyAuaXRlbSAuYmxvY2snKS5ub3QoJCh0aGlzKS5wYXJlbnQoKSkuaGVpZ2h0KDE5NSk7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuY3NzKCd6SW5kZXgnLCA2KTtcclxuICAgICAgICAgICAgJCgnLmNvbXBhbnktcGFnZSAuY2F0YWxvZyAuaXRlbSAuYmxvY2snKS5ub3QoJCh0aGlzKS5wYXJlbnQoKSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1pdGVtJyk7XHJcbiAgICAgICAgICAgICQoJy5jb21wYW55LXBhZ2UgLmNhdGFsb2cgLml0ZW0gLmJsb2NrJykubm90KCQodGhpcykucGFyZW50KCkpLmNzcygnekluZGV4JywgNSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuY29tcGFueS1wYWdlIC5saXN0IC5sb2FkaW5nJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZS1saXN0Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuZW50ZXJwcmlzZS1wYWdlIC5ncmlkIC5pdGVtIC5jb250ZW50JykuY3NzKCdoZWlnaHQnLCAnMTAwJScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdG9nZ2xlIGNhdGVnb3J5IGJsb2NrXHJcbiAgICAkKCcuZmlsdGVyIC5wb2ludHMnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmNhdGVnb3J5LW1vZGFsJykudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHRvZ2dsZSBhbm5vdW5jZW1lbnQgcGhvbmUgc2hvd1xyXG4gICAgJCgnLmFubm91bmNlbWVudC1wYWdlIC5jbGVyayAudGV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdoaWRlJyk7XHJcbiAgICB9KTtcclxuICAgIC8vIG9wZW4gYW5ub3VuY2VtZW50IG1vZGFsXHJcbiAgICAkKCcuYW5ub3VuY2VtZW50LXBhZ2UgLm1vYmlsZS1jYWxsIC53cmFwcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5tb2RhbCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gICAgLy8gY2xvc2UgYW5ub3VuY2VtZW50IG1vZGFsXHJcbiAgICAkKCcuYW5ub3VuY2VtZW50LXBhZ2UgLm1vYmlsZS1jYWxsIC5mYS10aW1lcycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgXCJvYmplY3RcIiAhPSB0eXBlb2Ygd2luZG93LkNQICYmICh3aW5kb3cuQ1AgPSB7fSksIHdpbmRvdy5DUC5QZW5UaW1lciA9IHtcclxuICAgICAgICBwcm9ncmFtTm9Mb25nZXJCZWluZ01vbml0b3JlZDogITEsXHJcbiAgICAgICAgdGltZU9mRmlyc3RDYWxsVG9TaG91bGRTdG9wTG9vcDogMCxcclxuICAgICAgICBfbG9vcEV4aXRzOiB7fSxcclxuICAgICAgICBfbG9vcFRpbWVyczoge30sXHJcbiAgICAgICAgU1RBUlRfTU9OSVRPUklOR19BRlRFUjogMmUzLFxyXG4gICAgICAgIFNUT1BfQUxMX01PTklUT1JJTkdfVElNRU9VVDogNWUzLFxyXG4gICAgICAgIE1BWF9USU1FX0lOX0xPT1BfV09fRVhJVDogMjIwMCxcclxuICAgICAgICBleGl0ZWRMb29wOiBmdW5jdGlvbihvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvb3BFeGl0c1tvXSA9ICEwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG91bGRTdG9wTG9vcDogZnVuY3Rpb24obykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ncmFtS2lsbGVkU29TdG9wTW9uaXRvcmluZykgcmV0dXJuICEwO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ncmFtTm9Mb25nZXJCZWluZ01vbml0b3JlZCkgcmV0dXJuICExO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbG9vcEV4aXRzW29dKSByZXR1cm4gITE7XHJcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcy5fZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICBpZiAoMCA9PT0gdGhpcy50aW1lT2ZGaXJzdENhbGxUb1Nob3VsZFN0b3BMb29wKSByZXR1cm4gdGhpcy50aW1lT2ZGaXJzdENhbGxUb1Nob3VsZFN0b3BMb29wID0gdCwgITE7XHJcbiAgICAgICAgICAgIHZhciBpID0gdCAtIHRoaXMudGltZU9mRmlyc3RDYWxsVG9TaG91bGRTdG9wTG9vcDtcclxuICAgICAgICAgICAgaWYgKGkgPCB0aGlzLlNUQVJUX01PTklUT1JJTkdfQUZURVIpIHJldHVybiAhMTtcclxuICAgICAgICAgICAgaWYgKGkgPiB0aGlzLlNUT1BfQUxMX01PTklUT1JJTkdfVElNRU9VVCkgcmV0dXJuIHRoaXMucHJvZ3JhbU5vTG9uZ2VyQmVpbmdNb25pdG9yZWQgPSAhMCwgITE7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja09uSW5maW5pdGVMb29wKG8sIHQpXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZW5kRXJyb3JNZXNzYWdlVG9FZGl0b3IoKSwgdGhpcy5wcm9ncmFtS2lsbGVkU29TdG9wTW9uaXRvcmluZyA9ICEwLCAhMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAhMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX3NlbmRFcnJvck1lc3NhZ2VUb0VkaXRvcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2hvdWxkUG9zdE1lc3NhZ2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwiaW5maW5pdGUtbG9vcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lOiB0aGlzLl9maW5kQXJvdW5kTGluZU51bWJlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQucG9zdE1lc3NhZ2UobywgXCIqXCIpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgdGhpcy5fdGhyb3dBbkVycm9yVG9TdG9wUGVuKClcclxuICAgICAgICAgICAgfSBjYXRjaCAodCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdGhyb3dBbkVycm9yVG9TdG9wUGVuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX3Nob3VsZFBvc3RNZXNzYWdlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYubWF0Y2goL2Jvb21lcmFuZy8pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBfdGhyb3dBbkVycm9yVG9TdG9wUGVuOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJXZSBmb3VuZCBhbiBpbmZpbml0ZSBsb29wIGluIHlvdXIgUGVuLiBXZSd2ZSBzdG9wcGVkIHRoZSBQZW4gZnJvbSBydW5uaW5nLiBQbGVhc2UgY29ycmVjdCBpdCBvciBjb250YWN0IHN1cHBvcnRAY29kZXBlbi5pby5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX2ZpbmRBcm91bmRMaW5lTnVtYmVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIG8gPSBuZXcgRXJyb3IsXHJcbiAgICAgICAgICAgICAgICB0ID0gMDtcclxuICAgICAgICAgICAgaWYgKG8uc3RhY2spIHtcclxuICAgICAgICAgICAgICAgIHZhciBpID0gby5zdGFjay5tYXRjaCgvYm9vbWVyYW5nXFxTKzooXFxkKyk6XFxkKy8pO1xyXG4gICAgICAgICAgICAgICAgaSAmJiAodCA9IGlbMV0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRcclxuICAgICAgICB9LFxyXG4gICAgICAgIF9jaGVja09uSW5maW5pdGVMb29wOiBmdW5jdGlvbihvLCB0KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fbG9vcFRpbWVyc1tvXSkgcmV0dXJuIHRoaXMuX2xvb3BUaW1lcnNbb10gPSB0LCAhMTtcclxuICAgICAgICAgICAgaWYgKHQgLSB0aGlzLl9sb29wVGltZXJzW29dID4gdGhpcy5NQVhfVElNRV9JTl9MT09QX1dPX0VYSVQpIHRocm93IFwiSW5maW5pdGUgTG9vcCBmb3VuZCBvbiBsb29wOiBcIiArIG9cclxuICAgICAgICB9LFxyXG4gICAgICAgIF9nZXRUaW1lOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuICtuZXcgRGF0ZVxyXG4gICAgICAgIH1cclxuICAgIH0sIHdpbmRvdy5DUC5zaG91bGRTdG9wRXhlY3V0aW9uID0gZnVuY3Rpb24obykge1xyXG4gICAgICAgIHZhciB0ID0gd2luZG93LkNQLlBlblRpbWVyLnNob3VsZFN0b3BMb29wKG8pO1xyXG4gICAgICAgIHJldHVybiAhMCA9PT0gdCAmJiBjb25zb2xlLndhcm4oXCJTb3JyeSFcIiksIHRcclxuICAgIH0sIHdpbmRvdy5DUC5leGl0ZWRMb29wID0gZnVuY3Rpb24obykge1xyXG4gICAgICAgIHdpbmRvdy5DUC5QZW5UaW1lci5leGl0ZWRMb29wKG8pXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiByZXNpemVHcmlkSXRlbShpdGVtKSB7XHJcbiAgICAgICAgdmFyIGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ3JpZFwiKVswXTtcclxuICAgICAgICB2YXIgcm93SGVpZ2h0ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZ3JpZCkuZ2V0UHJvcGVydHlWYWx1ZSgnZ3JpZC1hdXRvLXJvd3MnKSk7XHJcbiAgICAgICAgdmFyIHJvd0dhcCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGdyaWQpLmdldFByb3BlcnR5VmFsdWUoJ2dyaWQtcm93LWdhcCcpKTtcclxuICAgICAgICB2YXIgcm93U3BhbiA9IE1hdGguY2VpbCgoaXRlbS5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArIHJvd0dhcCkgLyAocm93SGVpZ2h0ICsgcm93R2FwKSk7XHJcbiAgICAgICAgaXRlbS5zdHlsZS5ncmlkUm93RW5kID0gXCJzcGFuIFwiICsgcm93U3BhbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gcmVzaXplQWxsR3JpZEl0ZW1zKCkge1xyXG4gICAgICAgIHZhciBhbGxJdGVtcyA9ICQoXCIuY2F0YWxvZyAuaXRlbVwiKTtcclxuICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IGFsbEl0ZW1zLmxlbmd0aDsgeCsrKSB7aWYgKHdpbmRvdy5DUC5zaG91bGRTdG9wRXhlY3V0aW9uKDApKSBicmVhaztcclxuICAgICAgICAgICAgcmVzaXplR3JpZEl0ZW0oYWxsSXRlbXNbeF0pO1xyXG4gICAgICAgIH13aW5kb3cuQ1AuZXhpdGVkTG9vcCgwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gcmVzaXplSW5zdGFuY2UoaW5zdGFuY2UpIHtcclxuICAgICAgICB2YXIgaXRlbSA9IGluc3RhbmNlLmVsZW1lbnRzWzBdO1xyXG4gICAgICAgIHJlc2l6ZUdyaWRJdGVtKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB3aW5kb3cub25sb2FkID0gcmVzaXplQWxsR3JpZEl0ZW1zKCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVBbGxHcmlkSXRlbXMpO1xyXG4gICAgXHJcbiAgICB2YXIgYWxsSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaXRlbVwiKTtcclxuICAgIGZvciAodmFyIHggPSAwOyB4IDwgYWxsSXRlbXMubGVuZ3RoOyB4KyspIHtpZiAod2luZG93LkNQLnNob3VsZFN0b3BFeGVjdXRpb24oMSkpIGJyZWFrO1xyXG4gICAgICAgIC8vIGltYWdlc0xvYWRlZChhbGxJdGVtc1t4XSwgcmVzaXplSW5zdGFuY2UpO1xyXG4gICAgfXdpbmRvdy5DUC5leGl0ZWRMb29wKDEpO1xyXG59KTsiXX0=
