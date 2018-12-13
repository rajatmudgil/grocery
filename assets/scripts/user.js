class user {
    constructor(username, password, emailId, gender, DOB) {
        this.username = username;
        this.password = password;
        this.emailId = emailId;
        this.gender = gender;
        this.DOB = DOB;
        this.userCart = [];
        return this;
    }

    addToUserCart(product){
        this.userCart.push(product);
    }

    removeFromUserCart(product){
        this.userCart.pop(product);
    }


}