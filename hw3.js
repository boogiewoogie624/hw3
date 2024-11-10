 /*
 Name: Hailey Martinez
 Date Created: 10/12/2024
 Purpose: Homework 2 JS
 Description: This page will be used as a reference in a new patient registration HTML form. 
 */

//dynamic date
const d = new Date(); 
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//range slider
let slider = document.getElementById("range-slider")
    let output = document.getElementById("range-slider")
    output.innerHTML = slider.value;
    slider.oninput = function () {output.innerHTML = this.value;};

//dob validation
function validateDob()
    {
        dob=document.getElementById("dob");
        let date = new Date(dob.value);
        //let maxDate = new Date().getFullYear(new Date()-120);
        let maxDate = new Date();
            maxDate.setFullYear(maxDate.getFullYear() - 120);  // Corrected to subtract 120 years


        if (date > new Date()) 
        {
            document.getElementById("dob-error").innerHTML = "Date cannot be in the future."
            dob.value="";
            return false;
        }
        
        else if(date < new Date(maxDate))
        {
            document.getElementById("dob-error").innerHTML = "Date cannot be more than 120 years ago."
            dob.value="";
            return false;
        }

        else
        {
            document.getElementById("dob-error").innerHTML = "";
            return true;
        }
    }

//ssn validation
function validateSsn()
{
    const ssn = document.getElementById("ssn").value;
    //regex for ssn pattern
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn))
    {
        document.getElementById("ssn-error").innerHTML="Please enter a valid Social Security Number.";
        return false;
    }

    else
    {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
        
}

//address 1 validation
function validateAddy1()
{
    var addy1 = document.getElementById("addy1").value;
    console.log(addy1);
    console.log(addy1.length);
    
    if (addy1.length < 2)
    {
        document.getElementById("addy1-error").innerHTML = "Please enter address";
        return false;
    }

    else
    {
        document.getElementById("addy1-error").innerHTML = "";
        return true;
    }
}

//zipcode validation
function validateZip()
{
    const zipInput = document.getElementById("zip");
    let zip= zipInput.value.replace(/[^\d-]/g,"");

    if(!zip)
    {
        document.getElementById("zip-error").innerHTML = "Zipcode cannot be left blank.";
        return false;
    }

    if(zip.length > 5)
    {
        zip = zip.slice(0,5); //removes all digits after first 5//
    }
    zipInput.value = zip;
    document.getElementById("zip-error").innerHTML = "";
    return true;
}

//email validation
function validateEmail()
{
    email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regex pattern for email

    if (email=="")
    {
        document.getElementById("email-error").innerHTML= "Email cannot be empty.";
        return false;
    }
    
    else if(!email.match(emailR))
    {
        document.getElementById("email-error").innerHTML= "Please enter a valid email address.";
        return false;
    }

    else
    {
        document.getElementById("email-error").innerHTML= "";
        return true;
    }
}

//phone number validation
function validatePhone()
{
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value.replace(/\D/g, "");

    if (phone.length == 0)
    {
        document.getElementById("phone-error").innerHTML = "Phone number cannot be left empty.";
        return false;
    }

    const formattedPhone = phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6,10);
    phoneInput.value = formattedPhone;
    document.getElementById("phone-error").innerHTML = "";
    return true;
}

//username validation
function validateUsername()
{
    username = document.getElementById("username").value;
    //converts user to lowercase
    username = username.toLowerCase();

    //display user in lowercase char
    document.getElementById("username").value = username;

    if (username.length == 0)
    {
        document.getElementById("username-error").innerHTML = "Username field cannot be empty.";
        return false;
    }

    //checks that username does not start with a number
    if (!isNaN(username.charAt(0)))
    {
        document.getElementById("username-error").innerHTML = "Please do not start username with a number.";
        return false;
    }

    //regex pattern to format username
    let regex = /^[a-zA-Z0-9_]+$/;

    if (!regex.test(username))
    {
        document.getElementById("username-error").innerHTML = "Username can only contain letters, nubers, or underscores.";
        return false;
    }

    else if (username.length <5)
    {
      document.getElementById("username-error").innerHTML = "Username cannot be less than 5 characters.";
        return false;  
    }

    else if (username.length > 30)
    {
        document.getElementById("username-error").innerHTML = "Username cannot exceed 30 characters.";
        return false;
    }

    else 
    {
    document.getElementById("username-error").innerHTML = "";
    return true;
    }
}

//password validation
function validatePass()
{
    const pass = document.getElementById("pass").value;
    const username = document.getElementById("user").value;

    //sets up and initializes array
    const errorMessage = [];

    //check for lowercase letters
    if(!pass.match(/[a-z]/))
    {
        errorMessage.push("Enter at least one lowercase letter.");
    }
    //check for uppercase letters
    if(!pass.match(/[A-Z]/))
    {
        errorMessage.push("Enter at least one uppercase letter.");
    }
    //check for numbers
    if(!pass.match(/[0-9]/))
    {
        errorMessage.push("Enter at least one number.");
    }
    //check for special characters
    if(!pass.match(/[!\@#\$%&*\-_\\.+\(\)]/))
    {
        errorMessage.push("Enter at least one special character.");
    }
    //check if username was used for password
    if(pass == username || pass.includes(username))
    {
        errorMessage.push("Password cannot contain username");
    }

    //displays error messages if there are any errors
    const errorContainer = document.querySelector(".pass-message");
    errorContainer.innerHTML = errorMessage
        .map(message => `<span>${message}</span><br/>`)  // Corrected map function
        .join("");

    
}

//re-enter password validation
function confirmPassword()
{
    pass1 = document.getElementById("pass").value;
    pass2 = document.getElementById("reenter").value;

    if(pass1 != pass2)
    {
        document.getElementById("reenter-error").innerHTML = "Passwords do not match.";
        return false;
    }
    else
    {
        document.getElementById("reenter-error").innerHTML = "Passwords match.";
        return true;
    }
}

//the following will be the portion for the review button
function showInput()
{
    var formcontent = document.getElementById("signup");
    var formoutput;
    var i;
    formoutput = "<table class='ouput'><th colspan ='3'>Your information:</th>";
    for (i = 0; i < formcontent.length; i++)
    {
        if (formcontent.elements[i].value != "")
        {
            let datatype = formcontent.elements[i].type;
            switch (datatype)
            {
                case "checkbox":
                    if (formcontent.elements[i].checked)
                    {
                        formoutput = formoutput + "<tr> <td align= 'right'>" + formcontent.elements[i].name + "</td>";//what is happening here--fixed, make sure to check difference between [] and {}
                        formoutput = formoutput + "<td class='outputdata'>&#x2713;</td></tr>"; //what is happening here
                    }
                    break;
                /*case "radio":
                    if (formcontent.elements[i].checked)
                    {
                        formoutput = formoutput + "<tr> <td align='right'" + formcontent.elements[i].name + "</td>";
                        formoutput = "<td class='ouputdata'>" + formcontent.elements[i].value + "</td></tr>";
                    }*/
                case "radio":
                    if (formcontent.elements[i].checked) 
                    {
                        formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                        formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                    }
    break;
                case "button":
                case "submit":
                case "reset":
                    break;
                default:
                    formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                    formoutput = formoutput + "<td class='ouputdata'>" + formcontent.elements[i].value + "</td>";

            }
        }
    }

    if (formoutput.length > 0)
    {
        formoutput = formoutput + "</table>";
        document.getElementById("showInput").innerHTML = formoutput;
    }
}

//remove user input
function removeReview()
{
    document.getElementById("showInput").innerHTML = "";
}

