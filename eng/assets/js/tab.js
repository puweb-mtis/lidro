function tabInit() {
  const tabs = document.querySelectorAll('.tab');
  
  for (const element of tabs) {
    const tabItems = element.querySelectorAll('.tab-item');
    const tabContents = element.querySelectorAll('.tab-content');
    
    tabItems.forEach((tabItem, index) => {
      tabItem.addEventListener('click', e => {
        for (let j = 0; j < tabContents.length; j++) {
          tabItems[j].classList.remove('active');
          tabContents[j].classList.remove('active');
        }
        
        tabItem.classList.add('active');
        tabContents[index].classList.add('active');
      });
    });
  }
}