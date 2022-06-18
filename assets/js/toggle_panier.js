document.querySelector('.btn_panier').addEventListener('click', open_paier)
let panier = document.querySelector('.panier')
function open_paier() {
    panier.classList.add('active')
    document.querySelector('.close_panier').addEventListener('click', function () {
        panier.classList.remove('active')
    })
}