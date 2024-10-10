// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.onclick = function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  };
});

// Form validation
const form = document.getElementById("contactForm");

form.onsubmit = function (e) {
  e.preventDefault();
  // Get and trim all the fields (name, email, message)
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // Check if any fields are empty
  if (!name || !email || !message) {
    alert("All fields are required!");
    // If everything is fine, submit the form
  } else {
    alert("Thank you! Your message has been sent.");
    form.reset(); // Reset the form
  }
};
 
