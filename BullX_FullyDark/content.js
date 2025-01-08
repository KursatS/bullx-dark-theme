browser.runtime.onMessage.addListener((message) => {
    if (message.action === "toggleDarkTheme") {
        if (message.enabled) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }
});

browser.storage.local.get('darkThemeEnabled', function(data) {
    if (data.darkThemeEnabled) {
        document.body.classList.add('dark-theme');
    }
});
