const $prdHeader = document.querySelector('.prd-header');
const $cursor = document.querySelector('.cursor');
let $prdHeaderNavSelects;
if ($prdHeader) $prdHeaderNavSelects = $prdHeader.querySelectorAll('.nav-select');

if ($prdHeaderNavSelects.length > 0) {
    const prdHash = window.location.hash === '' ? '#IL510' : window.location.hash;
    const $currDepth2Link = document.querySelector(`.nav-list.depth-2 [href="${prdHash}"]`);
    const $currNav1Select = document.querySelector('.nav-list.depth-1').closest('.nav-item').querySelector('.nav-select');
    const $currNav2Select = document.querySelector('.nav-list.depth-2').closest('.nav-item').querySelector('.nav-select');
    const currentNavDepth1 = $currDepth2Link.closest('.nav-list').getAttribute('data-nav-depth1');
    const $prdNavDepth1Links = document.querySelectorAll('.prd-header .nav-list.depth-1 .link');
    const $prdNavDepth2Links = document.querySelectorAll('.prd-header .nav-list.depth-2 .link');
    
    
    switch (currentNavDepth1) {
        case 'rotation':
            $currNav1Select.innerText = 'Rotation LiDAR';
            break;
        case 'spad':
            $currNav1Select.innerText = 'SPAD LiDAR';
            break;
        case 'flash':
            $currNav1Select.innerText = 'FLASH LiDAR';
            break;
    }
    
    $currNav2Select.innerText = prdHash.replace('#', '');
    
    document.querySelectorAll(`[data-nav-depth1]`).forEach($target => {
        $target.classList.add('d-none');
    });
    document.querySelector(`[data-nav-depth1="${currentNavDepth1}"]`).classList.remove('d-none');
    
    
    $prdHeaderNavSelects.forEach(($select, index, array) => {
        $select.addEventListener('click', e => {
            $select.classList.toggle('active');
            
            for (let i = 0; i < array.length; i++) {
                if (i !== index) {
                    array[i].classList.remove('active');
                }
            }
        });
    });
    
    $prdNavDepth1Links.forEach($link => {
        $link.addEventListener('click', e => {
            const $select = $link.closest('.nav-item').querySelector('.nav-select');
            const depth1Name = $link.innerText;
            const depth1Type = $link.getAttribute('data-nav-name');
            
            $select.innerText = depth1Name;
            document.querySelectorAll(`[data-nav-depth1]`).forEach($target => {
                $target.classList.add('d-none');
            });
            document.querySelector(`[data-nav-depth1="${depth1Type}"]`).classList.remove('d-none');
            
            $select.classList.remove('active');
        });
    });
    
    $prdNavDepth2Links.forEach($link => {
        $link.addEventListener('click', e => {
            const $select = $link.closest('.nav-item').querySelector('.nav-select');
            
            $select.innerText = $link.innerText;
            $select.classList.remove('active');
        });
    });
}

const checkClickable = (target) => {
    const checkNameArray = ['BUTTON', 'A', 'INPUT', 'SELECT'];
    let res = false;
    
    for (const checkName of checkNameArray) {
        if (target.tagName === checkName || target.closest(`${checkName}`)) {
            res = true;
        }
    }
    
    return res;
}

document.addEventListener('mousemove', e => {
    $cursor.style.transform = 'translate3d(' + e.clientX + 'px, ' + e.clientY + 'px, 0)';
    
    if (checkClickable(e.target)) {
        $cursor.classList.add('on');
    } else {
        $cursor.classList.remove('on');
    }
});

const pageOptions = {
    anchors: ['IL510', 'AL410', 'IL410', 'IL110CameraPlus', 'IL110', 'AL110'],
    afterLoad: function (anchorLink, index) {
        const realIndex = index - 1;
        const hash = window.location.hash === '' ? '#IL510' : window.location.hash;
        
        $('.prd-section-pagination-bullet').eq(realIndex).addClass('active');
        
        const $depth1Select = document.querySelector('.nav-list.depth-1').closest('.nav-item').querySelector('.nav-select');
        const $depth2Link = document.querySelector('.nav-list.depth-2 [href="' + hash + '"]');
        const $depth2List = $depth2Link.closest('.nav-list');
        const depth2ListName = $depth2List.getAttribute('data-nav-depth1')
        const $depth2Select = $depth2Link.closest('.nav-item').querySelector('.nav-select');
        
        if (hash === '#IL110CameraPlus') {
            $depth2Select.innerText = 'IL110 Camera Plus';
        } else {
            $depth2Select.innerText = hash.replace('#', '');
        }
        
        switch (depth2ListName) {
            case 'rotation':
                $depth1Select.innerText = 'Rotation LiDAR';
                break;
            case 'spad':
                $depth1Select.innerText = 'SPAD LiDAR';
                break;
            case 'flash':
                $depth1Select.innerText = 'FLASH LiDAR';
                break;
        }
        
        document.querySelectorAll(`[data-nav-depth1]`).forEach($target => {
            $target.classList.add('d-none');
        });
        document.querySelector('[data-nav-depth1="' + depth2ListName + '"]').classList.remove('d-none');
    },
    onLeave: function (index, nextIndex, direction) {
        const realIndex = nextIndex - 1;
        
        $('.prd-section-pagination-bullet').eq(realIndex).addClass('active').siblings().removeClass('active');
    },
}

$(document).ready(function () {
    if ($(window).outerWidth() < 1025) {
        if ($('html').hasClass('fp-enabled')) {
            $.fn.fullpage.destroy('all');
        }
    } else {
        $('.fullpage').fullpage(pageOptions);
    }
});

let resizeTimer;
$(window).on('resize', function (e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function (e) {
        const width = $(this).outerWidth();
        const fpEnabled = document.querySelector('html').classList.contains('fp-enabled');
        
        if (width < 1025) {
            $.fn.fullpage.destroy('all');
        } else {
            if (!fpEnabled) $('#fullpage').fullpage(this.options);
        }
    }, 100);
});
