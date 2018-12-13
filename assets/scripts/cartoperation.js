const cartOperations = {


    addToCart() {
        let productId = this.getAttribute('data_productId');
        if (productOperations.toggleFromCart(productId)) {
            updateProductQty(productId, productOperations.decrementQty(productId));
            appendCartItem(productOperations.getProduct(productId));
            this.disabled = "ture";
        }
    },

    removeFromCart() {
        let productId = this.getAttribute('data_productId');
        if( productOperations.getProduct(productId).inCart ){
            productOperations.toggleFromCart(productId);
            this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode);
            updateProductQty(productId, productOperations.incrementQty(productId));
            document.querySelector("button[data_productId='"+productId+"'].addToCard_btn").disabled=false;
        }
    }

}