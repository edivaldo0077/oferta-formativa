function toggleInfo(id) {
    const section = document.getElementById(id);
    if (section.classList.contains('hidden')) {
      document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
      section.classList.remove('hidden');
      section.classList.add('visible');
    } else {
      section.classList.add('hidden');
      section.classList.remove('visible');
    }
  }
  
  // Registrar Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('Service Worker registrado:', reg))
        .catch(err => console.error('Erro ao registrar Service Worker:', err));
    });
  }
  
  