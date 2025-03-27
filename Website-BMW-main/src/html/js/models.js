function revealOnScroll(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            element.classList.add('show');
            observer.unobserve(element);
          }
        });
      });
      observer.observe(element);
    });
  }
  
  revealOnScroll('.img'); // Наблюдатель для всех элементов с классом "car"
  