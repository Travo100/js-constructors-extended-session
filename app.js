var inquirer = require("inquirer");

function Classroom(roomNumber, instructor, students) {
    this.roomNumber = roomNumber;
    this.instructor = instructor;
    this.students = students;
    this.printInfo = function() {
        console.log("/****** CLASS INFO ******/")
        console.log("Room Number: " + this.roomNumber);
        console.log("Instructor: " + this.instructor);
        console.log("Students: " + this.students);
        console.log("Number of students: " + this.students.length);
    }
}

inquirer.prompt([
    {
        type: "number",
        name: "roomNumber",
        message: "What's the room number?"
    },
    {
        type: "input",
        name: "instructor",
        message: "What's the instructors name?"
    }
]).then(function(inquirerResponse){

    
    var roomNumber = inquirerResponse.roomNumber;
    var instructorName = inquirerResponse.instructor;
    var studentsArray = [];

    function addStudent() {
        inquirer.prompt([
            {
                type: "input",
                name: "student",
                message: "Name of a student you'd like to add?"
            }
        ]).then(function(inquirerResponse){
            // once student is added
            // ask user if they want to add a new student
            studentsArray.push(inquirerResponse.student); 
            inquirer.prompt([
                {
                    type: "confirm",
                    name: "addStudentConfirm",
                    message: "Would you like to add another student?"
                }
            ]).then(function(inquirerResponse){
                if(inquirerResponse.addStudentConfirm) {
                    addStudent();
                } else {
                    // if they do not 
                    // stop the session 
                    // and show the class info
                    var codingBootCamp = new Classroom(roomNumber, instructorName, studentsArray);
                    codingBootCamp.printInfo();
                }
            });
        });
    }
    addStudent();
});