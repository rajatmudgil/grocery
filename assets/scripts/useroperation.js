const userOperations = {
    usersList: [],
    currentActiveUser:null,

    login(userName, password) {
        if(user = this.usersList.find(user => user.username == userName )){
            if(user.password == password) {
                loginSuccessful(this.currentActiveUser=user);
            } else {
                window.alert("Wrong password Entered");
                document.getElementById('password').value="";
            }
        }else {
            window.alert("Username Wrong");
            document.getElementById('userName').value="";
            document.getElementById('password').value="";
        }
    },

    register(userName, password, emailId, gender, DOB, rePassword) {
        var userObj;

        if (!(userName && password && emailId && gender && DOB && rePassword)) {
            this.err();
            return;
        }

        if (password == rePassword) {
            if (this.usersList.find(user => user.username == userName)) {
                window.alert('user with this userName already exist please choose something else');
            } else {
                this.usersList.push(userObj = new user(userName, password, emailId, gender, DOB));
                window.alert('you have successfully registered');
                if (window.localStorage) {
                    // console.log(userObj.username + " : " + JSON.stringify(userObj));
                    window.localStorage.setItem(userObj.username, JSON.stringify(userObj));
                }
                this.resetRegisterBox();

            }
        } else {
            window.alert('password and repassword does not match');
            document.getElementById('reg_password').value = "";
            document.getElementById('reType_password').value = "";
        }
    },


    err() {
        window.alert('All Fields are Necessary');
    },

    //reset all Values Of registartion box
    resetRegisterBox() {
        document.getElementById('regUserName').value = "";
        document.getElementById('reg_password').value = "";
        document.getElementById('regEmail').value = "";
        document.querySelector('input[name="gender"]:checked').checked = false;
        document.getElementById('DOB').value = "";
        document.getElementById('reType_password').value = "";
    },

    //retrieve all Registered User Data From LocalStorage
    getAllRegisteredUser(){
        let i = window.localStorage.length;
        for(k in window.localStorage.valueOf()){
            if(i){
                i--;
                this.usersList.push(JSON.parse(window.localStorage.getItem(k)));
            }
        }
    }


}