// ==UserScript==
// @name         questionor 键盘选答案
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://questionor.cn/problemsets/*/practice
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
	var a=new Array(233);
	a[72]=0;
	a[74]=1;
	a[75]=2;
	a[76]=3;
	$(document).keydown(function(event){
		document.getElementsByTagName("label")[a[event.keyCode]].click();
	}
	);
})();
