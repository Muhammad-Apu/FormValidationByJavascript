// Getting the Reference Of the Error Message Content
const userErrMes=document.getElementById("userErr")
const passErrMes=document.getElementById("passErr")
const conPassErrMes=document.getElementById("conPassErr")
const emailErrMes=document.getElementById("emailErr")
const aboutErrMes=document.getElementById("aboutErr")
const countryErrMsg=document.getElementById("countryErrMsg")
const deviceErrMsg=document.getElementById("deviceErr")
const genderErrMsg=document.getElementById("genderErrMsg")
const courseErrMsg=document.getElementById("courseErrMsg")






// Getting the reference of the input field
const userNameField=document.getElementById("userNameField")
const passwordField=document.getElementById("passwordField")
const conPasswordField=document.getElementById("conPasswordField")
const emailField=document.getElementById("emailField")
const aboutField=document.getElementById("aboutField")
const countryField=document.getElementById("countryField")
const deviceSelectField=document.getElementById("deviceSelectField")
const countryDataList=document.getElementById("countryDataList")

let genderField=document.forms.gender
let courseField=document.forms.course

// console.log(countryDataList.getElementsByTagName("option"))







// Decalring Variables To check the Validation State
let userErr=true,passErr=true,conPassErr=true,emailErr=true,aboutErr=true;

let nameEmpty=true, emailEmpty=true, passwordEmpty=true, conPasswordEmpty=true,aboutEmpty=true,countryEmpty=true,genderEmpty=true,deviceEmpty=true,courseEmpty=true;



// Validation Function for Input Field Value Pattern
function ValditionOfInputFieldValue(event){
    // getting the reference of  Targetted Input Field
    const targetInputField=event.target;

    
    
    // Username validation Using Regex
    if(targetInputField.name==="username"){
        if(/^[A-Z][\w -]{2,19}$/.test(targetInputField.value)){
            userErrMes.innerText=""
            userErr=false;
            // console.log(tooltipList[0])
            tooltipList[0].hide()
        }else{
            userErrMes.innerText="**Invalid UserName"
            userErr=true;  
            // tooltipList[0].show()        
        }
    }

    // Email Validation Using Regex
    else if(targetInputField.name==="email"){
        if(/^[a-zA-Z0-9]+([.+][a-zA-Z0-9]+)*@[a-zA-Z0-9]{2,}([.][a-zA-Z0-9]+[-]*[a-zA-Z0-9]+)*([.][a-zA-Z]{2,})$/.test(targetInputField.value)){
            emailErrMes.innerText=""
            emailErr=false;
            tooltipList[3].hide()
        }else{
            emailErrMes.innerText='**Invalid Email Address'
            emailErr=true;        
        }
    } 

    // About Validation using Javascript
    else if(targetInputField.name==="about"){
        if(targetInputField.value.trim().split(/\s+/).length>=30){
            aboutErrMes.innerText=""
            aboutErr=false;
            tooltipList[4].hide()
        }else{
            aboutErrMes.innerText="Not Enough"
            aboutErr=true;
        }
    }

    // ConPassword And Password Validation Using Regex
    else{

        if(targetInputField.name==="password"){
            passErr=checkingRegexOfPassword(targetInputField,passErrMes)
            if(!passErr){
                tooltipList[1].hide()
            }
        }else{
            conPassErr=checkingRegexOfPassword(targetInputField,conPassErrMes)
            if(!conPassErr){
                tooltipList[2].hide()
            }
        }        

    }

}


// Another function to Check Password Regex
function checkingRegexOfPassword(password,errMsg){
    if(/^(?=.*[!@#$%?&*])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{5,20}$/.test(password.value)){
        errMsg.innerText="";
        return false;
    }else{     
            errMsg.innerText="**Password is not Strong";
            return true;
    }
}





// Eye Toggle for Password Field
function toggleEye(event){
    let targettedEle=event.target
    let targettedInputField=targettedEle.parentElement.previousElementSibling;
    
    if(targettedInputField.type==="password"){
        targettedInputField.type="text";
        targettedEle.classList.remove("fa-eye-slash")
        targettedEle.classList.add("fa-eye")
    }else{
        targettedInputField.type="password";
        targettedEle.classList.remove("fa-eye")
        targettedEle.classList.add("fa-eye-slash")
    }

}





// SUbmit Button Validation
document.getElementById("subBtn").onclick=()=>{

    // userName empty or not
    if(userNameField.value===""){
        userErrMes.innerText="**Plz Enter UserName"
        nameEmpty=true;
    }else{
        nameEmpty=false;
    }

    // Password Field Empty or not
    if(passwordField.value===""){
        passErrMes.innerText="**Plz Enter Password"
        passwordEmpty=true
    }else{
        passwordEmpty=false;
    }

    // Confirm Empty or not
    if(conPasswordField.value===""){
        conPassErrMes.innerText="**Plz Enter Confirm Password"
        conPasswordEmpty=true;
    }else{
        conPasswordEmpty=false;
    }

    // Email empty or not
    if(emailField.value===""){
        emailErrMes.innerText="**Plz Enter Email Address"
        emailEmpty=true;
    }else{
        emailEmpty=false;
    }

    // about empty or not
    if(aboutField.value===""){
        aboutErrMes.innerText="**Plz write about yourself"
        aboutEmpty=true
    }else{
        aboutEmpty=false;
    }

    // datalist countryField empty or not
    if(countryField.value===""){
        countryErrMsg.innerText="**Plz Enter Your Country"
        countryEmpty=true;
    }else{
        countryErrMsg.innerText=""
        countryEmpty=false;
    }

    // device selected field empty or not

    if(deviceSelectField.value==""){
        deviceErrMsg.innerText="** Please Choose Your Device"
        ;
        deviceEmpty=true;
    }else{
        deviceErrMsg.innerText=""
        deviceEmpty=false;
    }


    // console.log(genderField)
    let genderFlag=false;
    for(let gender of genderField){
        
        if(gender.checked===true){
            genderFlag=true;
            break;
        }
    }

    if(genderFlag){
        genderErrMsg.innerText=""
        genderEmpty=false;
    }else{
        genderErrMsg.innerText="**Please Choose Your Gender"
        ;
        genderEmpty=true
    }

    // Course Field
    
    let courseFlag=false;

    for(let course of courseField){
        
        if(course.checked===true){
            courseFlag=true;
            break;
        }
    }

    if(courseFlag){
        courseErrMsg.innerText=""
        courseEmpty=false;
    }else{
        courseErrMsg.innerText="**Please Choose Your Gender"
        ;
        courseEmpty=true
    }
    

    


    // if(userErr || passErr || conPassErr || emailErr || aboutErr || nameEmpty || emailEmpty || passwordEmpty || conPasswordEmpty || aboutEmpty || countryEmpty || genderEmpty || deviceEmpty || courseEmpty){
    //     console.log("i am here first")
    //     return false;
    // }else{
    //     if(passwordField.value!==conPasswordField.value){
    //         console.log("i am here second")
    //         conPassErrMes.innerText="**Passwords Are Not Matching..."
    //         return false;
    //     }
    // }

    return false;

    
}






// for the tooltips of boostrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// console.log(tooltipList)
