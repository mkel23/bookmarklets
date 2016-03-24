/*
 * If a website has been taken down, or is temporarily not accessible, we can check if there's an
 * entry on the wayback machine!
 */
javascript:(function(){window.location.href='http://web.archive.org/web/'+window.location.href.toString();})();
