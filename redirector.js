var loc = window.location.href;
kew_found = loc.replace('https://skparab1.github.io/go/','')

var keywords = [];
var urls = [];
var foundredirect = false;

//keywords is the keyw array and urls is the url array
(async () => {
    const data1 = await fetch("./redirects.json").then(r => r.json());
    keyworddata = data1.data[0];
    urldata = data1.data[1];
    
    keyworddata = JSON.stringify(keyworddata);
    urldata = JSON.stringify(urldata);
    
    keyworddata = keyworddata.replace('{"keywords":"','');
    keyworddata = keyworddata.replace('"}','');
    urldata = urldata.replace('{"urls":"','');
    urldata = urldata.replace('"}','');
    keywords = oldusernames.split('&nextentry&');
    urls = oldmessages.split('&nextentry&');
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
