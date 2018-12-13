window.addEventListener('load', init);

function init() {
    //preparing initial product list
    productOperations.products.forEach((product) => {
        productCard = fillProductCard(product);
        appendProductCardInList(product.category, productCard);
    });

    document.getElementById('login').onclick = () => loginAndRegisterBoxAppear('login');
    document.getElementById('register').onclick = () => loginAndRegisterBoxAppear('register');
    document.getElementById('loginBtn').onclick = () => userOperations.login(document.getElementById('userName').value, document.getElementById('password').value);
    document.getElementById('registerBtn').onclick = () => getRegister();
    document.getElementById('regResetBtn').onclick = () => userOperations.resetRegisterBox();
    userOperations.getAllRegisteredUser();
    document.getElementById('logout').onclick = ()=>logout();
}

const loginAndRegisterBoxAppear = function (currentlyClickedBox) {

    if (currentlyClickedBox == "login") {
        if (document.getElementById('registrationBox').classList.contains("displayNone")) {
            document.getElementById('loginBox').classList.toggle('displayNone');
        } else {
            document.getElementById('registrationBox').classList.toggle('displayNone');
            document.getElementById('loginBox').classList.toggle('displayNone');
        }
    } else if (currentlyClickedBox == "register") {
        if (document.getElementById('loginBox').classList.contains("displayNone")) {
            document.getElementById('registrationBox').classList.toggle('displayNone');
        } else {
            document.getElementById('loginBox').classList.toggle('displayNone');
            document.getElementById('registrationBox').classList.toggle('displayNone');
        }
    }
}

const getRegister = function () {
    userOperations.register(
        document.getElementById('regUserName').value,
        document.getElementById('reg_password').value,
        document.getElementById('regEmail').value,
        () => {
            if(document.querySelector('input[name="gender"]:checked')){
                document.querySelector('input[name="gender"]:checked').value;
            }else{
                return null;
            }
        },
        document.getElementById('DOB').value,
        document.getElementById('reType_password').value
    );
}

//creating instance of product card
const createProductCard = function () {
    return productCard = document.querySelector(".displayNone > .productCard").cloneNode(true);
}

//creating instance of cartList Item
const createCartItem = function () {
    return cartItem = document.querySelector("#cartList>li>.cartItem").cloneNode(true);
}

const fillProductCard = function (product) {
    productCard = createProductCard();
    //fill Product Image
    productCard.getElementsByClassName('productImage')[0].firstElementChild.src = product.photo;
    productDetail = productCard.getElementsByClassName('productDetail')[0];
    //fill product name
    productDetail.getElementsByClassName('productName')[0].children[1].innerText = product.name;
    //fill product description
    productDetail.getElementsByClassName('productDescription')[0].children[1].innerText = product.desc;
    //fill product id
    productDetail.getElementsByClassName('productId')[0].children[1].innerText = product.id;
    //get div containing price and quantity
    priceAndQty = productDetail.getElementsByClassName('priceAndQty')[0];
    //fill Price
    priceAndQty.children[0].children[1].innerText = product.price;
    //fill Quantity
    priceAndQty.children[1].children[1].innerText = product.qty;
    //bind function with AddToCart Button
    productDetail.getElementsByClassName('addToCard_btn')[0].setAttribute('data_productId', product.id);
    productDetail.getElementsByClassName('addToCard_btn')[0].addEventListener('click', cartOperations.addToCart);
    return productCard;
}

const fillCartListItem = function (product) {
    cartItem = createCartItem();
    cartItem.children[0].children[0].innerText = product.id;
    cartItem.children[1].children[0].src = product.photo;
    cartItem.children[2].children[0].innerText = product.name;
    cartItem.getElementsByTagName('button')[0].setAttribute('data_productId', product.id);
    cartItem.getElementsByTagName('button')[0].addEventListener('click', cartOperations.removeFromCart);
    return cartItem;
}

//takes productCard to be appended & the listName in which ProductCard is to be appended
const appendProductCardInList = function (listName, productCard) {
    listItem = document.createElement('li');
    listItem.appendChild(productCard);
    document.getElementById(listName).appendChild(listItem);
}

const appendCartItem = function (product) {
    cartItem = fillCartListItem(product);
    listItem = document.createElement('li');
    listItem.appendChild(cartItem);
    document.getElementById('cartList').appendChild(listItem);
}

const updateProductQty = function (productId, newValue) {
    document.querySelectorAll("button[data_productId='" + productId + "']")[0].parentNode.parentNode.querySelector('.quantity').innerText = newValue;
}

const loginSuccessful= function (currentActiveUser) {
    document.getElementById('login').classList.toggle('displayNone');
    document.getElementById('register').classList.toggle('displayNone');
    welUser = document.getElementById('userWelcome');
    document.getElementById("menuUsername").innerText = currentActiveUser.username;
    welUser.classList.toggle('displayNone');
    document.getElementById('logout').classList.toggle('displayNone');
    document.getElementById('loginBox').classList.toggle('displayNone');

}

const logout = function() {
    document.getElementById('userWelcome').classList.toggle('displayNone');
    document.getElementById('logout').classList.toggle('displayNone');
    document.getElementById('login').classList.toggle('displayNone');
    document.getElementById('register').classList.toggle('displayNone');
    window.localStorage.setItem(
        userOperations.currentActiveUser.username,
        JSON.stringify(userOperations.currentActiveUser)
        );
    userOperations.currentActiveUser = null;
}