import { data, clothing_container, data1, footers_men_women_kid } from "./data.js"
console.log(data)


//Data appned on clothing container 
read("clothing_container").innerHTML = clothing_container();

read("footers_men_women_kid").innerHTML = footers_men_women_kid();

//By defalut mens data selected
append(data.men)
read("sort").addEventListener("change", mychange)

function mychange() {
    sort(data.men)
}


//function for append
let wishArr = JSON.parse(localStorage.getItem("wishlist")) || []
let bagArr = JSON.parse(localStorage.getItem("bag")) || []

function append(data) {

    read("clothing_divs").innerHTML = null;
    data.forEach(({ title, img: { img1, img2, img3, img4, img5 }, category, price }) => {

        let clothing_divs = read("clothing_divs")
        let div = create("div")
        div.setAttribute("class", "clothing_Inner_div")

        let innerdiv_head = create("div")

        innerdiv_head.setAttribute("class", "clothing_head")
        let span1 = create("p")
        span1.setAttribute("class", "span_new")
        span1.innerText = "NEW ARRIVAL"

        let wish = create("img")
        wish.src = "data:image/svg+xml;charset%3DUS-ASCII,%3Csvg%20viewBox%3D%220%200%2090%2084%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%20%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M73.4652%2080.6617C73.5983%2081.2871%2073.4322%2081.9374%2073.0135%2082.4298C72.5948%2082.9221%2071.9688%2083.2032%2071.3116%2083.194C70.9449%2083.1904%2070.5852%2083.0965%2070.2661%2082.921L44.9229%2068.9251L19.5797%2082.921C18.839%2083.3336%2017.9181%2083.2853%2017.2275%2082.7976C16.5369%2082.3098%2016.2053%2081.4736%2016.3806%2080.6617L22.2482%2052.9125L0.712731%2033.8216C0.0804729%2033.2654%20-0.157246%2032.4005%200.105391%2031.6121C0.368027%2030.8236%201.08218%2030.2581%201.92996%2030.1673L30.9092%2027.0133L42.9566%201.22019C43.3116%200.476125%2044.0788%200%2044.9229%200C45.7669%200%2046.5342%200.476125%2046.8892%201.22019L58.9365%2027.0133L87.9158%2030.1673C88.7635%2030.2581%2089.4777%2030.8236%2089.7403%2031.6121C90.003%2032.4005%2089.7653%2033.2654%2089.133%2033.8216L67.5975%2052.9125L73.4652%2080.6617ZM43.8501%2064.6646C44.5172%2064.2935%2045.3366%2064.2935%2046.0037%2064.6646L68.257%2076.9622L63.1072%2052.5945C62.9491%2051.8663%2063.1983%2051.1111%2063.7626%2050.608L82.6764%2033.8372L57.2396%2031.0623C56.483%2030.9816%2055.8255%2030.5211%2055.5074%2029.8493L44.9269%207.16468L34.3464%2029.8493C34.0283%2030.5211%2033.3708%2030.9816%2032.6142%2031.0623L7.17741%2033.8372L26.0912%2050.608C26.6555%2051.1111%2026.9047%2051.8663%2026.7466%2052.5945L21.5968%2076.9622L43.8501%2064.6646Z%22%20fill%3D%22%23B1B1B1%22%2F%3E%3C%2Fsvg%3E"
        wish.setAttribute("id", "StarImage")



        let product_img = create("img")
        product_img.src = img1;

        let product_name = create("h4")
        product_name.innerText = title;

        let product_price = create("h4")
        product_price.innerText = ` € ${price}`;

        let Product_detail = {
            img: { img1, img2, img3, img4, img5 },
            title,
            price,
            category,
        }


        product_img.onclick = () => {

            store_data(Product_detail)
        };
        let hover_container = document.createElement("div");
        hover_container.setAttribute("id", 'hover-items-show')
        let div_contains_only_h4_i_tag = document.createElement("div");
        div_contains_only_h4_i_tag.setAttribute('class', 'teke_flex-thing');
        let heading_h2 = document.createElement("h4");
        // <i class="fa-solid fa-xmark"></i>
        let cross_icon_cancelled = document.createElement("i");
        cross_icon_cancelled.setAttribute("class", 'fa-solid fa-xmark cross_mark');
        let cross_mark = document.querySelector('.cross_mark')
        cross_icon_cancelled.onclick = () => {
            document.querySelector('#hover-items-show').style.display = 'none';
        }
        heading_h2.innerText = 'Please choose your size:';
        let div_hole_size = document.createElement("div");
        div_hole_size.setAttribute("id", 'take_all_size_inner');
        let value_UK = 6;
        let EU_value = 40;
        for (var i = 0; i < 8; i++) {
            let div_size = document.createElement("div");
            div_size.setAttribute('class', 'size_containers');
            let p_uk = document.createElement("p");
            let e_u = document.createElement("p");
            p_uk.innerText = `UK_${value_UK}`;
            e_u.innerText = `EU ${EU_value}`;
            value_UK++;
            EU_value++;
            div_size.append(p_uk, e_u);
            div_hole_size.append(div_size)
        }
        let btn_for_add_bag = document.createElement('button');
        let btn_for_add_wishlist = document.createElement('button');
        btn_for_add_bag.innerHTML = 'ADD TO SHOPPING BAG';
        btn_for_add_wishlist.innerHTML = 'ADD TO WISHLIST';

// click on size

        // document.getElementsByClassName("size_containers").addEventListener("click",size)
        // function size(){
             
        // }
        btn_for_add_bag.addEventListener("click",addtobag)
        function addtobag(){
            store_bag(Product_detail)
        }
 btn_for_add_wishlist.addEventListener("click",addtowish)
 function addtowish(){
    store_wishlist(Product_detail)
 }



        div_contains_only_h4_i_tag.append(heading_h2, cross_icon_cancelled);
        hover_container.append(div_contains_only_h4_i_tag, div_hole_size, btn_for_add_bag, btn_for_add_wishlist)
        wish.onclick = () => {
            wish.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVfrpwFrsaM3K21qU5f2j_HPyQbQ9zIEjmbOPj-PaYougvdOiJMdrnLP4dsxLhtI1EAmQ&usqp=CAU"
            
                // console.log("i'am arun");
                // start here hover works
            document.querySelector('#hover-items-show').style.display = 'block';

        };


        innerdiv_head.append(span1, wish, hover_container)

        div.append(innerdiv_head, product_img, product_name, product_price)

        clothing_divs.append(div)
    })


}

