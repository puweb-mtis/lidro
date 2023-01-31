const historyDeco1 = document.querySelector('.history-deco-1');
const historyDeco1Top = historyDeco1.getBoundingClientRect().top;
const historyDeco2 = document.querySelector('.history-deco-2');
const historyDeco2Top = historyDeco2.getBoundingClientRect().top;

window.addEventListener('scroll', e => {
  const threshold = window.scrollY + (window.innerHeight * 0.2);
  
  if (threshold > historyDeco1Top) {
    const temp1 = parseInt(threshold - historyDeco1Top);
    historyDeco1.style.transform = `translate(0, ${temp1 * 0.5}px)`;
  } else {
    historyDeco1.style.transform = `translate(0, 0)`;
  }
  
  if (threshold > historyDeco2Top) {
    const temp2 = parseInt(threshold - historyDeco2Top);
    historyDeco2.style.transform = `translate(0, ${temp2 * 0.5}px)`;
  } else {
    historyDeco2.style.transform = `translate(0, 0)`;
  }
});