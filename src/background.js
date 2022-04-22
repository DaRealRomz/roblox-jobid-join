const tabs = {};

const onNavigationCommited = ({ url, tabId, frameId }) => {
  if (frameId === 0) {
    clearTimeout(tabs[tabId]?.timeout);
    const timeout = setTimeout(() => delete tabs[tabId], 60000);
    tabs[tabId] = { url, timeout };
  }
};

const onMessage = (message, sender, sendResponse) => {
  if (message === "getUrl") {
    sendResponse(tabs[sender.tab.id]?.url);
  }
};

chrome.webNavigation.onCommitted.addListener(onNavigationCommited);
chrome.runtime.onMessage.addListener(onMessage);
