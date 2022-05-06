import { topsection, footersection } from "../components/top-bottom.js";
document.querySelector('.herder-contain').innerHTML = topsection();
document.querySelector('footer').innerHTML = footersection();

let checkdetails = () => {
    let form = document.getElementById('getalladd');
    let name = form.name.value;
    let last = form.last.value;
    let street = form.street.value;
    let postcode = form.postcode.value;
    let city = form.city.value;
    let mobile = form.mobile.value;
    let country = document.querySelector('#selectcountry').value;
    let change_content = document.querySelector('#change-content');
    if (country == 'in') {
        change_content.innerHTML = 'DHL Express  i€ 0.00 2-4 business days delivery time '
    } else {
        change_content.innerHTML = 'Express  i€ 0.00 2-4 business days delivery time '
    }
    if (name == '') {
        document.querySelector('.name').style.display = 'block';
    } else {
        document.querySelector('.name').style.display = 'none';
    }
    if (last == '') {
        document.querySelector('.last').style.display = 'block';
    } else {
        document.querySelector('.last').style.display = 'none';
    }
    if (street == '') {
        document.querySelector('.street').style.display = 'block';
    } else {
        document.querySelector('.street').style.display = 'none';
    }
    if (postcode == '') {
        document.querySelector('.postcode').style.display = 'block';
    } else {
        document.querySelector('.postcode').style.display = 'none';
    }
    if (city == '') {
        document.querySelector('.city').style.display = 'block';
    } else {
        document.querySelector('.city').style.display = 'none';
    }
    if (mobile == '') {
        document.querySelector('.mobile').style.display = 'block';
    } else {
        document.querySelector('.mobile').style.display = 'none';
    }
    if (name != '' && last != '' && street != '' && postcode != '' && city != '' && mobile != "") {
        window.location.href = 'payment.html';
    }
}
document.querySelector('#takeaction').addEventListener('click', checkdetails);

let GoCart = () => {
    window.location.href = "cart.html"
}
document.querySelector('.gocartpage').addEventListener('click', GoCart);


let againhidden = () => {
    document.querySelector('#hover-visibility').style.display = 'none';

}

document.querySelector('.fa-xmark').addEventListener('click', againhidden);




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


// about-info
// baap
let showthehiddenitems = () => {
    document.querySelector('.info-curso').style.display = 'block'
}
let hiddenthehiddenitems = () => {
        document.querySelector('.info-curso').style.display = 'none'

    }
    // mouseleave
document.querySelector('.about-info').addEventListener('mouseenter', showthehiddenitems)
document.querySelector('.about-info').addEventListener('mouseleave', hiddenthehiddenitems)