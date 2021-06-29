function validateform(){
var name=document.myform.Username.value;
var password=document.myform.password.value;

if (name==null || name=="" ){
alert("Username can't be blank");
return false;
}

else if(password==null || password==""){
alert("Password cannot be empty!");
return false;
}

}


/*
else if(name != "admin"){
alert("Invalid Username");
return false;
}

else if(password != "password"){
alert("Invalid Password");
return false;
}
*/
