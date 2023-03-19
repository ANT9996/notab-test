document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name");
    const venueName = document.getElementById("venueName");
    const venueCity = document.getElementById("venueCity");
    const stateCity = document.getElementById("stateCity");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    console.log({
      name: name.value,
      venueName: venueName.value,
      venueCity: venueCity.value,
      stateCity: stateCity.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    });
    name.value.length < 1 ? name.classList.add("border-error") : name.classList.remove("border-error")
    venueName.value.length < 1 ? venueName.classList.add("border-error") : venueName.classList.remove("border-error")
    venueCity.value.length < 1 ? venueCity.classList.add("border-error") : venueCity.classList.remove("border-error")
    stateCity.value.length < 1 ? stateCity.classList.add("border-error") : stateCity.classList.remove("border-error")
    email.value.length < 1 ? email.classList.add("border-error") : email.classList.remove("border-error")
    subject.value.length < 1 ? subject.classList.add("border-error") : subject.classList.remove("border-error")
    message.value.length < 1 ? message.classList.add("border-error") : message.classList.remove("border-error")
    const errors = [name, venueCity, venueName, stateCity, email, subject, message].filter(el => el.classList.contains('border-error'))
    console.log(errors);
    errors.length < 1 && alert('success')
  });
});
