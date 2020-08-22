# google-query
Nodejs package to search query in google

# How to install

    npm install google-query

# How to use

    var google = require('google-query');

    /*
    
      google.search([query],[page-num],[callback])    
    
    */
    
    google.search("hello",1,function(url_list){
        var url_str = url_list.join('\n');
        console.log(url_str);
    });

    /*
    RESULT will be below

    http://www.hellointernet.fm/archive/
    https://www.mozilla.org/en-US/firefox/hello/
    https://play.google.com/store/apps/details?id=com.facebook.phone
    http://genius.com/Adele-hello-lyrics
    http://www.cjhellovision.com/CJH_Main/Main_Index.asp
    https://www.hellobar.com/users/sign_in
    http://newsroom.fb.com/news/2015/04/introducing-hello/
    http://www.vanityfair.com/hollywood/2015/11/adele-hello-live-performance-bbc
    https://twitter.com/hello
    http://windows.microsoft.com/ko-kr/windows-10/getstarted-what-is-hello
    */

