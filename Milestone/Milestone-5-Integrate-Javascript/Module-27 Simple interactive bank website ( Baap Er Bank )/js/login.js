// step-1: add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // step-2: get the email address inside the email input field
  // always remember to use .value to get text from an input field

   // step-3 : get password
   // 3.a : set id on the html element
   // 3.b get the element 
   // 3.c get the value from the element
  const userEmail = document.getElementById("user-email").value;
  const userPassword = document.getElementById("user-password").value;

   // Danger: do not verify email password on the client side
   // step-4: verify email and password
   if (userEmail === 'iamgmail@gmail.com' && userPassword === 'iamgmail') {
    window.location.href = 'bank.html'
   } else {
      alert('invalid user name or password')
   }

});
