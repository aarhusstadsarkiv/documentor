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

  document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
  // Fetch and show searchresults
  (function(window, document) {
    "use strict";
  
    const search = e => {
      const searchform = document.querySelector("#searchform");
      const searchresults = searchform.querySelector('#searchresults');
      const searchHints = searchform.querySelector('#search-hints');
      const value = e.target.value.trim();
      // empty searchresults no matter what
      searchresults.innerHTML = "";

      // if only whitespace or clearing any input, show hints and remove results
      if (value.length < 2) {
        searchHints.style.display = "block";

      // else search for results
      } else {
        const results = window.searchIndex.search(value);
        if (results && results.length > 0) {
          results.forEach(function(res, idx) {
            const data = window.dataIndex[res.ref];
            const el = document.createElement("li");
            el.setAttribute("class", "searchresult");
            el.setAttribute("tabindex", "-1");
            el.setAttribute("role", "option");
            el.setAttribute("aria-selected", "false");
            el.setAttribute("id", "autocomplete_" + idx.toString());
            searchresults.appendChild(el);

            const a = document.createElement("a");
            a.setAttribute("href", data.url);
            a.textContent = data.title;
            el.appendChild(a);
          });
        } else {
          searchresults.innerHTML = "<li>Ingen resultater</li>"
        }
        searchHints.style.display = "none";
        searchresults.style.display = "block";

      }
    };
    fetch("/index.json").then(response =>
      response.json().then(rawIndex => {
        window.searchIndex = lunr.Index.load(rawIndex);
        console.log("fetched index");
        document.getElementById("searchfield").addEventListener("input", search);
      })
    );
    fetch("/data.json").then(response =>
      response.json().then(rawIndex => {
        window.dataIndex = rawIndex;
        console.log("fetched data");
      })
    );
  })(window, document);

  // works, but only on html-pages
  // if (window.location.pathname === "/data.json") {
  //   const query = new URLSearchParams(window.location.search);
  //   console.log(query.get("q"));
  // }

  // Enhance searchfield
  document.querySelector("#searchfield").setAttribute("aria-owns", "searchresults");
  document.querySelector("#searchfield").setAttribute("aria-autocomplete", "list");
  document.querySelector("#searchfield").setAttribute("aria-expanded", "false");

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
