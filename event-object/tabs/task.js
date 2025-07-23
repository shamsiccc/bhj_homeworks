document.addEventListener('DOMContentLoaded', function() {

  const tabsContainers = document.querySelectorAll('.tabs');
  
  tabsContainers.forEach(container => {
    
    const tabNavigation = container.querySelector('.tab__navigation');
    const tabs = tabNavigation.querySelectorAll('.tab');
    const tabContents = container.querySelector('.tab__contents').querySelectorAll('.tab__content');
    
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {

        tabs.forEach(t => t.classList.remove('tab_active'));
        tabContents.forEach(c => c.classList.remove('tab__content_active'));
        
        tab.classList.add('tab_active');
        tabContents[index].classList.add('tab__content_active');
      });
    });
  });
});
