// Task 1: Calculate moisture deficit and water requirement
function calculateWater() {
    let farmerName = "Ramesh Patil";
    let plotId = "AGR-1001";
    let currentMoisture = Number(document.getElementById("moisture").value);
    let requiredMoisture = 50;

    let moistureDeficit = requiredMoisture - currentMoisture;

    if (moistureDeficit > 0) {
        let waterRequired = moistureDeficit * 100;
        alert("Irrigation Required for " + farmerName + " - " + plotId);
        document.getElementById("waterResult").innerHTML =
            "Moisture Deficit: " + moistureDeficit + "%<br>" +
            "Estimated Water Required: " + waterRequired + " litres";
    } else {
        alert("Irrigation is not required.");
        document.getElementById("waterResult").innerHTML =
            "Moisture deficit: 0%. Irrigation is not required.";
    }
}

// Task 2: Irrigation recommendation
function irrigationRecommendation(soilMoisture, rainExpected, cropStage) {
    if (rainExpected) {
        return "Postpone Irrigation";
    } else if (soilMoisture < 30) {
        return "Irrigation Required Immediately";
    } else if (soilMoisture >= 30 && soilMoisture <= 50) {
        return "Monitor Soil Moisture";
    } else {
        return "Irrigation Not Required";
    }
}

// Task 3: Sugarcane farm object
let sugarcaneFarm = {
    farmerName: "Ramesh Patil",
    plotId: "AGR-1001",
    cropStage: "Grand Growth",
    soilMoisture: 28,
    area: 2.5,
    pumpStatus: "OFF",

    displayFarmInfo: function() {
        return this.farmerName + " | " + this.plotId + " | " +
               this.cropStage + " | " + this.soilMoisture + "%";
    },

    checkIrrigationRequirement: function() {
        return this.soilMoisture < 30;
    },

    updatePumpStatus: function(status) {
        this.pumpStatus = status;
    }
};

// Task 4: Sensor readings array
let sensorReadings = [28, 31, 35, 42, 39, 27, 25];

function showSensorData() {
    let minimum = Math.min(...sensorReadings);
    let maximum = Math.max(...sensorReadings);
    let total = sensorReadings.reduce((sum, value) => sum + value, 0);
    let average = total / sensorReadings.length;
    let criticalCount = sensorReadings.filter(value => value < 30).length;

    document.getElementById("sensorResult").innerHTML =
        "Readings: " + sensorReadings.join(", ") + "<br>" +
        "Minimum: " + minimum + "%<br>" +
        "Maximum: " + maximum + "%<br>" +
        "Average: " + average.toFixed(2) + "%<br>" +
        "Readings below 30%: " + criticalCount;
}

// Example:
console.log(irrigationRecommendation(28, false, "Grand Growth"));
console.log(sugarcaneFarm.displayFarmInfo());
console.log("Irrigation required:", sugarcaneFarm.checkIrrigationRequirement());
sugarcaneFarm.updatePumpStatus("ON");
console.log("Pump status:", sugarcaneFarm.pumpStatus);
