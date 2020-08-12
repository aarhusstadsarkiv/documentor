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

  document.querySelectorAll('.nav-button').forEach( function(item) {
      item.addEventListener('click', function() {
          let expanded = this.getAttribute('aria-expanded') === 'true' || false;
          this.setAttribute('aria-expanded', !expanded);
          let menu = this.nextElementSibling;
          // menu.hidden = !menu.hidden;
          if(menu.style.display === 'block') {
            menu.style.display = 'none';
          } else {
            menu.style.display = 'block';
          }
      });
  });

});
