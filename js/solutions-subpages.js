
/*
Helper functions for Solutions subpages
- openSubpage(slug): navigate to a subpage by slug (e.g., 'wrapping-solutions')
- highlightActiveSubpage(): highlights the current subpage link in nav
*/
(function(){
  window.openSubpage = function(slug) {
    if(!slug) return;
    // safe mapping for allowed slugs
    var allowed = {
      'wrapping-solutions': 'solutions/wrapping-solutions.html',
      'cushioning-solution': 'solutions/cushioning-solution.html',
      'void-filler-solution': 'solutions/void-filler-solution.html',
      'transit-packaging': 'solutions/transit-packaging.html'
    };
    var target = allowed[slug];
    if(target) window.location.href = target;
  };

  window.highlightActiveSubpage = function() {
    try {
      var loc = window.location.pathname.toLowerCase();
      var links = document.querySelectorAll('a[href]');
      links.forEach(function(a){
        var href = a.getAttribute('href');
        if(!href) return;
        var normalized = href.replace(/^\.\.\/|^\.\//, '').toLowerCase();
        if(loc.endsWith(normalized) || loc.indexOf(normalized) !== -1) {
          a.classList.add('active-subpage');
        } else {
          a.classList.remove('active-subpage');
        }
      });
    } catch(e) { console.warn(e); }
  };

  // run on DOM ready
  if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', highlightActiveSubpage);
  } else {
    highlightActiveSubpage();
  }
})();
