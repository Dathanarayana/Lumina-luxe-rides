document.getElementById('signinForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = this.elements[0].value.trim();
  const password = this.elements[1].value;

  const savedUser = JSON.parse(localStorage.getItem('user'));

  if (!savedUser) {
    alert("No account found. Please sign up.");
    return;
  }

  if (savedUser.email === email && savedUser.password === password) {
    alert("Sign in successful!");
    window.location.href = 'carlist.html'; // or redirect to booking page
  } else {
    alert("Invalid email or password.");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signin-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username && password) {
      // Simulate signup logic
      localStorage.setItem("signedUpUser", username);

      // ✅ Redirect to carlist.html
      window.location.href = "carlist.html";
    } else {
      alert("Please fill in all fields.");
    }
  });
});
