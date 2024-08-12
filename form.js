// All The Flags for Submitting The Form
let isNameValidate=false,isEmailValidate=false,isPasswordValidate=false,isConfirmPasswordValidate=false,isGenderValidate=false,isCourseValidate=false,isCountryValidate=false,isAboutValidate=false,isPasswordsMatching=false;

// Adding EventListner to observe user response on InputField
function addEventListnerOnInputField(field,errMsg,altErrMsg,regexPattern,flag){
    field.oninput=function(){
        flag=checkInputFieldValidation(field,errMsg,altErrMsg,regexPattern,flag)
    }
}

// Styling Input Field When get Error
function styleInputFieldGettingError(field){
    
    field.classList.add("border-danger")
    field.classList.remove("border-success")
    field.parentElement.querySelector(".fa-circle-exclamation").classList.add("error")
    field.parentElement.querySelector(".fa-square-check").classList.remove("success")
}

// Setting Error Message of Input Field
function setErrMsgofInputField(field,errMsg,altErrMsg,altFlag,regexPattern,flag){
    styleInputFieldGettingError(field)
    const msgEle=field.parentElement.querySelector("h6")
    if(altFlag){
        msgEle.innerText=altErrMsg;
    }else{
        msgEle.innerText=errMsg;
    }

    // Add EventListner to observe user response on InputField
    addEventListnerOnInputField(field,errMsg,altErrMsg,regexPattern,flag)
       
}

// Setting Success Message of Input Field 
function setSuccessMsgofInputField(field,msg,errMsg,altErrMsg,regexPattern,flag){
    const parent=field.parentElement
    field.classList.remove("border-danger")
    field.classList.add("border-success")
    parent.querySelector(".fa-circle-exclamation").classList.remove("error")
    parent.querySelector(".fa-square-check").classList.add("success")
    let msgEle=parent.querySelector("h6")
    msgEle.innerText=msg

    // Add EventListner to observe user response on InputField
    addEventListnerOnInputField(field,errMsg,altErrMsg,regexPattern,flag)
}

// Checking InputField Validation
function checkInputFieldValidation(field,ErrMsg,AltErrMsg,RegexPattern,flag){
    if(field.value===""){
        // console.log("no1")        
        setErrMsgofInputField(field,ErrMsg,AltErrMsg,false,RegexPattern,flag)
        return false;
    }
    else if(RegexPattern.test(field.value)){
        // console.log("yes")
                
        setSuccessMsgofInputField(field,"",ErrMsg,AltErrMsg,RegexPattern,flag)    
        return true;
    }else{
        
        setErrMsgofInputField(field,ErrMsg,AltErrMsg,true,RegexPattern,flag)
        return false;
    }
}

//Add Event Lisener to Observe User Response on Radio Or CheckBox Button
function addEventListnerOnRadioOrCheckboxBtns(radioOrCheckBoxBtns,errMsg,flag){
    for(let radioOrCheckBoxBtn of radioOrCheckBoxBtns){
        radioOrCheckBoxBtn.onchange=function(){
            flag=checkingRadioOrCheckboxBtnValidation(radioOrCheckBoxBtns,errMsg,flag)
        }
    }
}

// Setting Error message of Radio or Checkbox Button
function setErrMsgOfRadioOrCheckboxBtn(radioOrCheckBoxBtns,errMsg,flag){
    const parent=radioOrCheckBoxBtns[0].parentElement
    for(let radioOrCheckedButton of radioOrCheckBoxBtns){
        // console.log(radioOrCheckedButton)
        radioOrCheckedButton.classList.add("border-danger")
        radioOrCheckedButton.nextElementSibling.classList.add("text-danger")
        radioOrCheckedButton.classList.remove("border-success")
        radioOrCheckedButton.nextElementSibling.classList.remove("text-success")
    }
    let msgEle=parent.nextElementSibling
    msgEle.innerText=errMsg   

    //Add Event Lisener to Observe User Response on it
    addEventListnerOnRadioOrCheckboxBtns(radioOrCheckBoxBtns,errMsg,flag)
        
    
}

// Setting Success message of Radio or Checkbox Button
function setSuccessMsgOfRadioOrCheckboxBtn(radioOrCheckBoxBtns,msg,errMsg,flag){
    const parent=radioOrCheckBoxBtns[0].parentElement
    for(let radioOrCheckBoxBtn of radioOrCheckBoxBtns){
        // console.log(radioOrCheckBoxBtn)
        radioOrCheckBoxBtn.classList.remove("border-danger")
        radioOrCheckBoxBtn.classList.add("border-success")
        radioOrCheckBoxBtn.nextElementSibling.classList.add("text-success")
        radioOrCheckBoxBtn.nextElementSibling.classList.remove("text-danger")
    }
    let msgEle=parent.nextElementSibling
    msgEle.innerText=msg

    // If It Is CheckBox then Add Event Lisener to Observe User Response on it
    if(radioOrCheckBoxBtns[0].type==="checkbox"){
        addEventListnerOnRadioOrCheckboxBtns(radioOrCheckBoxBtns,errMsg,flag)
    }   
}

