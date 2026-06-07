function sendMail()
{
    var email = document.getElementById('email')?.value ?? "";
    if(!email)
    {
        console.log("Unable to retrieve email address.");
        return;
    }
    
    // Name and message are optional, so either get or set to blank.
    var name = document.getElementById("name")?.value ?? "";
    var message = document.getElementById("message")?.value ?? "";

    // Create a Data object we can use in a bit to get the current date.
    var date = new Date();
    var time = date.toLocaleString();

    // Send message to the EmailJS API using service and template identifiers for Go Loop Audio.
    emailjs
        .send("service_q7b8o7n", "template_8h8oisw", { name: name, email: email, message: message, time: time })
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully!");
        })
        .catch((err) => console.log(err));
}