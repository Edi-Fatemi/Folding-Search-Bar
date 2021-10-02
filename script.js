let icon = document.querySelector('.icon');
let search = document.querySelector('.search');
let searchInput = document.getElementById('searchInput');
let clear = document.querySelector('.clear');

icon.onclick = function(){
  search.classList.toggle('active')
  if(search.classList.toggle !== 'active') {
    searchInput.value = '';
    
  } 
}

clear.onclick = function() {
  searchInput.value = '';
}
