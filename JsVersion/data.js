// @ts-check

//const nav = document.querySelectorAll(".bar");
//console.log(nav);


const gridCells = document.querySelectorAll(".bar");
gridCells.forEach((bar) => {
  // Set outline when cell is hovered
  bar.addEventListener('click', click) ;
});

function click(e){
  e.preventDefault();
  let main = document.querySelector('main');
    // Navbar links
  const home = document.getElementById('Home');
  const project = document.getElementById('Projects');
  const about = document.getElementById('About' );
  const donate = document.getElementById('Donate');
  // content to be displayed when nav link is clicked
  const homeContent = document.querySelector('#home');
  const proContent  = document.querySelector('#projects');
  const aboutContent = document.querySelector('#about');
  
  home.addEventListener('click', () => {
    console.log(2);
    main.innerHTML = homeContent.innerHTML;
    main.style.display = "block";
    })
  
  project.addEventListener('click', () => {
    console.log(3);
    main.innerHTML = proContent.innerHTML;
    main.style.display = "block";
    })
  
  about.addEventListener('click', () => {
    console.log(4);
    main.innerHTML = aboutContent.innerHTML;
    main.style.display = "block";
    })

  donate.addEventListener('click', () => {
    console.log(5);
    //main.innerHTML = homeContent.innerHTML;
    //main.style.display = "block";
    })
}
  