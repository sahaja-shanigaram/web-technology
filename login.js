function validations(){
    var email = document.getElementById("email").value;
    var pass  = document.getElementById("pass").value;
    var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]{2,8}).([a-zA-Z]{2,5})$/;
    if ( email ==  pass){
        alert(" Email address and password should not be the same....");
    }
    else if(regx.test(email)){
        return true;
    }
    else{
        alert("Invalid email");
    }
    
    
    
    
    
    
    
}