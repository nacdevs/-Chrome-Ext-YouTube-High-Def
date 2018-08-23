function choose(){
var e = document.getElementById("dpmenu");
var strUser = e.options[e.selectedIndex].value;
chrome.storage.local.set({key:strUser}, function() {
console.log('Value is set to ' + strUser);
 });
 chrome.storage.local.get(['key'], function(result) {
        console.log('Value currently is ' + result.key);
      });
}

chrome.storage.local.get(['key'], function(result) {
       console.log('Value currently is ' + result.key);
     });

document.getElementById('save').addEventListener('click', choose);
