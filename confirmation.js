
document.getElementById("bookingForm").addEventListener("submit", function (event) {
  event.preventDefault(); 
  alert("Booking confirmed! Check your email for details.");
  window.location.href = "confirmation.html";
});
