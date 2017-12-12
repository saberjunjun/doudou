(function (doc, win) {
 	var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
        var clientWidth = docEl.clientWidth;
        clientWidth = Math.max(Math.min(768,clientWidth),320);
        if (!clientWidth) return;
        docEl.style.fontSize = (clientWidth / 320)*10 + 'px';
    };
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);