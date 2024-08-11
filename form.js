const userNameField=document.getElementById("userNameField")
const emailField=document.getElementById("emailField")
const passwordField=document.getElementById("passwordField")
const confirmPasswordField=document.getElementById("confirmPasswordField")
const countryField=document.getElementById("countryField")
const aboutField=document.getElementById("aboutField")
const genderFieldList=document.getElementById("formId").gender;
const courseFieldList=document.getElementById("formId").course;

// Error Messeges
const userErrMsg="**Plz Enter Your UserName"
const userAltErrMsg="**InValid UserName"
const emailErrMsg="**Plz Enter Your Email Address"
const emailAltErrMsg="**InValid Email Address"
const passwordErrMsg="**Plz Enter Your Password"
const passwordAltErrMsg="**Password Is Not Strong"
const conPasswordErrMsg="**Plz Enter Your Confirm Password"
const aboutErrMsg="**Plz Describe Yourself"
const aboutAltErrMsg="Not Enough, Atleast 30 Words"

// Form Submit Event
document.getElementById("subBtn").onclick=(event)=>{
    // Returning The Result Of Validation
    return validate();
}

function setErrMsgOfDataList(field,errMsg,flag){
    const errEle=field.parentElement.querySelector("h6")
    errEle.innerText=errMsg;
    countryField.oninput=function(){
        isCountryValidate=true;
        setSuccessMsgOfDataList(field,"")
    }
}

function setSuccessMsgOfDataList(field,msg){
    const errEle=field.parentElement.querySelector("h6")
    errEle.innerText=msg;
}


function setErrMsgofInputField(field,errMsg,altErrMsg,altFlag,flag,regexPattern){
    const msgEle=field.parentElement.querySelector("h6")
    if(altFlag){
        msgEle.innerText=altErrMsg;
    }else{
        msgEle.innerText=errMsg;
    }
    
    
    if(!flag){
        field.oninput=function(){
            // console.log(field.value.trim())
            // console.log(regexPattern)
            if(regexPattern.test(field.value.trim())){
                flag=true;
                
                setSuccessMsgofInputField(field,"")
            }else{
                
                setErrMsgofInputField(field,errMsg,altErrMsg,true,flag,regexPattern)
            }
        }
    }   
}

function setSuccessMsgofInputField(field,msg){
    const parent=field.parentElement
    let msgEle=parent.querySelector("h6")
    msgEle.innerText=msg
}


function setRadioCheckedSuccessMsg(radioORCheckedButtons,msg){
    const parent=radioORCheckedButtons[0].parentElement
    let msgEle=parent.nextElementSibling
    msgEle.innerText=msg
    
}

function setRadioCheckedErrMsg(radioORCheckedButtons,msg,flag){
    const parent=radioORCheckedButtons[0].parentElement
    let msgEle=parent.nextElementSibling
    msgEle.innerText=msg   

    function validateRadioORCheckedButtons(){
        // console.log("yes called")
        flag=true;
        setRadioCheckedSuccessMsg(radioORCheckedButtons,"")
    }

    for(let radioOrCheckedButton of radioORCheckedButtons){
        radioOrCheckedButton.addEventListener("change",validateRadioORCheckedButtons)
    }
}

function setErrMsgOfTextArea(textArea,errMsg,altErrMsg,altFlag,flag,size){
    const errEle=textArea.parentElement.querySelector("h6")
    if(altFlag){
        errEle.innerText=altErrMsg;
    }else{
        errEle.innerText=errMsg;
    }
    
    textArea.oninput=function(){
        if(textArea.value.trim().split(/\s+/).length>=size){
            flag=true;
            setSuccessMsgOfTextArea(textArea,"")
        }else{
            setErrMsgOfTextArea(textArea,errMsg,altErrMsg,true,flag,size)
        }
    }
}

function setSuccessMsgOfTextArea(textArea,msg){
    const errEle=textArea.parentElement.querySelector("h6")
    errEle.innerText=msg;
}


let isNameValidate=false,isEmailValidate=false,isPasswordValidate=false,isConfirmPasswordValidate=false,isGenderValidate=false,isCourseValidate=false,isCountryValidate=false,isAboutValidate=false;

