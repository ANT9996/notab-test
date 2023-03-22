let errorHandle = (target) => {
  target.value.length < 1 
    ? target.classList.add("border-error") 
    : target.classList.remove("border-error")
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name");
    let venueName = document.getElementById("venueName");
    let venueCity = document.getElementById("venueCity");
    let stateCity = document.getElementById("stateCity");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");
    
    console.log({
      name: name.value,
      venueName: venueName.value,
      venueCity: venueCity.value,
      stateCity: stateCity.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    });

    errorHandle(name)
    errorHandle(venueName)
    errorHandle(venueCity)
    errorHandle(stateCity)
    errorHandle(email)
    errorHandle(subject)
    errorHandle(message)

    const errors = [name, venueCity, venueName, stateCity, email, subject, message].filter(el => el.classList.contains('border-error'))
    console.log(errors);
    errors.length < 1 && alert('success')
  });
});
