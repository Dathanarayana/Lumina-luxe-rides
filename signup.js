document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.elements[0].value.trim();
  const email = this.elements[1].value.trim();
  const password = this.elements[2].value;

  if (!name || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  // Save user in localStorage
  const user = { name, email, password };
  localStorage.setItem('user', JSON.stringify(user));

  alert("Account created successfully!");
  window.location.href = 'signin.html';
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");

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