function validate(){
    const usernameRegexPattern=/^[A-Z][\w -]{2,19}$/;
    const emailRegexPattern=/^[a-zA-Z0-9]+([.+][a-zA-Z0-9]+)*@[a-zA-Z0-9]{2,}([.][a-zA-Z0-9]+[-]*[a-zA-Z0-9]+)*([.][a-zA-Z]{2,})$/;
    const passwordRegexPattern=/^(?=.*[!@#$%?&*])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{5,20}$/;


    // User Name Validation
    if(userNameField.value===""){

        // console.log("no1")
        setErrMsgofInputField(userNameField,userErrMsg,userAltErrMsg,false,isNameValidate,usernameRegexPattern)
        
    }
    else if(usernameRegexPattern.test(userNameField.value)){
        // console.log("yes")
        isNameValidate=true;
        
        setSuccessMsgofInputField(userNameField,"")    
        
    }else{
        
        setErrMsgofInputField(userNameField,userErrMsg,userAltErrMsg,true,isNameValidate,usernameRegexPattern)
        
    }

    // Email validation

    if(emailField.value===""){
        // console.log("no1")

        setErrMsgofInputField(emailField,emailErrMsg,emailAltErrMsg,false,isEmailValidate,emailRegexPattern)
        
    }
    else if(emailRegexPattern.test(emailField.value)){
        // console.log("yes")
        isEmailValidate=true;
        
        setSuccessMsgofInputField(emailField,"")    
        
    }else{
        // console.log("no2")
        setErrMsgofInputField(emailField,emailErrMsg,emailAltErrMsg,true,isEmailValidate,emailRegexPattern)
        
    }

    // Password validation
    if(passwordField.value===""){
        // console.log("no1")
        setErrMsgofInputField(passwordField,passwordErrMsg,passwordAltErrMsg,false,isPasswordValidate,passwordRegexPattern)
        
    }
    else if(passwordRegexPattern.test(passwordField.value.trim())){
        // console.log("yes")
        isPasswordValidate=true;
        
        setSuccessMsgofInputField(passwordField,"")    
        
    }else{
        // console.log("no2")
        setErrMsgofInputField(passwordField,passwordErrMsg,passwordAltErrMsg,true,isPasswordValidate,passwordRegexPattern)
    
    }

    // Confirm Password validation
    if(confirmPasswordField.value===""){
        // console.log("no1")
        setErrMsgofInputField(confirmPasswordField,conPasswordErrMsg,passwordAltErrMsg,false,isConfirmPasswordValidate,passwordRegexPattern)
        
    }
    else if(passwordRegexPattern.test(confirmPasswordField.value)){
        // console.log("yes")
        isConfirmPasswordValidate=true;
        
        setSuccessMsgofInputField(confirmPasswordField,"")    
        
    }else{
        // console.log("no2")
        setErrMsgofInputField(confirmPasswordField,conPasswordErrMsg,passwordAltErrMsg,true,isConfirmPasswordValidate,passwordRegexPattern)
    
    }

    // Gender Validation
    for(let gender of genderFieldList){
        // console.log(gender.checked)
        if(gender.checked){
            isGenderValidate=true;
            break;            
        }
    }
    if(isGenderValidate){
        setRadioCheckedSuccessMsg(genderFieldList,"")
    }else{
        setRadioCheckedErrMsg(genderFieldList,"**Plz Choose Your Gender",isGenderValidate)
    }

    // Course Validation

    for(let course of courseFieldList){
        // console.log(course.checked)
        if(course.checked){
            isCourseValidate=true;
            break;            
        }
    }

    if(isCourseValidate){
        setRadioCheckedSuccessMsg(courseFieldList,"")
    }else{
        setRadioCheckedErrMsg(courseFieldList,"**Plz Choose Your Course",isCourseValidate)
    }

    // Country Validation

    if(countryField.value.trim()===""){
        setErrMsgOfDataList(countryField,"**Plz choose Your Country",isCountryValidate)
        
    }else{
        isCountryValidate=true;
        setSuccessMsgOfDataList(countryField,"")
    }

    // About Validation
    const aboutSize=30
    if(aboutField.value.trim()===""){
        
        setErrMsgOfTextArea(aboutField,aboutErrMsg,aboutAltErrMsg,false,isAboutValidate,aboutSize)
    }else if(aboutField.value.trim().split(/\s+/).length>=aboutSize){
        isAboutValidate=true;
        setSuccessMsgOfTextArea(aboutField,"")
    }else{
        setErrMsgOfTextArea(aboutField,aboutErrMsg,aboutAltErrMsg,true,isAboutValidate,aboutSize)
    }


    // console.log(isNameValidate)
    // console.log(isEmailValidate)
    // console.log(isPasswordValidate)
    // console.log(isConfirmPasswordValidate)
    // console.log(isGenderValidate)
    // console.log(isCourseValidate)
    // console.log(isCountryValidate)
    // console.log(isAboutValidate)

    if(isNameValidate,isEmailValidate,isPasswordValidate,isConfirmPasswordValidate,isGenderValidate,isCourseValidate,isCountryValidate,isAboutValidate){
        if(passwordField.value===confirmPasswordField.value){
            return true;
        }else{
            document.getElementById("confirmErrMsg").innerText="**Passwords Are Not Matching"
            return false;
        }
    }else{
        return false;
    }
   
}


