let hideimage=document.getElementById("hide");
let password=document.getElementById("pass");
hideimage.addEventListener("click",function(){
    if(password.type=="password")
    {
        password.type="text";
        hideimage.src="visible.png";
    }
    else{
        password.type="password";
        hideimage.src="hide.png";
    }
});