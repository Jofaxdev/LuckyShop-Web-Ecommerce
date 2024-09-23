//open and close cart

var cart = document.querySelector(".cart");

function open_cart() {
    cart.classList.add("active");
}

function close_cart() {
    cart.classList.remove("active");
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

var items_in_cart = document.querySelector(".items_in_cart");

function getCartItems() {
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
                    <button class="delete_item">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
        `;
    }
    items_in_cart.innerHTML = items_c;
}
