class pageInit {
  constructor(options) {
    this.options = options;
    this.initialize();
  }
  
  initialize() {
    const html = document.querySelector('html');
    const windowWidth = window.outerWidth;
    let resizeTimer;
    
    document.addEventListener('DOMContentLoaded', e => {
      const fpEnabled = html.classList.contains('fp-enabled');
      
      if (windowWidth < 1025) {
        if (fpEnabled) $.fn.fullpage.destroy('all');
      } else {
        if (!fpEnabled) $('#fullpage').fullpage(this.options);
      }
    });
    
    window.addEventListener('resize', e => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function (e) {
        const fpEnabled = html.classList.contains('fp-enabled');
        const width = $(this).outerWidth();
        
        if (width < 1025) {
          if (fpEnabled) $.fn.fullpage.destroy('all');
        } else {
          if (!fpEnabled) $('#fullpage').fullpage(this.options);
        }
      }, 100);
    });
  }
}