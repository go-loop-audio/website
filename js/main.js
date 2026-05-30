function sendMail(name, email, message)
{
    if(email == "")
    {
        console.log("No email address specified, cannot process contact info.")
        return;
    }

    const serviceID = "service_service_id";
    const templateID = "template_template_id";

    emailjs
        .send(serviceID, templateID, { name, email, message })
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully!");
        })
        .catch((err) => console.log(err));
}