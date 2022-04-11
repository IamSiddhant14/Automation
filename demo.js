let puppeteer = require('puppeteer');

//This is an promised based function of puppeteer which will return promise, currently which is in pending stage when resolved returns browser instance

console.log( "Before");

//****************************REFFER THE SCREENSHOT TO UNDESTAND CHANING */
let browserWillbeLauncedPromise = puppeteer.launch({
    headless: false, //changing the headless prop to false as of which it Unhides all the activities performed by puppeteer
    defaultViewport:null,
});

browserWillbeLauncedPromise.then(function( browserInstance ){ //When the promise returned by puppeteer.launch get resolved then it will be handled by "then"

    // This will lauch chromium

    // return browserInstance; //Browser instance Or simply chrome

    // To open multiple tabs using automation in chromium
    
    let newTabPromise = browserInstance.newPage();//This will open a new tab/page
    return newTabPromise;

})
.then(function(newTab){
    
    console.log('New Tab Opened')
    let pageWillbeOpenedPromise = newTab.goto('https://www.pepcoding.com/');
    return pageWillbeOpenedPromise

}).then( function(webPage){
    console.log('Website opened' + webPage );
    
})

.catch(function(){
    console.log('Hello');
})

console.log("After");


