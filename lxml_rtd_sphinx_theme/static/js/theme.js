require=function n(e,i,t){function r(s,l){if(!i[s]){if(!e[s]){var a="function"==typeof require&&require;if(!l&&a)return a(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var u=i[s]={exports:{}};e[s][0].call(u.exports,function(n){var i=e[s][1][n];return r(i||n)},u,u.exports,n,e,i,t)}return i[s].exports}for(var o="function"==typeof require&&require,s=0;s<t.length;s++)r(t[s]);return r}({"sphinx-rtd-theme":[function(n,e,i){var t="undefined"!=typeof window?window.jQuery:n("jquery");e.exports.ThemeNav=function(){var n={navBar:null,win:null,winScroll:!1,winResize:!1,linkScroll:!1,winPosition:0,winHeight:null,docHeight:null,isRunning:!1};return n.enable=function(){var n=this;n.isRunning||(n.isRunning=!0,t(function(e){n.init(e),n.reset(),n.win.on("hashchange",n.reset),n.win.on("scroll",function(){n.linkScroll||(n.winScroll=!0)}),setInterval(function(){n.winScroll&&n.onScroll()},25),n.win.on("resize",function(){n.winResize=!0}),setInterval(function(){n.winResize&&n.onResize()},25),n.onResize()}))},n.init=function(n){var e=(n(document),this);this.navBar=n("div.wy-side-scroll:first"),this.win=n(window),n(document).on("click","[data-toggle='wy-nav-top']",function(){n("[data-toggle='wy-nav-shift']").toggleClass("shift"),n("[data-toggle='rst-versions']").toggleClass("shift")}).on("click",".wy-menu-vertical .current ul li a",function(){var i=n(this);n("[data-toggle='wy-nav-shift']").removeClass("shift"),n("[data-toggle='rst-versions']").toggleClass("shift"),e.toggleCurrent(i),e.hashChange()}).on("click","[data-toggle='rst-current-version']",function(){n("[data-toggle='rst-versions']").toggleClass("shift-up")}),n("table.docutils:not(.field-list)").wrap("<div class='wy-table-responsive'></div>"),n(".wy-menu-vertical ul").not(".simple").siblings("a").each(function(){var i=n(this);expand=n('<span class="toctree-expand"></span>'),expand.on("click",function(n){return e.toggleCurrent(i),n.stopPropagation(),!1}),i.prepend(expand)})},n.reset=function(){var n=encodeURI(window.location.hash);if(n)try{var e=$(".wy-menu-vertical").find('[href="'+n+'"]');if(0===e.length){var i=$('.document a[href="'+n+'"]'),t=i.closest("div.section");e=$(".wy-menu-vertical").find('[href="#'+t.attr("id")+'"]')}$(".wy-menu-vertical li.toctree-l1 li.current").removeClass("current"),e.closest("li.toctree-l2").addClass("current"),e.closest("li.toctree-l3").addClass("current"),e.closest("li.toctree-l4").addClass("current")}catch(n){console.log("Error expanding nav for anchor",n)}},n.onScroll=function(){this.winScroll=!1;var n=this.win.scrollTop(),e=n+this.winHeight,i=this.navBar.scrollTop(),t=i+(n-this.winPosition);n<0||e>this.docHeight||(this.navBar.scrollTop(t),this.winPosition=n)},n.onResize=function(){this.winResize=!1,this.winHeight=this.win.height(),this.docHeight=$(document).height()},n.hashChange=function(){this.linkScroll=!0,this.win.one("hashchange",function(){this.linkScroll=!1})},n.toggleCurrent=function(n){var e=n.closest("li");e.siblings("li.current").removeClass("current"),e.siblings().find("li.current").removeClass("current"),e.find("> ul li.current").removeClass("current"),e.toggleClass("current")},n}(),"undefined"!=typeof window&&(window.SphinxRtdTheme={StickyNav:e.exports.ThemeNav})},{jquery:"jquery"}]},{},["sphinx-rtd-theme"]);