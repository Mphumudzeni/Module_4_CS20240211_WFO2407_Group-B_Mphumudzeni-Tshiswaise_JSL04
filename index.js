// # [JSL04] Submission: Monster Ternary Operator

// #### Challenge 1: Flavor Selection

let userPreference = 'Sugar-free'; // Possible values: 'Regular', 'Sugar-free', or undefined

let preferenceMessage = userPreference === 'Sugar-free' 
    ? "The user prefers Sugar-free variety."
    : userPreference === 'Regular'
        ? "The user prefers Regular variety."
        : "The preference is not set, defaulting to Regular variety.";

console.log(preferenceMessage);


// #### Challenge 2: Stock Check

let cansLeft = 3; // Any number of cans

let message = cansLeft < 5 ? "Time to restock!" : "We're stocked!";
console.log(message);


// #### Challenge 3: Workout Intensity

let heartRate = 95; // Current heart rate in bpm

console.log(heartRate < 100 ? "Boost needed!" : "Energy levels are high!");


// #### Challenge 4: Temperature Suitability

let currentTemp = 4; // Current temperature in °C

console.log(currentTemp <= 5 ? "Chilled to perfection!" : "Needs a cooler!");


// #### Challenge 5: Late Night Coding Session

let currentHour = 22; // Current hour in 24-hour format

console.log((currentHour >= 7 && currentHour < 24) ? "Unleash the beast!" : "Better stick to water.");



