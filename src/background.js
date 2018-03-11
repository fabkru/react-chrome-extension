let handleClick = event => {
	chrome.storage.local.get('tiles', result => {
		let tiles = result.tiles || [];
		tiles.push(event.pageUrl);
		chrome.storage.local.set({
			'tiles': tiles
		})
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
