let otp;

function sendOTP() {
  const email = document.getElementById("email").value.trim();

  if (!email) {
    alert("Enter your email");
    return;
  }

  if (!email.endsWith("@gmail.com") && !email.endsWith("@yahoo.com")) {
    alert("Use Gmail or Yahoo only");
    return;
  }

  // 🔐 Generate NEW random OTP
  otp = Math.floor(100000 + Math.random() * 900000);

  emailjs.send(
    "service_rjawk5o",
    "template_m5qahkl",
    {
      to_email: email,
      otp: otp
    }
  ).then(() => {
    document.getElementById("otpSection").classList.remove("hidden");
    alert("OTP sent ✉️");
  }).catch((error) => {
    console.error(error);
    alert("Email failed to send");
  });
}

function verifyOTP() {
  const input = document.getElementById("otp").value.trim();

  if (!input) {
    alert("Enter the OTP");
    return;
  }

  if (input == otp) {
    // ✅ SUCCESS → next page
    window.location.href = "2.html";
  } else {
    alert("Wrong code ❌");
  }
}
