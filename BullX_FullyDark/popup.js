document.getElementById('themeToggle').addEventListener('change', function(e) {
  const isEnabled = e.target.checked;
  browser.storage.local.set({ darkThemeEnabled: isEnabled });
  
  browser.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      browser.tabs.sendMessage(tabs[0].id, {
          action: "toggleDarkTheme",
          enabled: isEnabled
      });
  });
});

window.onload = function() {
  browser.storage.local.get(['darkThemeEnabled', 'firstRun'], function(data) {
      if (data.firstRun === undefined) {
          browser.storage.local.set({ 
              darkThemeEnabled: true,
              firstRun: true 
          });
          document.getElementById('themeToggle').checked = true;
      } else {
          document.getElementById('themeToggle').checked = data.darkThemeEnabled;
      }
  });
};
