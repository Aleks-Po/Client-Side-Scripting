// 1. Grade Checker
function checkGrade() {
    // Get the numeric score input by the user from the DOM
    let score = Number(document.getElementById("score").value);

    // References to the DOM elements where we will display results
    let gradeResult = document.getElementById("gradeResult");
    let commentResult = document.getElementById("gradeComment");

    // ----------------------------
    // 1. Determine the letter grade
    // ----------------------------
    // We use if-else statements to assign a grade based on the score
    let grade = "";
    if (score >= 90) {
        grade = "Grade: A";  // Score 90-100
    } else if (score >= 75) {
        grade = "Grade: B";  // Score 75-89
    } else if (score >= 50) {
        grade = "Grade: C";  // Score 50-74
    } else if (score >= 35) {
        grade = "Grade: D";  // Score 35-49
    } else {
        grade = "Grade: F";  // Score below 35
    }

    // Display the grade in the page
    gradeResult.innerText = grade;

    // ----------------------------
    // 2. Provide feedback using a switch statement
    // ----------------------------
    // Normally, switch compares a value to fixed cases.
    // Here, we want to check ranges (like >=90, >=75, etc.),
    // so we switch on "true". This allows each case to be a boolean expression.
    let comment = "";

    switch (true) {
        // If score is between 90 and 100 (inclusive)
        case (score >= 90 && score <= 100):
            comment = "Excellent!";
            break;

        // If score is between 75 and 89
        case (score >= 75 && score < 90):
            comment = "Good job!";
            break;

        // If score is between 50 and 74
        case (score >= 50 && score < 75):
            comment = "You passed.";
            break;

        // For all other cases (score below 50)
        default:
            comment = "Needs improvement.";
    }

    // ----------------------------
    // 3. Display the comment in the DOM
    // ----------------------------
    // Check if the <p> for the comment already exists
    if (!document.getElementById("gradeComment")) {
        // If it doesn't exist, create it and append after the grade
        let p = document.createElement("p");
        p.id = "gradeComment";
        gradeResult.parentNode.appendChild(p);
    }

    // Update the comment text
    document.getElementById("gradeComment").innerText = comment;
}


// 2. Even or Odd
function checkEvenOdd() {
    let num = Number(document.getElementById("evenOddInput").value);
    let result = (num % 2 === 0) ? "Even Number" : "Odd Number";
    document.getElementById("evenOddResult").innerText = result;
}

// 3. Day of the Week
function checkDay() {
    let day = Number(document.getElementById("dayInput").value);
    let result = "";

    switch (day) {
      case 1: result = "Monday"; break;
      case 2: result = "Tuesday"; break;
      case 3: result = "Wednesday"; break;
      case 4: result = "Thursday"; break;
      case 5: result = "Friday"; break;
      case 6: result = "Saturday"; break;
      case 7: result = "Sunday"; break;
      default: result = "Invalid day";
    }

    document.getElementById("dayResult").innerText = result;
}

// 4. Age Category (using AND)
function checkAge() {
    let age = Number(document.getElementById("ageInput").value);
    let result = "";

    if (age >= 0 && age <= 12) {
      result = "Child";
    } else if (age >= 13 && age <= 19) {
      result = "Teen";
    } else if (age >= 20 && age <= 64) {
      result = "Adult";
    } else if (age >= 65) {
      result = "Senior";
    } else {
      result = "Invalid age";
    }

    document.getElementById("ageResult").innerText = result;
}

// 5. Toggle Example (using NOT)
let lightOn = false;
function toggleLight() {
    lightOn = !lightOn;
    let status = lightOn ? "The light is ON" : "The light is OFF";
    document.getElementById("toggleResult").innerText = status;
}