// Checking Radio or CheckBox Buttons validation
function checkingRadioOrCheckboxBtnValidation(radioOrCheckBoxBtns,errMsg,flag){
    let isChecked=false;
    for(let radioOrCheckBoxBtn of radioOrCheckBoxBtns){
        if(radioOrCheckBoxBtn.checked){
           isChecked=true;
            break;                      
        }
    }
     
    if(isChecked){
        setSuccessMsgOfRadioOrCheckboxBtn(radioOrCheckBoxBtns,"",errMsg,flag);
        return true;      
    }else{
        setErrMsgOfRadioOrCheckboxBtn(radioOrCheckBoxBtns,errMsg,flag)
        return false;
    }   
}

// Add Event Listener to Ovserve User Response on Datalist Input Field
function addEventListenerOnDataListInputField(dataListInputField,errMsg,flag){
    dataListInputField.oninput=function(){
        flga=checkingDataListValidation(dataListInputField,errMsg,flag)
    }
}

// Setting Error Message of DataList
function setErrMsgOfDataList(dataListInputField,errMsg,flag){
    const errEle=dataListInputField.parentElement.querySelector("h6")
    dataListInputField.classList.add("border-danger")
    dataListInputField.classList.remove("border-success")
    dataListInputField.parentElement.querySelector(".fa-circle-exclamation").classList.add("error")
    dataListInputField.parentElement.querySelector(".fa-square-check").classList.remove("success")
    errEle.innerText=errMsg;

    // Add Event Listener to Ovserve User Response on Datalist Input Field
    addEventListenerOnDataListInputField(dataListInputField,errMsg,flag)
    
}

// Setting Success of DataList
function setSuccessMsgOfDataList(dataListInputField,msg,errMsg,flag){
    dataListInputField.classList.remove("border-danger")
    dataListInputField.classList.add("border-success")
    dataListInputField.parentElement.querySelector(".fa-circle-exclamation").classList.remove("error")
    dataListInputField.parentElement.querySelector(".fa-square-check").classList.add("success")
    const errEle=dataListInputField.parentElement.querySelector("h6")
    errEle.innerText=msg;

    // Add Event Listener to Ovserve User Response on Datalist Input Field
    addEventListenerOnDataListInputField(dataListInputField,errMsg,flag)
}

// Checkng DataList validation
function checkingDataListValidation(dataListInputField,errMsg,flag){
     if(dataListInputField.value.trim()===""){
        setErrMsgOfDataList(dataListInputField,errMsg,flag)
        return false;
    }else{
        setSuccessMsgOfDataList(dataListInputField,"",errMsg,flag)
        return true
    }
}

// Adding Event Listner to Observe User Response on TextArea
function addEventListenerOnTextArea(textArea,errMsg,altErrMsg,size,flag){
    textArea.oninput=function(){
        flag=checkingTextAreaValidation(textArea,errMsg,altErrMsg,size,flag)
    }
}

// Setting Error Message of TextArea
function setErrMsgOfTextArea(textArea,errMsg,altErrMsg,altFlag,size,flag){
    const errEle=textArea.parentElement.querySelector("h6")
    textArea.classList.add("border-danger")
    textArea.classList.remove("border-success")
    textArea.parentElement.querySelector(".fa-circle-exclamation").classList.add("error")
    textArea.parentElement.querySelector(".fa-square-check").classList.remove("success")
    
    if(altFlag){
        errEle.innerText=altErrMsg;
    }else{
        errEle.innerText=errMsg;
    }
    
    // Adding Event Listner to Observe User Response on TextArea
    addEventListenerOnTextArea(textArea,errMsg,altErrMsg,size,flag)
}

// Setting Success Message Of TextArea
function setSuccessMsgOfTextArea(textArea,msg,errMsg,altErrMsg,size,flag){
    const errEle=textArea.parentElement.querySelector("h6")
    textArea.classList.remove("border-danger")
    textArea.classList.add("border-success")
    textArea.parentElement.querySelector(".fa-circle-exclamation").classList.remove("error")
    textArea.parentElement.querySelector(".fa-square-check").classList.add("success")
    errEle.innerText=msg;

    // Adding Event Listner to Observe User Response on TextArea
    addEventListenerOnTextArea(textArea,errMsg,altErrMsg,size,flag)

}

// Checkng TextArea validation
function checkingTextAreaValidation(textArea,errMsg,altErrMsg,size,flag){
    if(textArea.value.trim()===""){       
        setErrMsgOfTextArea(textArea,errMsg,altErrMsg,false,size,flag)
        return false;
    }else if(textArea.value.trim().split(/\s+/).length>=size){
             
        setSuccessMsgOfTextArea(textArea,"",errMsg,altErrMsg,size,flag)
        return true;
    }else{
        setErrMsgOfTextArea(textArea,errMsg,altErrMsg,true,size,flag)
        return false;
    }
}



