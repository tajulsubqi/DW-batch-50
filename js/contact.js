getData = () => {
  // data colection
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const subject = document.querySelector("#subject").value;
  const message = document.querySelector("#message").value;

  let data = {
    name,
    email,
    phone,
    subject,
    message,
  };

  console.log(data);

  // data validation
  if (name == "") {
    return alert("Your name has not been entered!");
  } else if (email == "") {
    return alert("Your email has not been entered!");
  } else if (phone == "") {
    return alert("Your phone number has not been entered!");
  } else if (subject == "") {
    return alert("Your subject has not been selected!");
  } else if (message == "") {
    return alert("Your message has not been entered!");
  }

  // execute to email
  // const emailReceiver = "hi.tajulsubqi7@gmail.com";
  let a = document.createElement("a");
  a.href = `mailto:${email}?subject=${subject}&body= Halo nama saya ${name}, bisakah anda menghubungi saya di kontak ${phone}, untuk membahas project ${message}`;
  a.click();
};
