let puppeteer = require('puppeteer');


console.log( "Before");


let hkWillbeLaunced = puppeteer.launch({
    headless: false, //changing the headless prop to false as of which it Unhides all the activities performed by puppeteer
    defaultViewport:null,
});

hkWillbeLaunced.then(function(hkInstance){
     
    let newhkTabPromise = hkInstance.newPage();
    return newhkTabPromise;


}).then(function(newhkTab){

    const loginLink = "https://www.hackerrank.com/auth/login";
    return newhkTab.goto(loginLink);

}).then(function(hklogin){
    console.log("Opened the login page");
})

console.log("After");