function store_data(Product_detail) {
    console.log(Product_detail)

    //window.location.href("")

    localStorage.setItem("detail", JSON.stringify(Product_detail))
}


function store_wishlist(elem) {

    console.log(wishArr)
    wishArr.push(elem)
         alert("Product Added to wishlist")

    localStorage.setItem("wishlist", JSON.stringify(wishArr))
}
function store_bag(elem) {

    console.log(wishArr)
    bagArr.push(elem)
          alert("Product Added to Bag")

    localStorage.setItem("bag", JSON.stringify(bagArr))
}












//console.log(data.men)



// function for men
function mensearch() {

    append(data.men)
    read("sort").addEventListener("change", mychange)

    function mychange() {
        sort(data.men)
    }

}

read("mens_clothing").addEventListener("click", mensearch)

//func for women
function women_search() {
    read("footers_header_part").innerText = "DESIGNER CLOTHING FOR WOMEN"
    append1(data1.women)

    read("sort").addEventListener("change", mychange)

    function mychange() {
        sort1(data1.women)
    }
}

read("womens_clothing").addEventListener("click", women_search)

//func for kid
function kid_search() {
    read("footers_header_part").innerText = "DESIGNER CLOTHING FOR KIDS"
    append1(data1.kids)
    read("sort").addEventListener("change", mychange)

    function mychange() {
        sort1(data1.kids)
    }
}

read("kids_clothing").addEventListener("click", kid_search)

//apend part for women and kid


