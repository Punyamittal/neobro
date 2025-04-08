(function () {
    const query = localStorage.getItem("latestQuery");
    if (!query) return;
  
    const tryInject = () => {
      const input = document.querySelector("input[name='q']");
      if (input && !input.value) {
        input.value = query;
        input.dispatchEvent(new Event("input", { bubbles: true }));
      }
    };
  
    setTimeout(tryInject, 500);
  })();
  
  