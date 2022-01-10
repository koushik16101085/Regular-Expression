const formElm = document.querySelector('#form');
const nameElm = document.querySelector('#name');
const userNameElm = document.querySelector('#username');
const emailELm= document.querySelector('#email');
const passwordElm = document.querySelector('#password');
const confirmPasswordElm = document.querySelector('#confirmpassword');
//const phoneNumberElm = document.getElementById('phoneNumber')



//Show Error Message;
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success outline;
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}





//Email Validation;
function checkEmailElm (input){
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(input.value.trim())){
        showSuccess(input);
    }
    else{
        showError(input,"Email is not valid");
    }
}
   
// check name validation;
function checkNameLength (input){
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    if(nameRegex.test(input.value.trim())){
        showSuccess(input);  
    }
    else{
        showError(input,"Name is not valid");
    }
}


// function checkPhoneNumber(input){
  
//     const mobilePattern = /^[789][0-9]{9}$/;
//     if(!mobilePattern.test(input.value)){
//         showSuccess(input);

//     }else{
//         showError(input,"phone Number is not valid");
//     }

    //console.log(phoneNumberRegex.test());
    // if(PhoneNumberRegex.test === ""){
    //     showError(phoneNumberElm,"User name cannot be blank");
    //  }
    //  else if(!PhoneNumberRegex){
    //     showError(phoneNumberElm,"Your phone number format +8801XXXXXXXX");
    //  }
    //  else{
    //      showSuccess(input);
    //  }
   
    
    
//}


// check required;
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input, `${getFieldName(input)} is required`);
        }
      
        else{
            showSuccess(input);
        }

        
        
    })
}



// Check input length;
function checkLength(input, min, max){
    if(input.value.length <min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
 
    }
    else if(input.value.length > max){
       showError(input, ` ${getFieldName(input)} must be less than ${max} characters`);     
    }
    else{
        showSuccess(input);
    }
}
// Get field Name;
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check Password Match;
function checkPasswordMatch(password1 , password2){
    if(password1.value !== password2.value){
        showError(password1,"Password do not match");
        showError(password2,"Password do not match");
    }
     
}
// Event listener;
form.addEventListener('submit',function(e){
    e.preventDefault();
    //        showError(nameElm,'Name Is Required');
//    }
//    else{
//        showSuccess(nameElm);
//    }
     
    checkRequired([nameElm,userNameElm,email,passwordElm,confirmPasswordElm]);
    checkNameLength(nameElm, 8, 25);
    checkLength(userNameElm, 3, 15);
    checkLength(passwordElm , 6, 25);
    checkEmailElm(email);
    checkPasswordMatch(passwordElm , confirmPasswordElm);
    //validation();
    // checkPhoneNumber(phoneNumberElm);
    // if(phoneNumberElm === ""){
    //     showError(phoneNumberElm,"User name cannot be blank.");
    // }else if(!checkPhoneNumber(phoneValue)){
    //     showError(phoneNumberElm,"your phone number formate +8801xxxxxxxxx.")
    // }else{
    //     showSuccess(phoneNumberElm);
    // }
})