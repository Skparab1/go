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
    
    console.log(keyworddata);
    
    keyworddata = JSON.stringify(keyworddata);
    urldata = JSON.stringify(urldata);
    
    console.log(keyworddata);
    
    keyworddata = keyworddata.replace('{"keywords":"','');
    keyworddata = keyworddata.replace('"}','');
    
    console.log(keyworddata);
    
    urldata = urldata.replace('{"urls":"','');
    urldata = urldata.replace('"}','');
    keywords = keyworddata.split('&nextentry&');
    urls = urldata.split('&nextentry&');

    let index = 0;
    while (index < keywords.length){
        if (keywords[index] == kew_found){
            let goto = urls[index];
            goto = goto.replace('https://','');
            goto = 'https://'+goto;
            document.write('<h1><a href="'+goto+'">Redirecting you to '+goto+'</a></h1>');
            window.open(goto,"_self");
            foundredirect = true;
        }
        index += 1;
    }
    
    if (!foundredirect){
        document.write('<h1>This redirect was not found on this server. Check your url.</h1>');
    }
})();
