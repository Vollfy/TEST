// Przełączanie trybu Dark/Light
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Tryb jasny' : 'Tryb ciemny';
});

// Rozwijanie/zwijanie sekcji "Więcej o mnie"
const moreAboutBtn = document.getElementById('moreAboutBtn');
const moreInfo = document.getElementById('moreInfo');
moreAboutBtn.addEventListener('click', () => {
  moreInfo.classList.toggle('active');
  moreAboutBtn.textContent = moreInfo.classList.contains('active') ? 'Mniej o mnie' : 'Więcej o mnie';
});

// Filtrowanie projektów w sekcji Portfolio
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    const filterValue = button.getAttribute('data-filter');
    projects.forEach(project => {
      const projectCategory = project.getAttribute('data-category');
      if (filterValue === 'all' || projectCategory === filterValue) {
        project.classList.remove('hidden');
      } else {
        project.classList.add('hidden');
      }
    });
  });
});

// Obsługa formularza kontaktowego (symulacja AJAX)
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  formMessage.textContent = 'Wysyłanie...';
  
  // Symulacja wysyłki (do zastąpienia właściwym wywołaniem AJAX)
  setTimeout(() => {
    formMessage.textContent = 'Wiadomość została wysłana!';
    contactForm.reset();
  }, 1000);
});

// Prosty slider dla sekcji "Opinie"
const testimonials = document.querySelectorAll('#opinie .testimonial');
let currentTestimonial = 0;
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');

// Upewnij się, że przynajmniej jeden testimonial istnieje
if (testimonials.length > 0) {
  testimonials[currentTestimonial].classList.add('active');
  prevBtn.addEventListener('click', () => {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
  });
  nextBtn.addEventListener('click', () => {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
  });
}
