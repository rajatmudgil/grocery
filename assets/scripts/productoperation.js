const productOperations = {
    products: [],

    countProductInCart() {
        return (this.products.filter((product) => product.inCart == true)).length;
    },

    getProduct(id) {
        if (product = this.products.find(product => product.id == id)) {
            return product;
        } else {
            console.log("No Product with such Id");
        }
    },

    toggleFromCart(id) {
        return this.getProduct(id).toggleInCart() 
        
    },

    AddProduct(product) {
        this.products.push(product);
    },

    incrementQty(id) {
        return this.getProduct(id).incrementQty();
    },

    decrementQty(id) {
        return this.getProduct(id).decrementQty();
    }



}

HardCodedProduct();

function HardCodedProduct() {
    productOperations.AddProduct(new product(1, "Cabbage", 'Used IN every Food', 50, 'https://www.bigbasket.com/media/uploads/p/mm/10000066_25-fresho-cabbage.jpg', 20, 'vegetable'));
    productOperations.AddProduct(new product(2, "Lady fingure", 'Used IN every Food', 50, 'http://mrfarmer.com/image/cache/data/Seeds/lady-finger-500x500.jpg', 30, 'fruit'));
    productOperations.AddProduct(new product(3, "Onion", 'Used IN every Food', 50, 'https://images-na.ssl-images-amazon.com/images/I/81UeYuulNjL._SY355_.jpg', 40, 'miscllaneous'));
    productOperations.AddProduct(new product(4, "Cabbage", 'Used IN every Food', 50, 'https://www.bigbasket.com/media/uploads/p/mm/10000066_25-fresho-cabbage.jpg', 20, 'miscllaneous'));
    productOperations.AddProduct(new product(5, "Lady fingure", 'Used IN every Food', 50, 'http://mrfarmer.com/image/cache/data/Seeds/lady-finger-500x500.jpg', 30, 'vegetable'));
    productOperations.AddProduct(new product(6, "Onion", 'Used IN every Food', 50, 'https://images-na.ssl-images-amazon.com/images/I/81UeYuulNjL._SY355_.jpg', 40, 'fruit'));
    productOperations.AddProduct(new product(7, "Lady fingure", 'Used IN every Food', 50, 'http://mrfarmer.com/image/cache/data/Seeds/lady-finger-500x500.jpg', 30, 'vegetable'));
    console.log("product Added");
}