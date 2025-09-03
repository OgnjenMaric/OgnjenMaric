function toggleMenu() {
  const sideMenu = document.getElementById('sideMenu');
  sideMenu.classList.toggle('open');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const sideMenu = document.getElementById('sideMenu');
  const menuBtn = document.querySelector('.menu-btn');

  // If the menu is open and the click is NOT on the menu or button
  if (sideMenu.classList.contains('open') && 
      !sideMenu.contains(event.target) &&
      !menuBtn.contains(event.target)) {
    sideMenu.classList.remove('open');
  }
});