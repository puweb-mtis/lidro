class SwiperInit {
    constructor(target, options) {
        this.target = document.querySelector(target);
        this.options = options ? options : '';
        this.loadActive = this.options.loadActive ? this.options.loadActive : false;
        this.activeNames = this.options.activeNames ? this.options.activeNames : '';
        this.inactiveNames = this.options.inactiveNames ? this.options.inactiveNames : '';
        this.activeInSlideNames = this.options.activeInSlideNames ? this.options.activeInSlideNames : '';
        this.inactiveInSlideNames = this.options.inactiveInSlideNames ? this.options.inactiveInSlideNames : '';
        this.video = this.options.video ? this.options.video : '';
        this.swiper = new Swiper(target, this.options.swiperOptions);
        
        this.init(this.swiper);
        
        this.swiper.on('slideChange', () => {
            this.change(this.swiper);
        });
        
        this.swiper.on('slideChangeTransitionEnd', () => {
            this.transitionEnd(this.swiper);
        });
    }
    
    init() {
        if ( this.loadActive === true ) {
            this.active(this.activeNames);
            this.activeInSlide(this.activeInSlideNames);
        }
    }
    
    change(swiper) {
        this.videoPlay(swiper);
        this.inactive(this.activeNames);
        this.inactiveInSlide(this.inactiveInSlideNames);
    }
    
    transitionEnd(swiper) {
        this.videoPause(swiper);
        this.active(this.activeNames);
        this.activeInSlide(this.activeInSlideNames);
    }
    
    active(targetNames){
        if ( !targetNames ) return false;
        
        const isArray = Array.isArray(targetNames);
        
        if (isArray) {
            for (const targetName of targetNames) {
                const target = document.querySelectorAll(targetName);
                const targetLength = target.length;
                
                if ( !targetLength ) {
                    console.error(`${targetName} 엘리먼트가 없습니다.`);
                    return false;
                }
                
                if ( targetLength > 1 ) {
                    target.forEach(item => {
                        item.classList.add('active');
                    });
                } else {
                    document.querySelector(targetName).classList.add('active');
                }
            }
        } else {
            document.querySelector(targetNames).classList.add('active');
        }
    }
    
    inactive(targetNames) {
        if ( !targetNames ) return false;
        
        const isArray = Array.isArray(targetNames);
        
        if (isArray) {
            for (const targetName of targetNames) {
                const target = document.querySelectorAll(targetName);
                const targetLength = target.length;
                
                if ( !targetLength ) {
                    console.error(`${targetName} 엘리먼트가 없습니다.`);
                    return false;
                }
                
                if ( targetLength > 1 ) {
                    target.forEach(item => {
                        item.classList.remove('active');
                    });
                } else {
                    document.querySelector(targetName).classList.remove('active');
                }
            }
        } else {
            document.querySelector(targetNames).classList.remove('active');
        }
    }
    
    activeInSlide(targetNames) {
        if ( !targetNames ) return false;
        
        const activeIndex = this.swiper.activeIndex;
        const activeSlide = this.swiper.slides[activeIndex];
        const isArray = Array.isArray(targetNames);
        
        if (isArray) {
            for (const targetName of targetNames) {
                const target = activeSlide.querySelectorAll(targetName);
                const targetLength = target.length;
                
                if ( !targetLength ) {
                    console.error(`index ${activeIndex}번째 슬라이드에 ${targetName} 가 없습니다.`);
                    return false;
                }
                
                if ( targetLength > 1 ) {
                    target.forEach(item => {
                        item.classList.add('active');
                    });
                } else {
                    activeSlide.querySelector(targetName).classList.add('active');
                }
            }
        } else {
            activeSlide.querySelector(targetNames).classList.add('active');
        }
    }
    
    inactiveInSlide(targetNames) {
        if ( !targetNames ) return false;
        
        const previousIndex = this.swiper.previousIndex;
        const previousSlide = this.swiper.slides[previousIndex];
        const isArray = Array.isArray(targetNames);
        
        if (isArray) {
            if ( !targetNames.length ) return false;
            
            for (const targetName of targetNames) {
                const target = previousSlide.querySelectorAll(targetName);
                const targetLength = target.length;
                
                if (!targetLength) {
                    console.error(`index ${previousIndex}번째 슬라이드에 ${targetName} 가 없습니다.`);
                    return false;
                }
                
                if (targetLength > 1) {
                    target.forEach(item => {
                        item.classList.remove('active');
                    });
                } else {
                    previousSlide.querySelector(targetName).classList.remove('active');
                }
            }
        } else {
            previousSlide.querySelector(targetNames).classList.remove('active');
        }
    }
    
    videoPlay(swiper) {
        if ( !this.video ) return false;
        
        const video = swiper.slides[swiper.activeIndex].querySelector(this.video);
        video.play();
    }
    
    videoPause(swiper) {
        if ( !this.video ) return false;
        
        const video = swiper.slides[swiper.previousIndex].querySelector(this.video);
        video.pause();
    }
}