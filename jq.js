$(document).keyup(function (e) {

    const baseurl = location.href.substring(0, location.href.lastIndexOf("/")+1);
    var path = window.location.pathname;
    var page = path.split("/").pop();

    switch (page) {
        case 'index.html':
            doIndex(e.keyCode);
            break;
        case 'rankings.html':
            doRankings(e.keyCode);
            break;
        case 'start.html':
            doStart(e.keyCode);
            break;
    }
    





    
    function doIndex(e) {
        if (e == 38) {  window.location.href = baseurl+'start.html';}
        if (e == 40) {  window.location.href = baseurl+'rankings.html';}
    }

    function doRankings(e) {
        if (e == 27) {  window.location.href = baseurl+'index.html';}
    }

    function doStart(e) {
        overlay = $("#overlay").css('display');
        switch (overlay) {
            case 'flex':
                if (e == 27) {  window.location.href = baseurl+'index.html';}
                // if (e == 13) {  console.log('submit');  location.reload();}
                break;
            case 'none':
                if (e == 39) {  $("#overlay").fadeTo(100, 1).css('display', 'flex');}
                if (e == 37) {  window.location.href = baseurl+'index.html';}
                break;
        }        
    }
});
