const pic2 = document.querySelector('.pic2');
window.addEventListner("mousemove",(e) => {
    pic2.style.left = e.clientX + 'px';
})
