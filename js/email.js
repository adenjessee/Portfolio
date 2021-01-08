const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'service_17vaxdg';
    const templateID = 'template_kkzhnxp';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Send Email';
        swal({
        title: "Email Sent!",
        text: "Thank you for sending a message!",
        icon: "success",
        button: "Done",
    });
    document.getElementById('form').reset();
    }, (err) => {
        btn.value = 'Send Email';
        //alert(JSON.stringify(err));
        swal({
            title: "Error Sending Email!",
            text: "Sorry, please try again later!",
            icon: "error",
            button: "Okay",});
    });
});