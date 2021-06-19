const icon = document.getElementById('icon');
const navContent = document.querySelector('.show');
const ulNav = document.querySelector('ul');
let onClick ;

if(onClick = false){
  ulNav.style.left ="-100"  
  
}else {
  icon.addEventListener('click', display);
}

function display(e){
  e.preventDefault;
  console.log(1);
  //ulNav.toggleAttribute('show');
  
  ulNav.classList.add('show');
  const show = document.querySelector('.show');
  show.style.left = "0";
}


