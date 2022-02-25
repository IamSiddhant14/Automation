let puppeteer = require('puppeteer');

const loginLink = "https://www.hackerrank.com/auth/login";

let email = 'kopiwe4461@ishop2k.com'
let password = '1234578906@'

let page ;
console.log( "Before");


//This is an promised based function of puppeteer which will return promise, currently it is in pending stage when resolved returns browser instance

//Return statement in every promise is important

let browserWillbeLauncedPromise = puppeteer.launch({
    headless: false, //changing the headless prop to false as of which it Unhides all the activities performed by puppeteer
    defaultViewport:null,
});

browserWillbeLauncedPromise.then(function(browserInstance){
     
    let newTabPromise = browserInstance.newPage();//This will open a new tab/page
    return newTabPromise;

}).then(function(newTab){

    page = newTab;
    let pageWillbeOpenedPromise =  newTab.goto(loginLink);//open this link in the newly opened tab

    return pageWillbeOpenedPromise

}).then(function(){//Since here we dont need it further therefore we will not be taking in the resolve parameters

    let typedEmailPromise = page.type('input[id="input-1"]',email , {delay : 50})//Method provided by puppeter for typing

    return typedEmailPromise;

}).then(function(){//Since here we dont need it further therefore we will not be taking in the resolve parameters

    let typePasswordPromise = page.type('input[id = "input-2"]',password , {delay : 50} );//Type is been used for typing

    return typePasswordPromise

}).then(function(){

    let loginPromise = page.click('button[data-analytics="LoginPassword"]',{delay : 100})//Click is been used for clicking the login button

    return loginPromise;
    
}).then(function(){

    //Here the promise is been resolved but the loder is still working as because of which we are not been currently been diredted to a new page

    // let algoWillBeclickedPromise = page.click('.topic-card a[data-attr1="algorithms"]',{delay: 100});

    let algoWillBeclickedPromise = waitAndClick('.topic-card a[data-attr1="algorithms"]', page );//Here waitandclick function will wait for new page to load (promise will not reslove until new page is loaded)
    return algoWillBeclickedPromise

}).then(function(){
    console.log('Algo Section Clicked');
    let getToWarmupPromise = waitAndClick('input[value="warmup"]', page);
    return getToWarmupPromise;
}).then(function(){
    console.log("Redircting to warm-up");
})

//This is not by default a promise driven(returning) function as the other method present above, in order to return a promise by this function we will have to use a syantx like this, promise driven function return resolve or reject which is later been handled by "then" or "catch" keywords


function waitAndClick(selector ,cPage){//we are making this function

    return new Promise(function(resolve , reject ){

        let waitForModalPromise = cPage.waitForSelector(selector);
        waitForModalPromise.then(function(){

            let clickModalPromise = cPage.click(selector , {delay : 1000 })//In built function provided by puppeter
            return clickModalPromise; 

        }).then(function(){
            resolve();
        }).catch(function(){
            reject();
        })

    })
}


















console.log("After");