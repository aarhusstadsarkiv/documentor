if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {

  // Fetch and show searchresults
  (function(window, document) {
    "use strict";
  
    const search = e => {
      const displayEl = document.getElementById("searchresults");
      // if clearing any input, show hints and remove results
      if (!e.target.value) {
        displayEl.querySelectorAll('.searchresult').forEach( function(el) { el.remove() });
        displayEl.querySelectorAll('.search-hint').forEach( function(el) { el.removeAttribute("hidden") });
        displayEl.querySelector("#zero-hits").setAttribute("hidden", true);

      // else search for results
      } else {
        const results = window.searchIndex.search(e.target.value);
        // Results or not, remove any previous .searchresults
        displayEl.querySelectorAll('.searchresult').forEach( function(el) { el.remove() });
        // if results, remove hide search-hints and add searchresults
        if (results && results.length > 0) {
          // if results, remove and hints, incl. zero-hits notification
          displayEl.querySelectorAll('.search-hint').forEach( function(el) { el.setAttribute("hidden", true) });
          results.forEach(function(res) {
            const data = window.dataIndex[res.ref];

            const el = document.createElement("li");
            el.setAttribute("class", "searchresult");
            displayEl.appendChild(el);

            const a = document.createElement("a");
            a.setAttribute("href", data.url);
            a.textContent = data.title;
            el.appendChild(a);
          });
        // if no results, show search-hints
        } else {
          displayEl.querySelector("#zero-hits").setAttribute("hidden", true);
          displayEl.querySelectorAll('.search-hint').forEach( function(el) { el.removeAttribute("hidden") });
        }
      }
    };
    fetch("/index.json").then(response =>
      response.json().then(rawIndex => {
        window.searchIndex = lunr.Index.load(rawIndex);
        document.getElementById("searchfield").addEventListener("input", search);
      })
    );
    fetch("/data.json").then(response =>
      response.json().then(rawIndex => {
        window.dataIndex = rawIndex;
      })
    );
  })(window, document);

  // Show or hide navigation
  document.querySelectorAll('.nav-button').forEach( function(item) {
      item.addEventListener('click', function() {
          let expanded = this.getAttribute('aria-expanded') === 'true' || false;
          this.setAttribute('aria-expanded', !expanded);
          let menu = this.nextElementSibling;
          if(menu.style.display === 'block') {
            menu.style.display = 'none';
          } else {
            menu.style.display = 'block';
          }
      });
  });

});