function append1(data) {

    read("clothing_divs").innerHTML = null;
    data.forEach(({ title, img, price }) => {

        let clothing_divs = read("clothing_divs")
        let div = create("div")
        div.setAttribute("class", "clothing_Inner_div")

        let innerdiv_head = create("div")

        innerdiv_head.setAttribute("class", "clothing_head")
        let span1 = create("p")
        span1.setAttribute("class", "span_new")
        span1.innerText = "NEW ARRIVAL"

        let wish = create("img")
        wish.src = "data:image/svg+xml;charset%3DUS-ASCII,%3Csvg%20viewBox%3D%220%200%2090%2084%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%20%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M73.4652%2080.6617C73.5983%2081.2871%2073.4322%2081.9374%2073.0135%2082.4298C72.5948%2082.9221%2071.9688%2083.2032%2071.3116%2083.194C70.9449%2083.1904%2070.5852%2083.0965%2070.2661%2082.921L44.9229%2068.9251L19.5797%2082.921C18.839%2083.3336%2017.9181%2083.2853%2017.2275%2082.7976C16.5369%2082.3098%2016.2053%2081.4736%2016.3806%2080.6617L22.2482%2052.9125L0.712731%2033.8216C0.0804729%2033.2654%20-0.157246%2032.4005%200.105391%2031.6121C0.368027%2030.8236%201.08218%2030.2581%201.92996%2030.1673L30.9092%2027.0133L42.9566%201.22019C43.3116%200.476125%2044.0788%200%2044.9229%200C45.7669%200%2046.5342%200.476125%2046.8892%201.22019L58.9365%2027.0133L87.9158%2030.1673C88.7635%2030.2581%2089.4777%2030.8236%2089.7403%2031.6121C90.003%2032.4005%2089.7653%2033.2654%2089.133%2033.8216L67.5975%2052.9125L73.4652%2080.6617ZM43.8501%2064.6646C44.5172%2064.2935%2045.3366%2064.2935%2046.0037%2064.6646L68.257%2076.9622L63.1072%2052.5945C62.9491%2051.8663%2063.1983%2051.1111%2063.7626%2050.608L82.6764%2033.8372L57.2396%2031.0623C56.483%2030.9816%2055.8255%2030.5211%2055.5074%2029.8493L44.9269%207.16468L34.3464%2029.8493C34.0283%2030.5211%2033.3708%2030.9816%2032.6142%2031.0623L7.17741%2033.8372L26.0912%2050.608C26.6555%2051.1111%2026.9047%2051.8663%2026.7466%2052.5945L21.5968%2076.9622L43.8501%2064.6646Z%22%20fill%3D%22%23B1B1B1%22%2F%3E%3C%2Fsvg%3E"
        wish.setAttribute("id", "StarImage")


        let product_img = create("img")
        product_img.src = img

        let product_name = create("h4")
        product_name.innerText = title;

        let product_price = create("h4")
        product_price.innerText = ` € ${price}`;


        innerdiv_head.append(span1, wish)

        div.append(innerdiv_head, product_img, product_name, product_price)

        clothing_divs.append(div)

    })


}





// // for men sorts

function sort(data) {

    let selected = read("sort").value
        //console.log(selected)


    if (selected == "htl") {
        data.sort(function(a, b) {
            return b.price - a.price;
        });
        console.log(data)
        append(data);
    }

    if (selected == "lth") {
        data.sort(function(a, b) {
            return a.price - b.price;
        });
        append(data);
        console.log(data)
    }

}

// sort for kids and women 

function sort1(data) {

    let selected = read("sort").value
        //console.log(selected)


    if (selected == "htl") {
        data.sort(function(a, b) {
            return b.price - a.price;
        });
        console.log(data)
        append1(data);
    }

    if (selected == "lth") {
        data.sort(function(a, b) {
            return a.price - b.price;
        });
        append1(data);
        console.log(data)
    }

}






// func for create element
function create(id) {
    return document.createElement(id)
}


//func for get element
function read(id1) {
    return document.getElementById(id1)
}


// //Filter by cloths

let category = document.getElementById("category").children

function cSearch() {
    console.log(this.id);
    let selected = this.id
    let newdata = data.men
    console.log(newdata)

    var filteredList = newdata.filter(function(elem) {
        return elem.category.trim() == selected;
    });

    console.log(filteredList)


    append(filteredList)

}


for (let el of category) {
    el.addEventListener("click", cSearch)
}