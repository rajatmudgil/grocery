class product {
    
    constructor(id, name="NO NAME", desc="No Description", price=0, photo='../assets/images/NA_symbol.png', qty=0, category='miscllaneous'){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.photo = photo;
        this.qty = qty;
        this.inCart= false;
        this.category = category;
    }


    toggleInCart(){
        return this.inCart = !this.inCart;
    }

    incrementQty(){
        return this.qty+=1;
    }

    decrementQty(){
        return this.qty-=1;
    }



}