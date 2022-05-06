import { topsection, footersection } from "../components/top-bottom.js";
document.querySelector('.herder-contain').innerHTML = topsection();
document.querySelector('footer').innerHTML = footersection();
let GoPayment = () => {
    window.location.href = "payment.html"
}
let GoDelivery = () => {
    window.location.href = "delivery.html"
}
let GoCart = () => {
    window.location.href = "cart.html"
}
document.querySelector('.opcacity-down-payment').addEventListener('click', GoPayment);
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




let obj = [{
    img_items: 'https://img.mytheresa.com/240/240/90/jpeg/catalog/product/0a/P00677210.jpg',
    name: 'GUCCI',
    size: 'IT 38 / XXS',
    item: 'P00677210',
    price: '22',
    quantity: '1',
    des: 'Lace-trimmed muslin maxi dress'
}, {
    img_items: 'https://img.mytheresa.com/240/240/90/jpeg/catalog/product/0a/P00677210.jpg',
    name: 'GUCCI',
    size: 'IT 38 / XXS',
    item: 'P00677210',
    price: '22',
    quantity: '1',
    des: 'Lace-trimmed muslin maxi dress'
}, {
    img_items: 'https://img.mytheresa.com/240/240/90/jpeg/catalog/product/0a/P00677210.jpg',
    name: 'GUCCI',
    size: 'IT 38 / XXS',
    item: 'P00677210',
    price: '22',
    quantity: '1',
    des: 'Lace-trimmed muslin maxi dress'
}];
// 
let subtotalamount = document.querySelector('.subtotal-amount');
const sumtotal = obj.reduce(function(prev, el, i, arr) {
    prev += Number(el.price) * Number(el.quantity);
    return prev
}, 0)
let container = document.createElement('div');
let contaienr_value = document.createElement('div');
let text_content = document.createElement('p');
let text_content_value = document.createElement('p');
let text_content_value_second = document.createElement('p');
let text_content_value_third = document.createElement('p');
let text_content_value_grand = document.createElement('p');

let text_shipping = document.createElement('p');
let text_shipping_second = document.createElement('p');
let text_shipping_grand = document.createElement('p');
text_shipping_grand.setAttribute('class', 'imgrand')


text_content.innerHTML = 'Subtotal';
text_shipping.innerHTML = 'Shipping';
text_shipping_grand.innerHTML = 'Grand Total';
text_shipping_second.innerHTML = 'Carbon offsetting'
    // Carbon offsetting	
text_content_value_second.innerHTML = '€ 0.00';
text_content_value_third.innerHTML = '€ 0.00';

container.append(text_content, text_shipping, text_shipping_second, text_shipping_grand);
text_content_value.innerText = `€ ${sumtotal}.00`;
text_content_value_grand.innerText = `€ ${sumtotal}.00`;
contaienr_value.append(text_content_value, text_content_value_second, text_content_value_third, text_content_value_grand)
subtotalamount.append(container, contaienr_value);



let itemappedingadd = document.querySelector('.add-items-cato-price');

obj.forEach(({ img_items, name, size, item, price, quantity, des }) => {
    let img = document.createElement('img');
    img.src = img_items;
    let box = document.createElement('div');
    let box1 = document.createElement('div');
    let name_show = document.createElement('p');
    name_show.innerText = name;
    let size_show = document.createElement('p');
    let another_box = document.createElement('div');
    another_box.setAttribute('class', 'another-box-price')
    size_show.innerText = `Size: ${size}`;
    let items_num = document.createElement('p');
    items_num.innerText = `item no.: ${item}`;
    let dec_show = document.createElement('p');
    dec_show.innerText = des;
    let box_all = document.createElement('div');
    box.setAttribute('class', 'right-side-img');
    box1.setAttribute('class', 'right-side-name-container');
    box_all.setAttribute('class', 'all_tow_img-name');
    let price_show = document.createElement('p');
    price_show.innerText = `€ ${price}`;
    let quantity_show = document.createElement('p');
    quantity_show.innerText = quantity;
    let total = document.createElement('p');
    total.innerText = '€' + Number(price) * Number(quantity);
    another_box.append(price_show, quantity_show, total)
    let hrtag = document.createElement('hr');
    box1.append(name_show, dec_show, size_show, items_num);
    box.append(img);

    box_all.append(box, box1, another_box);
    itemappedingadd.append(box_all, hrtag);
});
let completecheckout = () => {

    // window.location.href = 'cart.html'
    document.querySelector('.main-content-details-section').innerHTML = `<div class="success">
    <img src="https://pic.onlinewebfonts.com/svg/img_319740.png" alt="">

    <h2>Thank You</h2>
    <h1>Checkout Succesfull</h1>
    <div class="change_position_success">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Noun_Project_Celebration_icon_1857239.svg/150px-Noun_Project_Celebration_icon_1857239.svg.png?20200206001616" alt=""></div>

    <button><a href="index.html">RETURN TO HOME PAGE</a></button>
</div>`
}
document.querySelector('#completecheckout').addEventListener('click', completecheckout);