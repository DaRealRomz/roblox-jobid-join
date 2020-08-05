const script = document.createElement("script");
script.type = "text/javascript";
script.src = chrome.runtime.getURL("launch.js");
document.body.appendChild(script);
