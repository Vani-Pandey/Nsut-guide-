function goLogin(){
    const container = document.getElementById("container");
    container.classList.add("login-mode");

    setTimeout(()=>{
        document.getElementById("signupForm").style.display="none";
        document.getElementById("loginForm").style.display="block";
    },650);
}

function goSignup(){
    const container = document.getElementById("container");
    container.classList.remove("login-mode");

    setTimeout(()=>{
        document.getElementById("loginForm").style.display="none";
        document.getElementById("signupForm").style.display="block";
    },650);
}