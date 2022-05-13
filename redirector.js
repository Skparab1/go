var loc = window.location.href;
kew_found = loc.replace('https://skparab1.github.io/go/','')

var keywords = [];
var urls = [];
var foundredirect = false;
const sleep = ms => new Promise(res => setTimeout(res, ms));

function convertchars(str){
    str = str.replaceAll('%0D%0A','\n');
    str = str.replaceAll('%21','!');
    str = str.replaceAll('%40','@');
    str = str.replaceAll('%23','#');
    str = str.replaceAll('%24','$');
    str = str.replaceAll('%25','%');
    str = str.replaceAll('%5E','^');
    str = str.replaceAll('%26','&');
    str = str.replaceAll('%2A','*');
    str = str.replaceAll('%28','(');
    str = str.replaceAll('%29',')');
    str = str.replaceAll('%2B','+');
    str = str.replaceAll('%60','`');
    str = str.replaceAll('%3D','=');
    str = str.replaceAll('%5B','[');
    //blankline ~ !@#$%^&*()_+`-=[]\{}|;':",./<>?         33 total
    //%0D%0A ~ %21 %40 %23 %24 %25 %5E %26 %2A %28 %29 _ %2B %60 - %3D %5B %5D %5C %7B %7D %7C %3B %27 %3A %22 , . %2F %3C %3E %3F
    str = str.replaceAll('%5D',']');
    str = str.replaceAll('%5C','\ ');
    str = str.replaceAll('%7B','{');
    str = str.replaceAll('%7D','}');
    str = str.replaceAll('%7C','|');
    str = str.replaceAll('%3B',';');
    str = str.replaceAll('%27',"'");
    str = str.replaceAll('%3A',':');
    str = str.replaceAll('%22','"');
    str = str.replaceAll('%2C',',');
    str = str.replaceAll('%2F','/');
    str = str.replaceAll('%3C','<');
    str = str.replaceAll('%3E','>');
    str = str.replaceAll('%3F','?');
    return str
}

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
            goto = convertchars(goto);
            goto = goto.replace('https://','');
            goto = goto.replace('https//','');
            goto = goto.replace('http://','');
            goto = goto.replace('http//','');
            goto = 'http://'+goto;
            document.write('<h1><a href="'+goto+'">Redirecting you to '+goto+'</a></h1>');
            window.open(goto,"_self");
            foundredirect = true;
        }
        index += 1;
    }
    
    if (!foundredirect){
        document.write('<h1>This redirect was not found on this server. Check your url.</h1>');
        document.write('<h2>If you are trying to make a short url, see the <a href="https://github.com/Skparab1/go/blob/main/redirects.json">database</a><h2><br><br><br><br><br><br><br><br>');
        document.write('<h2 id="countdown">Auto refreshing to update in 10<h2>');
        setTimeout(function(){let redirector2 = document.getElementById('countdown'); redirector2.textContent = 'Auto refreshing to update in 9';},1000);
        setTimeout(function(){let redirector3 = document.getElementById('countdown'); redirector3.textContent = 'Auto refreshing to update in 8';},2000);
        setTimeout(function(){let redirector4 = document.getElementById('countdown'); redirector4.textContent = 'Auto refreshing to update in 7';},3000);
        setTimeout(function(){let redirector5 = document.getElementById('countdown'); redirector5.textContent = 'Auto refreshing to update in 6';},4000);
        setTimeout(function(){let redirector6 = document.getElementById('countdown'); redirector6.textContent = 'Auto refreshing to update in 5';},5000);
        setTimeout(function(){let redirector7 = document.getElementById('countdown'); redirector7.textContent = 'Auto refreshing to update in 4';},6000);
        setTimeout(function(){let redirector8 = document.getElementById('countdown'); redirector8.textContent = 'Auto refreshing to update in 3';},7000);
        setTimeout(function(){let redirector9 = document.getElementById('countdown'); redirector9.textContent = 'Auto refreshing to update in 2';},8000);
        setTimeout(function(){let redirector10 = document.getElementById('countdown'); redirector10.textContent = 'Auto refreshing to update in 1';},9000);
        setTimeout(function(){let redirector11 = document.getElementById('countdown'); redirector11.textContent = 'Redirecting....'; window.location.reload;},10000);

    }
})();
