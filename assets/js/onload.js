window.onload = function () {
    setTimeout(() => {
        document.querySelector('.loader_container').classList.add('active')
        document.querySelector('.page_loaded').classList.add('active')
    }, 1000);
}