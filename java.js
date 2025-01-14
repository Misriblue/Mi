
      function visit() {
        name = prompt("what is your name");
        email = prompt("please type your email please");
        phone = prompt("please type your phone ");
        let address = " ";
        if (phone) {
          alert("hello " + name + " we will call you at " + phone);
          return phone;
        }
        if (address) {
          alert("hello " + name + " we will contact you vie " + email);
          return email;
        }
        if (!phone && !email) {
          alert("please provide us contact info");
        }
      }
      let visitButton = document.querySelector("button");
      visitButton.addEventListener("click", visit);
  