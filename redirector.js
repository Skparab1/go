var loc = window.location.href;
kew_found = loc.replace('https://skparab1.github.io/go/','')

var keywords = [];
var urls = [];
var foundredirect = false;

//keywords is the keyw array and urls is the url array
(async () => {
    const data1 = await fetch("./redirects.json").then(r => r.json());
    
})();

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
