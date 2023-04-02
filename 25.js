function validateForm() {
    const name = document.forms[0].elements['name'].value;
    const email = document.forms[0].elements['email'].value;
    const password = document.forms[0].elements['password'].value;
    const cpassword=document.forms[0].elements['cpassword'].value;
    const phone=document.forms[0].elements['phone'].value;

    const nameRegExp= /^[a-zA-Z\s]{2,20}$/;
    const emailRegex= /^\w+@[a-zA-Z_0-9]+?\.[a-zA-Z]{2,}$/;
    const passwordRegex= /^[a-zA-Z0-9]{8,16}$/;
    const phoneRegex= /^[6-9][0-9]{9}$/;

    if (!nameRegExp.test(name)) {
      alert('Please enter correct name.');
      // name.focus();
      return false;
    }
    else if (!emailRegex.test(email)) {
      alert('Please enter your email.');
      email.focus();
      return false;
    }
    else if(!passwordRegex.test(password))
    {
        alert("Password must consist of Capital letters and digits.");
        return false;
    }

    else if(!phoneRegex.test(phone))
    {
        alert("Enter correct phone number");
        return false;
    }

    else if(password !== cpassword)
    {
        alert("Confirm password not same as pw");
        return false;
    }
    else{
        alert('Form submitted successfully!');
        return true;
    }
   
  }

  