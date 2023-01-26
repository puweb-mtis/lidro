const pagesHeaderScrolled = () => {
    const $pagesHeader = document.querySelector('.header:not(.header--main)');
    
    if ( !$pagesHeader ) return false;
    
    if (window.scrollY > 0) {
        $pagesHeader.classList.add('scrolled');
    } else {
        $pagesHeader.classList.remove('scrolled');
    }
    
    window.addEventListener('scroll', e => {
        if (window.scrollY > 0) {
            $pagesHeader.classList.add('scrolled');
        } else {
            $pagesHeader.classList.remove('scrolled');
        }
    });
}

// GNB Menu button
const globalNavigation = () => {
    const $nav = document.querySelector('.nav');
    const $navBgText = document.querySelector('.nav__bg-text');
    const $menuOpenButton = document.querySelector('.header .btn-menu');
    const $menuCloseButton = document.querySelector('.nav .btn-menu');
    const $depth1Links = document.querySelectorAll('.nav-list.depth-1 > .nav-list__item > .nav-list-link');
    
    if ( !$nav ) return false;
    
    if ( $menuOpenButton ) {
        $menuOpenButton.addEventListener('click', e => {
            document.querySelector('html').classList.add('nav-open');
            $nav.classList.add('active');
        
            setTimeout(() => {
                $nav.classList.add('activated');
            }, 1500);
        });
    }
    
    if ( $menuCloseButton ) {
        $menuCloseButton.addEventListener('click', e => {
            document.querySelector('html').classList.remove('nav-open');
            $nav.classList.remove('active', 'activated');
        });
    }
    
    // Nav Background Text Effect
    if ( $navBgText ) {
        $nav.addEventListener('mousemove', e => {
            const x = (window.outerWidth / 2 - e.clientX) * 0.1;
            const y = (window.outerHeight / 2 - e.clientY) * 0.1;
        
            $navBgText.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        });
    }
    
    // Prevent click of depth1 link in GNB with Mobile device.
    if ( $depth1Links.length > 0 ) {
        $depth1Links.forEach($depth1Link => {
            $depth1Link.addEventListener('click', e => {
                if (window.outerWidth < 1025) {
                    e.preventDefault();
                }
            });
        });
    }
}

/* Initialize */
pagesHeaderScrolled();
globalNavigation();