const API_URL =
    "https://wronkdfbca.execute-api.ap-southeast-2.amazonaws.com/feedback";

const form = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Frontend validation
    if (!name || !email || !message) {
        responseMessage.textContent = "Please fill all fields.";
        return;
    }

    // Basic email validation
    if (!email.includes("@")) {
        responseMessage.textContent = "Please enter a valid email.";
        return;
    }

    responseMessage.textContent = "Submitting...";

    try {

        const response = await fetch(API_URL, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                email: email,
                feedback: message
            })
        });

        const data = await response.json();

        console.log("API Response:", data);

        if (response.ok) {

            responseMessage.textContent =
                data.message || "Message submitted successfully.";

            form.reset();

        } else {

            responseMessage.textContent =
                data.message || "Something went wrong.";

        }

    } catch (error) {

        console.error("API Error:", error);

        responseMessage.textContent =
            "Unable to connect to the server.";
    }

});