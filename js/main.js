//open and close cart

var cart = document.querySelector(".cart");

function open_cart() {
    cart.classList.add("active");
}

function close_cart() {
    cart.classList.remove("active");
}

//open and close menu

var menu = document.querySelector(".menu");

function open_menu() {
    menu.classList.add("active");
}

function close_menu() {
    menu.classList.remove("active");
}

//Thay đổi ảnh khi dí chuột vào detail item
let bigImg = document.querySelector("#bigImg");
function ChangeItemImage(img) {
    bigImg.src = img;
}

// add items to cart

//Khai báo biến all_products_json để lưu trữ dữ liệu từ file items.json thông quan fetch API trong items_home.js
var all_products_json;

let product_cart = [];

//Hàm add_to_cart sẽ được gọi khi người dùng click vào nút thêm sản phẩm vào giỏ hàng
function add_to_cart(id, btn) {
    product_cart.push(all_products_json[id]);
    //Thêm class active vào nút thêm sản phẩm vào giỏ hàng để thay đổi màu sắc của nút
    btn.classList.add("active");
    console.log(product_cart);
    getCartItems();
}

//Lấy thống báo số lượng trên Header
let count_item = document.querySelector(".count_item");
//Lấy thống báo tổng tiền của giỏ hàng cần hiển thị trên Header
let price_cart_Head = document.querySelector(".price_cart_Head");

//Lấy thẻ hiển thị số lượng sản phẩm và tổng giá tiền trong giỏ hàng
let count_item_cart = document.querySelector(".count_item_cart");
let price_cart_total = document.querySelector(".price_cart_total");

//Lấy thẻ hiển thị các sản phẩm trong giỏ hàng
var items_in_cart = document.querySelector(".items_in_cart");

function getCartItems() {
    let total_price = 0;
    let items_c = "";
    for (let i = 0; i < product_cart.length; i++) {
        items_c += `
                <div class="item_cart">
                    <img src="${product_cart[i].img}" alt="product" />
                    <div class="content">
                        <h4>
                            ${product_cart[i].name}
                        </h4>
                        <p class="price_cart">$${product_cart[i].price}</p>
                    </div>
                    <button onclick="remove_from_cart(${i}, ${product_cart[i].id})" class="delete_item">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
        `;

        total_price += product_cart[i].price;
    }

    items_in_cart.innerHTML = items_c;
    //Hiển thị tổng tiền của giỏ hàng lên Header
    price_cart_Head.innerHTML = `$${total_price}`;
    //Hiển thị số lượng sản phẩm trong giỏ hàng lên Header
    count_item.innerHTML = product_cart.length;
    //Hiển thị số lượng sản phẩm trong giỏ hàng trong cart
    count_item_cart.innerHTML = product_cart.length + " Item in Cart";
    //Hiển thị tổng tiền của giỏ hàng trong cart
    price_cart_total.innerHTML = `$${total_price}`;
}

function remove_from_cart(index, id) {
    product_cart.splice(index, 1);
    getCartItems();

    //Xóa class active của nút thêm sản phẩm vào giỏ hàng
    let addToCartButtons = document.querySelectorAll(".fa-cart-plus");
    //Xóa class active của thằng nào có id trùng với index
    for (let i = 0; i < addToCartButtons.length; i++) {
        if (addToCartButtons[i].id == id) {
            addToCartButtons[i].classList.remove("active");
        }
    }

    // //Lấy tất cả các nút thêm sản phẩm vào giỏ hàng
    // let addToCartButtons = document.querySelectorAll(".fa-cart-plus");
    // //Duyệt qua từng nút thêm sản phẩm vào giỏ hàng và xóa class active
    // for (let i = 0; i < addToCartButtons.length; i++) {
    //     addToCartButtons[i].classList.remove("active");

    //     //Duyệt qua từng sản phẩm trong giỏ hàng và thêm class active vào nút thêm sản phẩm vào giỏ hàng nếu sản phẩm đó đã được thêm vào giỏ hàng
    //     product_cart.forEach((product) => {
    //         if (product.id == i) {
    //             addToCartButtons[i].classList.add("active");
    //         }
    //     });
    // }
}

// back to top
let back_to_top = document.querySelector(".back_to_top");

back_to_top.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
