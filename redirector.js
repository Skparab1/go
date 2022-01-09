//----------------- PLEASE NO CHANGES BELOW THIS LINE (until i say so)--------------------------
var loc = window.location.href;
loc = loc.replace('https://skparab1.github.io/go/','')

var keywords = [];
var urls = [];

function r(keyw_set,urw_set){
    keywords.push(keyw_set);
    urls.push(urw_set);
}

//-=---------------- OK YOU CAN MAKE CHANGES NOW--------------------------
// duplicate those lines and put keywords and urls
// in the format of r(keyword,url);
// ok with or without https://

r('test','https://www.google.com/search?q=test');
r('clarke','https://docs.google.com/document/d/12t1be3KzO0hD-UEISfK49zdyhGyRm9AcGRyol9qg6UY/edit');
r('pascal','https://skparab1.github.io/pascals_triangle')

//-=---------------- PLEASE NO CHANGES BELOW THIS LINE (until i say so)--------------------------
if (loc.includes('clarke')){
    window.open('',"_self");
} else if (loc.includes('pascal')){
    window.open('https://skparab1.github.io/pascals_triangle',"_self");
} else if (loc.includes('search')){
    window.open('https://skparab1.github.io/search',"_self");
} else if (loc.includes('traffic')){
    window.open('https://skparab1.github.io/traffic_simulator',"_self");
} else {
    window.open('https://skparab1.github.io/wrongredirect',"_self")
}

