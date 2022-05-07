import { topsection, footersection } from "../components/top-bottom.js";
document.querySelector('.herder-contain').innerHTML = topsection();
document.querySelector('footer').innerHTML = footersection();

let backdelivery = () => {
    window.location.href = 'delivery.html';
}
let goconfirm = () => {
    let lejaao = document.querySelector('.check-avaiblity').value;
    let propaypal = document.querySelector('#payment-paypal').checked;
    let procar = document.querySelector('#payment').checked;
    if (lejaao === '') {
        document.querySelector('.show-error').style.display = 'block'
    } else {
        document.querySelector('.show-error').style.display = 'none';
        window.location.href = 'confirm.html'

    }
}
document.querySelector('#back-to-delivery').addEventListener('click', backdelivery);
document.querySelector('#go-confirm').addEventListener('click', goconfirm);



let takeshow = () => {
    let pro = document.querySelector('#payment').checked;
    if (pro) {
        document.querySelector('.cart-section-fill-details').style.display = 'block';
    }
}
let anothetakeshow = () => {
    let pro = document.querySelector('#payment-paypal').checked;

    if (pro) {
        document.querySelector('.cart-section-fill-details').style.display = 'none';
    }
}
document.querySelector('#payment').addEventListener('click', takeshow)
document.querySelector('#payment-paypal').addEventListener('click', anothetakeshow);






let GoDelivery = () => {
    window.location.href = "delivery.html"

}
let GoCart = () => {
    window.location.href = "cart.html"
}

document.querySelector('.opcacity-down-delivery').addEventListener('click', GoDelivery);
document.querySelector('.gocartpage').addEventListener('click', GoCart);







let takerelife = () => {
    document.querySelector('.click-redirect-page-suggestions').style.display = 'block';
    document.querySelector('.special-kind-of-thing-like-body').style.display = 'block';

}
let ifornotdoallthisg = () => {
    document.querySelector('.click-redirect-page-suggestions').style.display = 'none';
    document.querySelector('.special-kind-of-thing-like-body').style.display = 'none';

}
let alosdosamethings = () => {
    document.querySelector('.click-redirect-page-suggestions').style.display = 'none';
    document.querySelector('.special-kind-of-thing-like-body').style.display = 'none';
}
document.querySelector('.logo-container').addEventListener('click', takerelife);
document.querySelector('.logo-conditions').addEventListener('click', ifornotdoallthisg);
document.querySelector('.special-kind-of-thing-like-body').addEventListener('click', alosdosamethings);
document.querySelector('.simply-hidden').addEventListener('click', ifornotdoallthisg);