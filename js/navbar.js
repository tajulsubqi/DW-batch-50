const barsMenu = document.querySelector('#bars-menu');
const sidebarMenu = document.querySelector('.sidebar-menu');

barsMenu.addEventListener('click', function(e) {
  sidebarMenu.classList.toggle('active')
})

//  klik di luar sidebar menghilangkan bars menu
const bars = document.querySelector('#bars-menu')

document.addEventListener('click', function(e) {
  if(!bars.contains(e.target) && !sidebarMenu.contains(e.target)) {
    sidebarMenu.classList.remove('active');
  }
})

