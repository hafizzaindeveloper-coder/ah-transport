document.addEventListener("DOMContentLoaded", () => {


    // =========================
    // HOME QUICK BOOKING
    // =========================

    const heroBookingForm =
        document.getElementById("heroBookingForm");


    if (heroBookingForm) {


        heroBookingForm.addEventListener("submit", (event) => {

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
                    heroBookingForm,
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
                heroBookingForm,
                "Booking details ready. Opening WhatsApp...",
                "success"
            );



            setTimeout(() => {

                window.open(
                    whatsappURL,
                    "_blank"
                );

            }, 700);



        });


    }





    // =========================
    // FULL BOOKING PAGE
    // =========================


    const bookingForm =
        document.getElementById("bookingForm");



    if (bookingForm) {


        bookingForm.addEventListener("submit", (event) => {


            event.preventDefault();



            const name =
                document.getElementById("bookingName")
                .value.trim();



            const phone =
                document.getElementById("bookingPhone")
                .value.trim();



            const pickup =
                document.getElementById("pickupCity")
                .value.trim();



            const destination =
                document.getElementById("destinationCity")
                .value.trim();



            const date =
                document.getElementById("bookingDate")
                .value;



            const vehicle =
                document.getElementById("bookingVehicle")
                .value;



            const details =
                document.getElementById("bookingMessage")
                .value.trim();





            if (
                !name ||
                !phone ||
                !pickup ||
                !destination ||
                !date ||
                !vehicle
            ) {


                showMessage(
                    bookingForm,
                    "Please fill in all required fields.",
                    "error"
                );


                return;


            }





            let message =
                `Assalam-o-Alaikum A-H Transport,%0A%0A` +

                `New Booking Request%0A%0A` +

                `Name: ${name}%0A` +

                `Phone: ${phone}%0A` +

                `Pickup: ${pickup}%0A` +

                `Destination: ${destination}%0A` +

                `Date: ${date}%0A` +

                `Vehicle: ${vehicle}`;




            if (details) {

                message +=
                    `%0A%0ADetails: ${details}`;

            }



            const whatsappURL =
                `https://wa.me/923234141071?text=${message}`;



            showMessage(
                bookingForm,
                "Booking request ready. Opening WhatsApp...",
                "success"
            );



            setTimeout(() => {


                window.open(
                    whatsappURL,
                    "_blank"
                );


            },700);



        });


    }





    // =========================
    // MESSAGE FUNCTION
    // =========================


    function showMessage(form, text, type) {


        const old =
            form.querySelector(".form-message");



        if (old) {

            old.remove();

        }



        const message =
            document.createElement("div");



        message.className =
            "form-message " +
            (
                type === "success"
                ? "form-success"
                : "form-error"
            );



        message.textContent = text;



        form.appendChild(message);


    }



});