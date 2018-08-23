const $ = (selector) => document.querySelector(selector);
var quality = null;
if(quality==null){
chrome.storage.local.get(['key'], function(result) {
            console.log('Value currently is ' + result.key);
            quality=result.key;
          });
}

console.log(quality);

var current = window.location.href;
setInterval(function () {
  if (window.location.href != current){
    current= window.location.href;
    done(quality);
  }
}, 3000);

console.log("Load...");
  window.onload = setTimeout(function () {
 done(quality);
}, 2500);



function done(v1) {
    $('.ytp-settings-button').click();
    $('.ytp-settings-menu .ytp-menuitem:last-child').click();
    var myElem = $('.ytp-quality-menu .ytp-menuitem:nth-last-child('+v1+')');
    console.log(myElem);
    if (myElem != null) {
        $('.ytp-quality-menu .ytp-menuitem:nth-last-child('+v1+')').click();
        $('.ytp-quality-menu .ytp-menuitem:nth-last-child('+v1+')').blur();
        console.log(clicked);
    }else {
        $('.ytp-quality-menu .ytp-menuitem:nth-last-child('+(v1-1)+')').click();
        $('.ytp-quality-menu .ytp-menuitem:nth-last-child('+(v1-1)+')').blur();
    }

    console.log("done!!");

}
