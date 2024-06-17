document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let docTitle = document.title;
window.addEventListener('blur', () =>{
    document.title = 'Já olhou tudo? 👀';
})
window.addEventListener('focus', () =>{
    document.title = docTitle;
});

function toggleDarkMode() {
    const content = document.getElementById('content');
    content.classList.toggle('dark-mode');
    
    const button = document.getElementById('darkModeButton');
    if (content.classList.contains('dark-mode')) {
      button.textContent = 'Dark Mode';
    } else {
      button.textContent = 'Light Mode';
    }
  }