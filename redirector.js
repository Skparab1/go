//----------------- PLEASE NO CHANGES BELOW THIS LINE (until i say so)--------------------------
var loc = window.location.href;
kew_found = loc.replace('https://skparab1.github.io/go/','')

var keywords = [];
var urls = [];
var foundredirect = false;

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
r('s','https://skparab1.github.io/search')
r('traffic','https://skparab1.github.io/traffic_simulator')

//------------------ PLEASE NO CHANGES BELOW THIS LINE (until i say so)--------------------------

let index = 0;
while (index < keywords.length){
    if (keywords[index] == kew_found){
        let goto = urls[index];
        goto = goto.replace('https://','');
        goto = 'https://'+goto;
        window.open(goto,"_self");
        foundredirect = true;
    }
    index += 1;
}

if (!foundredirect){
    window.open('https://skparab1.github.io/wrongredirect',"_self");
}
