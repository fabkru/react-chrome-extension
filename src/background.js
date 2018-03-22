const uuidv1 = require('uuid/v1');

let handleClick = event => {
  chrome.storage.local.get('tiles', result => {
    chrome.tabs.captureVisibleTab(
      null,
      { format: 'jpeg', quality: 50 },
      thumbnail => {
        let tiles = result.tiles || [];
        tiles.push({
          id: uuidv1(),
          link: event.pageUrl,
          thumbnail: thumbnail
        });
        chrome.storage.local.set({
          tiles: tiles
        });
      }
    );
  });
};

function createContextMenu() {
  chrome.contextMenus.create({
    id: '1',
    title: 'Add',
    contexts: ['page'],
    // Only show on http(s) pages
    documentUrlPatterns: ['*://*/*'],
    onclick: handleClick
  });
}

chrome.runtime.onInstalled.addListener(() => createContextMenu());
chrome.runtime.onStartup.addListener(() => createContextMenu());
