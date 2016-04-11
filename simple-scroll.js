/*
 * Sometimes when I'm back and forth between vim and a website, I use j/k to scroll and I get frustrated. Let's fix that!
 */
javascript:(function(){document.onkeypress=function(e){e=e||window.event;var cCode=e.keyCode||e.which;var cStr=String.fromCharCode(cCode);if(document.activeElement.tagName==='BODY'){if(cStr==='j'){window.scrollBy(0,100);}else if(cStr==='k'){window.scrollBy(0,-100);}};})();
