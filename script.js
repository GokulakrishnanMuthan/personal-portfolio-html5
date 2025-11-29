const sideMenu=document.querySelector('#sideMenu');
const navbar=document.querySelector('nav');
const navbarLinks=document.querySelector('nav ul');

function openMenu(){
    sideMenu.style.transform='translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform='translateX(16rem)';
}

window.addEventListener('scroll',()=>{
    if(scrollY>50){
        navbar.classList.add('bg-white','bg-opacity-50', 'backdrop-blur-md', 'shadow-sm','dark:bg-darkTheme','dark:shadow-white/20');
        navbarLinks.classList.remove('bg-white','bg-opacity-50',  'shadow-sm','dark:border','dark:border-white/50','dark:bg-transparent' );
    }else{
        navbar.classList.remove('bg-white','bg-opacity-50', 'backdrop-blur-md', 'shadow-sm','dark:bg-darkTheme','dark:shadow-white/20');
        navbarLinks.classList.add('bg-white','bg-opacity-50',  'shadow-sm','dark:border','dark:border-white/50','dark:bg-transparent' );
    }
});



function toggleMode(){
    document.documentElement.classList.toggle("dark");
    const isDarkMode = document.documentElement.classList.contains("dark");
    if (isDarkMode) {
        localStorage.theme = "dark";
    } else {
        localStorage.theme = "light";
    }   
}