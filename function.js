function namefun(){
    let name=document.getElementById('name').value;
    let namepatt=/^[A-Za-z .]{3,30}$/;
    if(namepatt.test(name.trim())){
        document.getElementById('name').style='border:2px solid green';
        document.getElementById('nameErr').innerText='';
        return true;
        
    }else{
        document.getElementById('name').style='border:2px solid red';
        document.getElementById('nameErr').innerText='Name must be (3-30) character but not a number and symbol.'
        return false;
    }
}
function emailfun(){
    let email=document.getElementById('email').value;
    let emailpatt=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailpatt.test(email)){
        document.getElementById('email').style='border:2px solid green';
        document.getElementById('emailErr').innerText='';
        return true;
    }else{
        document.getElementById('email').style='border:2px solid red';
        document.getElementById('emailErr').innerText='Email formate invalid';
        return false;
    }
}
function phonefun(){
    let phone=document.getElementById('phone').value;
    let phonepatt=/^[6789]{1}[0-9]{9}$/;
    if(phonepatt.test(phone)){
        document.getElementById('phone').style='border:2px solid green';
        document.getElementById('phoneErr').innerText='';
        return true;
    }else{
        document.getElementById('phone').style='border:2px solid red';
        document.getElementById('phoneErr').innerText='Phone no. must be 10 digits';
        return false;
    }
}
function passwordfun(){
    let password=document.getElementById('password').value;
    let passwordpatt=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    if(passwordpatt.test(password)){
        document.getElementById('password').style='border:2px solid green';
        document.getElementById('passwordErr').innerText='';  
        return true; 
    }else{
        document.getElementById('password').style='border:2px solid red';
        document.getElementById('passwordErr').innerText='Password must be eight characters including one uppercase letter, one special character and alphanumeric characters';
        return false;
    }
}
function cpasswordfun(){
    let ppassword=document.getElementById('password').value;
    let cpassword=document.getElementById('cpassword').value;
    if(cpassword==ppassword){
        document.getElementById('cpassword').style='border:2px solid green';
        document.getElementById('cpasswordErr').innerText=''; 
        return true;  
    }else{
        document.getElementById('cpassword').style='border:2px solid red';
        document.getElementById('cpasswordErr').innerText='Password not match';
        return false;
    }
}
function myform(){
    if(namefun() && emailfun() && phonefun() && passwordfun() && cpasswordfun()){
        swal({
            title: "Submit Successfully",
            icon: "success",
          });
          document.getElementById('name').value='';
          document.getElementById('email').value='';
          document.getElementById('phone').value='';
          document.getElementById('password').value='';
          document.getElementById('cpassword').value='';
          return true;
    }else{
        swal({
            title: "Please fill correct",
            icon: "error",
          })
          return false;
    }

}
