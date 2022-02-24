let puppeteer = require('puppeteer');

const loginLink = "https://www.hackerrank.com/auth/login";

let email = 'kopiwe4461@ishop2k.com'
let password = '1234578906@'

let page ;
console.log( "Before");


let browserWillbeLauncedPromise = puppeteer.launch({
    headless: false, //changing the headless prop to false as of which it Unhides all the activities performed by puppeteer
    defaultViewport:null,
});

browserWillbeLauncedPromise.then(function(browserInstance){
     
    let newTabPromise = browserInstance.newPage();
    return newTabPromise;


}).then(function(newTab){

    page = newTab;
    let pageWillbeOpenedPromise =  newTab.goto(loginLink);
    return pageWillbeOpenedPromise

}).then(function(){

    let typedEmailPromise = page.type('input[id="input-1"]',email , {delay : 50})//Method provided by puppeter for typing

    return typedEmailPromise;

}).then(function(){//Since here we dont need it further therefore we will not be taking in the resolve parameters

    let typePasswordPromise = page.type('input[id = "input-2"]',password , {delay : 50} );//Type is been used for typing

    return typePasswordPromise

}).then(function(){

    let loginPromise = page.click('button[data-analytics="LoginPassword"]',{delay : 100})//Click is been used for clicking

    return loginPromise;
    
})

console.log("After");