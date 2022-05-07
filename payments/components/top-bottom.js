function topsection() {
    return `
    <div class="top-section">
            <div class="logo-container">
                <img src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20220420T172422" alt="MYTHERESA">
            </div>
        </div>
        <div class="line-cato-section">
            <div class="floting-text-container">
                <div class='iam'>
                   <div class="opcacity-down gocartpage">
                   <p class="box-balck">SHOPPING BAG</p>
                   <div class='imblack shopping'></div>
                   </div>
                 </div>
                <div class='iam'>
                   <div class="opcacity-down-delivery">
                   <p class="box-balck">DELIVERY</p>
                   <div class='imblack delivery'></div>
                   </div>
                 </div>
                 <div class='iam'>
                   <div class="opcacity-down-payment">
                   <p class="box-balck">PAYMENT</p>
                   <div class='imblack payments-make-work'></div>
                   </div>
                 </div>
                 <div class='iam'>
                   <div class="opcacity-down-confirm">
                   <p class="box-balck">CONFIRM</p>
                   <div class='imblack confirm'></div>
                   </div>
                 </div>
            </div>
            <hr class="hr-tag">
        </div>
        <div class="phone-icon">
            <i class="fa-solid fa-phone"></i>
        </div>
        <div id="hover-visibility">
            <div class="top-comment">
                <span>HOW CAN WE HELP YOU?</span>
                <i class="fa-solid fa-xmark"></i>
            </div>
            <div class="content-again">
                <i class="fa-solid fa-phone"></i><br>
                <a href="tel:7219689203">+91 89127695-101</a>
                <p>Available 24/7</p>
                <i class="fa-solid fa-envelope"></i><br>
                <a href="mailto:arunrajbhar1998@gmail.com" class="remove-text-decoration">customercare@mytheresa.com</a>
                <div class="avoid-line-height">
                    <p>For more information, please refer to
                        <a href="">our customer care page.</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="take-relative-position">
            <div class="click-redirect-page-suggestions">
                <h3>GO BACK TO YOUR SHOPPING BAG?</h3>
                <i class="fa-solid fa-xmark logo-conditions"></i>
                <div class="width-action-logo"> <span>If you return to your shopping bag, you will exit the checkout process and need to start again.</span></div>
                <div class="btn logo-btn">
                    <button><a href='../MyCart.html'>RETURN TO SHOPPING BAG</a></button>
                    <button class="simply-hidden">PROCESSD TO CHECKOUT</button>
                </div>
            </div>
        </div>

  `
}



function footersection() {
    return `
    <hr>
    <div class="special-kind-of-formate">
        You can also place your order via telephone.
    </div>
    <div class="special-box">
        <div class="box-first">
            <i class="fa-solid fa-phone special"></i><br>
            <p>CALL US</p>
            <a href="tel:7219689203">+91 89127695-101</a>
            <p>Available 24/7</p>
        </div>
        <div class="box-second">
            <i class="fa-solid fa-envelope"></i>
            <p>MAIL US</p>
            <a href="mailto:arunrajbhar1998@gmail.com">customercare@mytheresa.com</a>
        </div>
    </div>
    <hr>
    <div class="owner-name">
        <p>copyright © 2006-2022 mytheresa.com</p>
        <div>
            <p>Terms of use</p>
            <p>privacy policy</p>
            <p>imprint</p>
        </div>
    </div>
    `
}
export { topsection, footersection };