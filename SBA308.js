/*
Objectives:
1. Employ basic JavaScript syntax accurately.
2. Implement control flow structures such as conditionals and loops effectively.
3. Use arrays and objects to organize and manage data.
4. Develop functions to create reusable code.
5. Utilize loops and iteration to navigate through data collections.
6. Implement error handling to manage potential code failures gracefully.
*/

/*Create a script that:
1. Gathers Data
2. Processes it
3. Outputs a consistent result as described by a specification.
*/ 

//Create a function named getLearnerData() that accepts these values as parameters, in the order listed: (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns the formatted result, which should be an array of objects as described above.




const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript",
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1, //This is assignment 1
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2, // This is assignment 2
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3, // This is assignment 3
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125, //This is Joe submitting Assignment 1
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2, //This is Joe submitting Assignment 2
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3, //This is Joe submitting Assignment 3
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132, //This is Jackie submitting Assignment 1
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2, // This is Jackie submitting Assignment 2
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];




let gradeOneResult = function (score, points_possible){ //function to get the result for Grade One
  return score / points_possible
}

let gradeTwoResult = function (score, points_possible) { //function to get the result for Grand Two
  return score / points_possible
}

let classScoreAverage = function (gradeOneResult, gradeTwoResult) {
  return gradeOneResult / gradeTwoResult
}

//Pull Learner submissions make a copy of it and turn them into an array. Use spread operator
let LearnerSubmissionCopy = [...LearnerSubmissions];

//Pull all Learner ID 125 Assignments into an array
let learnerOneAssignments = []

//Use loop iteration to find every assignment Learner 125 turned in.
for(let a = 0; a < LearnerSubmissionCopy.length; a++){
  if(LearnerSubmissionCopy[a].learner_id === 125){
    learnerOneAssignments.push(LearnerSubmissionCopy[a]);
  }
}

  console.log(learnerOneAssignments)




let learnerObject = {       //template object for each of the students
  id: null,
  avg: null,
  1: null,
  2: null,
}


/*
Final Grade variable equals each students individual 
let finalGrade = LearnerSubmissions[0].submission.score
console.log(finalGrade)

*/

let finalGrade = LearnerSubmissions[0].submission.score //thhis is how you pull specific data from an array
// console.log(finalGrade)

  // Get the key value pair "ID"  and "ID number" from Learner Submissions. What is needed to do so?
  // Get the key value pair 

  // Create a function and return the result as mentioned in the exercise.
//   function getLearnerData (CourseInfo, AssignmentGroup, [LearnerSubmissions]) {
//     return 

// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);
//   }



/*
  Steps:


  Create a template Object that will inlcude student ID, 
  Function Resutls
  
  Student 1 Object:
  Find each students ID number 
  Return back the ID Number in an object
  Return the corresponding grade for assignment 1
  Return the corresponding grade for assignment 2
  Divide the assignment grade 1 & assignment grade 2 - return value
  Divide and get average of both assignments 
  
  
  Student 2 Object:
  Get each students ID number 
  Return back the ID Number
  Return the corresponding grade for assignment 1
  Return the corresponding grade for assignment 2
  Divide the assignment grade 1 & assignment grade 2 - return value
  Divide and get average of both assignments 
  
*/  




// example code
//   let firstName = ["Joey", "Chris", "Jackson",] 
//   let lastName = ["Pisspants", "Jean-Pierre", "Francois"]
// const greeting = function (firstName, lastName) {
//     return `Hello, my name is ${firstName} ${lastName}`
// }
//     for(let oneName = 0; oneName < firstName.length; oneName++){
//         console.log(greeting(firstName[oneName], lastName[oneName]))
//     }

