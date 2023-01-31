const letterAnimation = (targetName, mode = 'word') => {
  const $letterElements = document.querySelectorAll(`[data-letter-animation=${targetName}]`);
  
  $letterElements.forEach($letterElement => {
    const array = mode === 'word' ? $letterElement.innerText.match(/\S+|\s/g) : $letterElement.innerText.match(/\s|\S/g);
    let html = '';
    
    for (let i = 0; i < array.length; i++) {
      if (array[i] === ' ') {
        html += `<span>&nbsp;</span>`;
      } else {
        html += `<span style="animation-delay: ${i * 0.25}s">${array[i]}</span>`;
      }
    }
    
    $letterElement.innerHTML = html;
  });
}

const textAnimation = (target, ...object) => {
  const $targetEls = document.querySelectorAll(target);
  const settings = object[0];
  
  // CHECK settings
  if (!settings) return false;
  
  // Initialize Variables
  const type = settings.type ? settings.type : 'slideUp'; // default: slideUp
  const unit = settings.unit ? settings.unit : 'word'; // default: word
  const duration = !settings.duration && settings.duration !== 0 ? 1000 : settings.duration;  // default: 250
  const delay = !settings.delay && settings.delay !== 0 ? 250 : settings.delay;  // default: 250
  let threshold = window.innerHeight * 0.8;
  
  // Initialize Elements
  $targetEls.forEach($targetEl => {
    const textArray = unit === 'word' ? $targetEl.innerText.match(/\S+|\s/g) : $targetEl.innerText.match(/\s|\S/g);
    
    $targetEl.innerHTML = '';
    for (let i = 0; i < textArray.length; i++) {
      if (textArray[i] === ' ') {
        $targetEl.innerHTML += `<span data-tani-item style="animation-duration: ${duration}ms;animation-delay: ${i * delay}ms">&nbsp;</span>`;
      } else {
        $targetEl.innerHTML += `<span data-tani-item style="animation-duration: ${duration}ms;animation-delay: ${i * delay}ms">${textArray[i]}</span>`;
      }
    }
    
    $targetEl.dataset.taniType = type;
    
    if ($targetEl.getBoundingClientRect().top - threshold < 0) {
      if (!$targetEl.classList.contains('active')) {
        $targetEl.classList.add('active');
      }
    }
  });
  
  window.addEventListener('scroll', (e) => {
    $targetEls.forEach(($targetEl, index) => {
      if ($targetEl.getBoundingClientRect().top - threshold < 0) {
        if (!$targetEl.classList.contains('active')) {
          $targetEl.classList.add('active');
        }
      }
    });
  });
}

textAnimation('[data-tani-element="historyText"]', {
  type: 'typing',
  unit: 'text',
  duration: 50,
  delay: 50
});

textAnimation('[data-tani-element="pageTitle"]', {
  type: 'slideUp',
  unit: 'word',
  duration: 1000,
  delay: 100
});