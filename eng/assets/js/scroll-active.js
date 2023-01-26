const scrollActive = (target) => {
    const animationItems = document.querySelectorAll(target);
    const itemActive = (animationItems) => {
        const threshold = window.scrollY + (window.innerHeight * 0.8);
    
        animationItems.forEach(animationItem => {
            if (!animationItem.closest('.swiper') || animationItem.classList.contains('swiper')) {
                const itemTop = this.scrollY + animationItem.getBoundingClientRect().top;
                const animationName = animationItem.dataset.animate;
            
                if (threshold > itemTop) {
                    animationItem.classList.add(`animate__${animationName}`);
                }
            }
        });
    }
    
    window.addEventListener('load', e => {
        itemActive(animationItems);
    });
    
    window.addEventListener('scroll', e => {
        itemActive(animationItems);
    });
}

scrollActive('.animate__animated');