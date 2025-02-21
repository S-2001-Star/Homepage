function changeBg(){
    var navbar = document.getElementById('bar');
    var scrollValue = window.scrollY;
    if(scrollValue < 10){
        bar.classList.remove('bar-scrolled');
    }
    else{
        bar.classList.add('bar-scrolled');
    }
}
window.addEventListener('scroll', changeBg);