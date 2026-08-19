document.addEventListener("DOMContentLoaded", () => {

    const bookingForm =
        document.getElementById("heroBookingForm");

    if (!bookingForm) {
        return;
    }


    bookingForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const pickup =
            document.getElementById("pickup").value.trim();

        const destination =
            document.getElementById("destination").value.trim();

        const travelDate =
            document.getElementById("travelDate").value;

        const vehicleType =
            document.getElementById("vehicleType").value;


        if (
            !pickup ||
            !destination ||
            !travelDate ||
            !vehicleType
        ) {

            showMessage(
                "Please fill in all booking fields.",
                "error"
            );

            return;
        }


        const message =
            `Assalam-o-Alaikum A-H Transport,%0A%0A` +
            `I want to book transport.%0A%0A` +
            `Pickup: ${pickup}%0A` +
            `Destination: ${destination}%0A` +
            `Date: ${travelDate}%0A` +
            `Vehicle: ${vehicleType}%0A%0A` +
            `Please share availability and price.`;


        const whatsappURL =
            `https://wa.me/923234141071?text=${message}`;


        showMessage(
            "Booking details ready. Opening WhatsApp...",
            "success"
        );


        setTimeout(() => {
            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );
        }, 700);

    });


    function showMessage(text, type) {

        const oldMessage =
            bookingForm.querySelector(".form-message");

        if (oldMessage) {
            oldMessage.remove();
        }


        const message = document.createElement("div");

        message.className =
            `form-message ${
                type === "success"
                    ? "form-success"
                    : "form-error"
            }`;

        message.textContent = text;

        bookingForm.appendChild(message);

    }

});