// Getting the Reference Of the Error Message 
const userErrMes=document.getElementById("userErr")
const passErrMes=document.getElementById("passErr")
const conPassErrMes=document.getElementById("conPassErr")
const matchErr=document.getElementById("matchErr")


// Decalring Variables To check the Validation State
let userErr=false,passErr=false,conPassErr=false,emptyFlag=true;

// Adding Validation of Input Length

function ValditionOfInputLegnth(event){
    // getting the reference of  Targetted Input Field
    const targetInputField=event.target;

    // length of the targtted field value
    const targetInputFieldLength=targetInputField.value.length
    
    // Username Legth Validation
    if(targetInputField.name==="username"){
        
        if(targetInputFieldLength<3 || targetInputFieldLength>20){
            userErrMes.innerText="**UserName should be between 3 to 20 characters"
            userErr=true;
        }else{
            userErrMes.innerText=""
            userErr=false;
        }
    }
    
    // ConPassword And Password length Validation
    else{
        let err;
        if(targetInputFieldLength<5 || targetInputFieldLength>20){
            targetInputField.nextElementSibling.innerText="**Password should be between 5 and 20"
            err=true;
    
        }else{
            targetInputField.nextElementSibling.innerText=""
            err=false;
        }

        if(targetInputField.name==="password"){
            passErr=err;
        }else{
            conPassErr=err;
        }
        
    }

}





// SUbmit Button Validation
document.getElementById("subBtn").onclick=()=>{
    if(userErrMes.previousElementSibling.value===""){
        userErrMes.innerText="**Plz Enter UserName"
        emptyFlag=true
    }else{
        emptyFlag=false;
    }
    if(passErrMes.previousElementSibling.value===""){
        passErrMes.innerText="**Plz Enter Password"
        emptyFlag=true
    }else{
        emptyFlag=false;
    }
    if(conPassErrMes.previousElementSibling.value===""){
        conPassErrMes.innerText="**Plz Enter Confirm Password"
        emptyFlag=true
    }else{
        emptyFlag=false;
    }

    
    

    if(userErr || passErr || conPassErr || emptyFlag){
        matchErr.innerText=""
        return false;
    }else{
        if(conPassErrMes.previousElementSibling.value!==passErrMes.previousElementSibling.value){
            matchErr.innerText="**Passwords Are Not Matching..."
            return false;
        }
    }
   
}

       

      
        

