document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const today = new Date().toISOString().split("T")[0];

    document.getElementById("registrationDate").setAttribute("max", today);

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        clearErrors();

        let valid = true;

        const farmerName = document.getElementById("farmerName");
        const mobile = document.getElementById("mobile");
        const email = document.getElementById("email");
        const plotId = document.getElementById("plotId");
        const village = document.getElementById("village");
        const cropStage = document.getElementById("cropStage");
        const soilType = document.getElementById("soilType");
        const irrigationMethod = document.getElementById("irrigationMethod");
        const soilMoisture = document.getElementById("soilMoisture");
        const registrationDate = document.getElementById("registrationDate");

        if (farmerName.value.trim() === "") {
            showError(farmerName, "farmerNameError", "Farmer name is required.");
            valid = false;
        } else if (!/^[A-Za-z ]+$/.test(farmerName.value.trim())) {
            showError(farmerName, "farmerNameError", "Name should contain alphabets and spaces only.");
            valid = false;
        }
        if (!/^[6-9][0-9]{9}$/.test(mobile.value.trim())) {
            showError(mobile, "mobileError", "Enter a valid 10-digit Indian mobile number.");
            valid = false;
        }

        if (email.value.trim() === "") {
            showError(email, "emailError", "Email is required.");
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
            showError(email, "emailError", "Enter a valid email address.");
            valid = false;
        }

        if (village.value.trim() === "") {
            showError(village, "villageError", "Village is required.");
            valid = false;
        }

        if (!/^AGR-[0-9]{4}$/.test(plotId.value.trim())) {
            showError(plotId, "plotIdError", "Plot ID must follow AGR-1234 format.");
            valid = false;
        }

   
        if (cropStage.value === "") {
            showError(cropStage, "cropStageError", "Please select a crop stage.");
            valid = false;
        }

        if (soilType.value === "") {
            showError(soilType, "soilTypeError", "Please select a soil type.");
            valid = false;
        }

        if (irrigationMethod.value === "") {
            showError(irrigationMethod, "irrigationMethodError", "Please select an irrigation method.");
            valid = false;
        }

        let moisture = Number(soilMoisture.value);
        if (soilMoisture.value === "") {
            showError(soilMoisture, "soilMoistureError", "Soil moisture is required.");
            valid = false;
        } else if (moisture < 0 || moisture > 100) {
            showError(soilMoisture, "soilMoistureError", "Soil moisture must be between 0 and 100.");
            valid = false;
        }

        if (registrationDate.value === "") {
            showError(registrationDate, "registrationDateError", "Registration date is required.");
            valid = false;
        } else if (registrationDate.value > today) {
            showError(registrationDate, "registrationDateError", "Future dates are not allowed.");
            valid = false;
        }

        if (valid) {
            document.getElementById("successMessage").textContent =
                "Registration successful! All details are valid.";
            alert("Farmer registration submitted successfully.");
        }
    });

    form.addEventListener("reset", function () {
        setTimeout(clearErrors, 0);
        document.getElementById("successMessage").textContent = "";
    });
});

function showError(input, errorId, message) {
    input.classList.add("invalid");
    document.getElementById(errorId).textContent = message;
}

function clearErrors() {
    const inputs = document.querySelectorAll("input, select");
    inputs.forEach(function (input) {
        input.classList.remove("invalid");
    });

    const errors = document.querySelectorAll(".error");
    errors.forEach(function (error) {
        error.textContent = "";
    });
}
