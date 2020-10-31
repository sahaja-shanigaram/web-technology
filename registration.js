function validations(){
    var email = document.getElementById("email").value;
    var pass1  = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var num = document.getElementById("num").value;
    var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]{2,8}).([a-zA-Z]{2,5})$/;
    
    if(regx.test(email))
    {
        if(pass1 == pass2){
            var regx = /^[6-9]\d{9}$/
            if(regx.test(num)){
                return true;
            }
            else{
                alert("invalid number");
            }
        }
        else{
            alert("password and confirmation password should be the same...");
        }
    }
    else{
        alert("invalid email");
    }
    

}