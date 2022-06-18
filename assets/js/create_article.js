let form_create_article =  document.querySelector('.form_create_article')
document.querySelector('.create_article').addEventListener('click', function () {
    form_create_article.classList.add('active')
})
document.querySelector('.close_submit').addEventListener('click', function () {
    form_create_article.classList.remove('active')
})