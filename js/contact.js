$(function(){
  

    setTimeout(function(){
      $("#hero-right").fadeIn("slow");
    }, 700);
  
    setTimeout(function(){
      $("#arrow-right").fadeIn("slow");
      $(".arrow-right").addClass("moving");
    }, 2000);
  
  
    /* mobile nav logic */
    $("#hamb-icon").click(function(){
      $(this).hide();
      $(".x-icon").show();
      $(".menu-mobile").show();
    });
  
    $("#x-icon").click(function(){
      $(this).hide();
      $("#hamb-icon").show();
      $(".menu-mobile").hide();
    });
  
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        firstname: "required",
        lastname: "required",
        message: "required",
        email: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        password: {
          required: true,
          minlength: 5
        }
      },
      // Specify validation error messages
      messages: {
        firstname: "Please enter your first name",
        lastname: "Please enter your last name",
        message: "Please provide your message",
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        email: "Please enter a valid email address"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  
  });
  
  //vanilla js
  document.addEventListener("DOMContentLoaded", ready);
    
  
  // let test = document.getElementById("test");
  
  // window.addEventListener("click", function() {
  //   test.style.color = "red";
  // });
  
  function ready() {
  
    reveal = () => {
  
      let reveals = document.querySelectorAll(".reveal");
  
      for (let i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;
  
        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active"); 
        }
      }
    }
  
    window.addEventListener("scroll", reveal);
  
    
  
  }