// Validation
function validate(){
    // All Field And Buttons 
    const userNameField=document.getElementById("userNameField")
    const emailField=document.getElementById("emailField")
    const passwordField=document.getElementById("passwordField")
    const confirmPasswordField=document.getElementById("confirmPasswordField")
    const countryField=document.getElementById("countryField")
    const aboutField=document.getElementById("aboutField")
    const genderBtnList=document.getElementById("formId").gender;
    const courseBtnList=document.getElementById("formId").course;


    // Error Messeges
    const userErrMsg="**Plz Enter Your UserName"
    const userAltErrMsg="**InValid UserName, Start with Uppercase Letter(must) and Length[3-20]"
    const emailErrMsg="**Plz Enter Your Email Address"
    const emailAltErrMsg="**InValid Email Address, See Details..."
    const passwordErrMsg="**Plz Enter Your Password"
    const passwordAltErrMsg="**Password Is Not Strong, See Details..."
    const conPasswordErrMsg="**Plz Enter Your Confirm Password"
    const aboutErrMsg="**Plz Describe Yourself"
    const aboutAltErrMsg="Not Enough, Atleast 30 Words"

    // Regex Pattern
    const usernameRegexPattern=/^[A-Z][\w -]{2,19}$/;
    const emailRegexPattern=/^[a-zA-Z0-9]+([.+][a-zA-Z0-9]+)*@[a-zA-Z0-9]{2,}([.][a-zA-Z0-9]+[-]*[a-zA-Z0-9]+)*([.][a-zA-Z]{2,})$/;
    const passwordRegexPattern=/^(?=.*[!@#$%?&*])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{5,20}$/;


    // User Name Validation
    isNameValidate=checkInputFieldValidation(userNameField,userErrMsg,userAltErrMsg,usernameRegexPattern,isNameValidate)
    
    // Email Validation
    isEmailValidate=checkInputFieldValidation(emailField,emailErrMsg,emailAltErrMsg,emailRegexPattern,isEmailValidate)

    // Password Validation
    isPasswordValidate=checkInputFieldValidation(passwordField,passwordErrMsg,passwordAltErrMsg,passwordRegexPattern,isPasswordValidate)

    // Confirm Password Validation
    isConfirmPasswordValidate=checkInputFieldValidation(confirmPasswordField,conPasswordErrMsg,passwordAltErrMsg,passwordRegexPattern,isConfirmPasswordValidate)
    
    // Gender Validation
    isGenderValidate=checkingRadioOrCheckboxBtnValidation(genderBtnList,"**Plz Choose Your Gender",isGenderValidate)

    // // Course Validation
    isCourseValidate=checkingRadioOrCheckboxBtnValidation(courseBtnList,"**Plz Choose Your Course",isCourseValidate)


    // // Country Validation
    isCountryValidate=checkingDataListValidation(countryField,"**Plz Choose Your Country",isCountryValidate)

   

    // // About Validation
    const aboutSize=30
    isAboutValidate=checkingTextAreaValidation(aboutField,aboutErrMsg,aboutAltErrMsg,aboutSize,isAboutValidate)
    

    // Paswords Matching
    if(isPasswordValidate && isConfirmPasswordValidate){
        if(passwordField.value===confirmPasswordField.value){           
            isPasswordsMatching= true;           
        }else{
            styleInputFieldGettingError(confirmPasswordField)
            
            document.getElementById("confirmErrMsg").innerText="**Passwords Are Not Matching";

            // EventListner to observe user response on InputField
            addEventListnerOnInputField(confirmPasswordField,conPasswordErrMsg,passwordAltErrMsg,passwordRegexPattern,isConfirmPasswordValidate)
        }
    }

    console.log("Name: "+isNameValidate)
    console.log("Email: "+isEmailValidate)
    console.log("Password: "+isPasswordValidate)
    console.log("ConPasseord: "+isConfirmPasswordValidate)
    console.log("Gender: "+isGenderValidate)
    console.log("Course: "+isCourseValidate)
    console.log("Country :"+isCountryValidate)
    console.log("About: "+isAboutValidate)
    console.log("passwordsMatching "+isPasswordsMatching)
       
    console.log("last Check")
    console.log(isNameValidate && isNameValidate && isPasswordValidate && isConfirmPasswordValidate && isGenderValidate && isCourseValidate && isCountryValidate && isAboutValidate && isPasswordsMatching)

    if(isNameValidate && isNameValidate && isPasswordValidate && isConfirmPasswordValidate && isGenderValidate && isCourseValidate && isCountryValidate && isAboutValidate && isPasswordsMatching){
        console.log("done")
        return true; 

    }else{
        console.log("Not Done")
        return false;
    }
   
}

// Form Submit Event
document.getElementById("subBtn").onclick=(event)=>{
    // Returning The Result Of Validation
    // event.preventDefault()
    return validate();
}


// Password Toggle
const toogleCheckbox=document.getElementById("toggleCheckbox")
toogleCheckbox.onchange=function(){
    if(toogleCheckbox.checked){
        passwordField.type="text";
        confirmPasswordField.type="text"
    }else{
        passwordField.type="password";
        confirmPasswordField.type="password"
    }
}


