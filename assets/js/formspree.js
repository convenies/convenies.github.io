var form = document.getElementById("contactform");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    //status.innerHTML = "Thank you for getting in touch, we will get back to you soon!";
    window.location.href = "#thankyou";
    form.reset()
  }).catch(error => {
    //status.innerHTML = "Oops! There was an error submitting the form. Please try again."
    window.alert("Oops! There was an error submitting the form. Please try again.");
  });
}
form.addEventListener("submit", handleSubmit)