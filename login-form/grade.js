function getGrade(marks) {
    let grade;
    
    switch (true) {
        case (marks >= 90 && marks <= 100):
            grade = "A";
            break;
        case (marks >= 80 && marks < 90):
            grade = "B";
            break;
        case (marks >= 70 && marks < 80):
            grade = "C";
            break;
        case (marks >= 60 && marks < 70):
            grade = "D";
            break;
        case (marks >= 50 && marks < 60):
            grade = "E";
            break;
        case (marks >= 0 && marks < 50):
            grade = "F";
            break;
        default:
            grade = "Invalid marks";
    }
    
    return grade;
}

// Prompt the user to enter marks
let studentMarks = parseInt(prompt("Enter the student's marks (0-100):"));

// Check if the input is a valid number
if (!isNaN(studentMarks) && studentMarks >= 0 && studentMarks <= 100) {
    console.log("Grade:", getGrade(studentMarks));
} else {
    console.log("Please enter a valid number between 0 and 100.");
}
