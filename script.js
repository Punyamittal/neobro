const iframe = document.getElementById('browser-frame');
const urlInput = document.getElementById('url');
const toolbar = document.getElementById('toolbar');

// Sync the input with Google search and your custom search bar
urlInput.addEventListener('input', function () {
  const query = urlInput.value.trim();

  // Sync the input with Google search (use Google search API)
  if (query && !query.startsWith("http")) {
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    // Optionally, open Google search in a new tab/window or embed it in the iframe
    iframe.src = googleUrl;
  }

  // Sync the input with your own search bar behavior
  // You can implement the behavior you want for your custom search bar (e.g., in the iframe)
  if (query && query.startsWith("http")) {
    iframe.src = query;
  }
});

// Handle "Enter" key press
urlInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const query = urlInput.value.trim();

    if (!query.startsWith("http")) {
      // Perform a Google search if the query is not a valid URL
      const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      iframe.src = url;
    } else {
      // If it's a URL, load it directly
      iframe.src = query;
    }
  }
});

// Go back in history
function goBack() {
  iframe.contentWindow.history.back();
}

// Go forward in history
function goForward() {
  iframe.contentWindow.history.forward();
}

// Refresh the iframe
function refresh() {
  iframe.contentWindow.location.reload();
}

// Exit the app (close the window)
function exitApp() {
  window.open('', '_self');
  window.close();
}

// Toggle toolbar visibility with Alt + H
document.addEventListener('keydown', function (e) {
  if (e.altKey && e.key.toLowerCase() === 'h') {
    toolbar.style.display = toolbar.style.display === 'none' ? 'flex' : 'none';
  }
});



    

