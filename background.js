chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "clearCache",
        title: "Clear Cache",
        contexts: ["all"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "clearCache" && tab.url) {
        const url = new URL(tab.url);
        chrome.cookies.getAll({ domain: url.hostname }, (cookies) => {
            for (let cookie of cookies) {
                chrome.cookies.remove({ url: `http${cookie.secure ? 's' : ''}://${cookie.domain}${cookie.path}`, name: cookie.name });
            }
        });
    }
});
