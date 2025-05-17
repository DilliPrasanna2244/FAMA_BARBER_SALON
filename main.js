
  document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const appointment = document.getElementById("appointment").value;
    const service = document.getElementById("service").value;

    if (!name || !email || !password || !appointment || !service) {
      alert("Please fill in all the fields!");
      return;
    }

    alert(`Thank you, ${name}! Your appointment for "${service}" is booked on ${appointment}.`);
    document.getElementById("bookingForm").reset();
  });

