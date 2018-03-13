let handleClick = event => {
  chrome.storage.local.get('tiles', result => {
    chrome.tabs.captureVisibleTab(
      null,
      { format: 'jpeg', quality: 50 },
      thumbnail => {
        let tiles = result.tiles || [];
        tiles.push({
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

function setUpContextMenus() {
  chrome.contextMenus.create({
    title: 'Add',
    contexts: ['page'],
    onclick: handleClick
  });
}

chrome.runtime.onInstalled.addListener(() => {
  // When the app gets installed, set up the context menus
  setUpContextMenus();
});
