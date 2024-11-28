const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit', (e) =>{
    if(!validateInputs()){
        e.preventDefault();

    }

})

function validateInputs(){
    const Value1 = username.value.trim()
    const Value2 = email.value.trim();
    const Value3 = password.value.trim();
    const Value4 = cpassword.value.trim();
    let success = true
    if(Value1 === ''){
        success = false;
        setError(username,'The Username is required')
    }
    else{
        setSuccess(username)
    }

    if(Value2 === ''){
        success = false;
        setError(email,'The Email is required')
    }
    else if(!validateEmail(Value2)){
        success = false;
        setError(email,'Please Enter a validate email')

    }
    else{
        setSuccess(email)
    }

    if(Value3 === ''){
        success = false;
        setError(password,'The Password is required')
    }
    else if(Value3.length < 8){
        success = false;
        setError(password,'Please Enter the validate password')
    }else{
        setSuccess(password)
    } 
    
    if(Value4 === ''){
        success = false;
        setError(cpassword,'The Confirm Password is required')
    }
    else if(Value4 !== Value3){
        success = false;
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }
    return success;
}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElemnt = inputGroup.querySelector('.error')

    errorElemnt.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')


}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElemnt = inputGroup.querySelector('.error')

    errorElemnt.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')


}
const validateEmail = (email)=>{
    return String(email)
    .toLowerCase()
    .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

);
};




