

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


 

let learnerObject1 = {       //template object for each of the students
    id: null,
    avg: null,
    1: null,
    2: null,
  }

  let learnerObject2 = {       //template object for each of the students
    id: null,
    avg: null,
    1: null,
    2: null,
  }

 
  // Check if the assignment group belongs to the course.
function isValidCourseAssignmentGroup(CourseInfo, AssignmentGroup) {
  return CourseInfo.id === AssignmentGroup.course_id;
}

// Check if a learner's submission is valid.
function isValidSubmission(submission, assignment) {
  const score = submission.submission.score;
  const pointsPossible = assignment.points_possible;

  if (pointsPossible === 0 || typeof score !== "number" || isNaN(score)) {
    return false;
  } else { 
    return true;
  }
}

// Calculate the weighted average of a learner's scores.
function calculateWeightedAverage(learnerData) {
  return (learnerData.totalScore / learnerData.totalWeight) * 100;
}

// Process learner data, calculate scores, and return the results.
function processLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
  if (!isValidCourseAssignmentGroup(CourseInfo, AssignmentGroup)) {
    throw new Error("Invalid input: AssignmentGroup does not belong to the course.");
  }

  const assignments = AssignmentGroup.assignments;
  const assignmentScores = {};
  const learnerData = {};

  for (const submission of LearnerSubmissions) {
    const learnerID = submission.learner_id;
    const assignmentID = submission.assignment_id;
    const assignment = assignments.find((a) => a.id === assignmentID);

    if (!assignment || new Date(submission.submission.submitted_at) > new Date(assignment.due_at)) {
      continue;
    }

    if (isValidSubmission(submission, assignment)) {
      if (!learnerData[learnerID]) {
        learnerData[learnerID] = {
          id: learnerID,
          totalScore: 0,
          totalWeight: 0,
        };
      }

      const score = submission.submission.score;
      const pointsPossible = assignment.points_possible;
      learnerData[learnerID].totalScore += (score / pointsPossible) * pointsPossible;
      learnerData[learnerID].totalWeight += pointsPossible;
      assignmentScores[assignmentID] = (score / pointsPossible) * 100;
    }
  }

  return { learnerData, assignmentScores };
}

// Get and format learner data, including scores and averages.
function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
  try {
    const { learnerData, assignmentScores } = processLearnerData(
      CourseInfo,
      AssignmentGroup,
      LearnerSubmissions
    );
  
    const results = [];
  
    for (const learnerID in learnerData) {
      const learner = learnerData[learnerID];
      const weightedAverage = calculateWeightedAverage(learner);
  
      const learnerResult = {
        id: learner.id,
        avg: weightedAverage,
      };
  
      for (const assignmentID in assignmentScores) {
        learnerResult[assignmentID] = assignmentScores[assignmentID];
      }
  
      results.push(learnerResult);
    }
  
    return results;
    
  } catch(error) {
    console.error(error.message);
  }
 
}

// Get learner data and handle potential errors.
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);














  /// Trying different things out 
//  LearnerSubmissions.forEach((x) => {
//   let idNum = x.learner_id
//   let assignOne = x.submission.score
//   if(idNum === 125){
//     learnerObject1["id"] = idNum;
//     learnerObject1["1"] = assignOne;
//   }
//   if(idNum === 125 && x.submission)
//   let assignTwo = x.submission.score
//  })
//  console.log(learnerObject1)









 // for(loop through learner submissions){
//   if (id is equal to 125) {
//     return the value 125 in learnerObject1
//     else if (assignment id is equal to 1){
//       return the value of assignment 1 in learnerObject1 assignment 1
//     }
//   } else {

//   }
// }


// let getAssignmentsbyLearnerID = function(learnerId){
// return learnerSubmissionCopy.filter(function(submission) {
//   return submission.learner_id === learnerId
// })
// }
// let learnerOneAssignments = getAssignmentsbyLearnerID(125)
// console.log(learnerOneAssignments)

// //Pull all Learner ID 125 Assignments into an array
// // let learnerOneAssignments = []

// //Use loop iteration to find every assignment Learner 125 turned in.
// for(let a = 0; a < learnerSubmissionCopy.length; a++){
//   if(learnerSubmissionCopy[a].learner_id === 125){
//     learnerOneAssignments.push(learnerSubmissionCopy[a]);
//   } 
// }
// //Did Learner 125 submit assignment one? True/False
// let Submitted = learnerOneAssignments[0].submission.score ? "True" : "False"
//   // console.log(Submitted)

// //If yes return score. If no return null

// //Find if you submitted Assignment One.True/False. If true return the score 
// let learnerOneScores = []
// for(let a = 0; a <learnerOneAssignments ) {
// }

// console.log(learnerOneAssignments)
// console.log(learnerOneAssignments[0].submission.score)

  // console.log(learnerOneAssignments)







/*
Final Grade variable equals each students individual 
let finalGrade = LearnerSubmissions[0].submission.score
console.log(finalGrade)

*/

// let finalGrade = LearnerSubmissions[0].submission.score //thhis is how you pull specific data from an array
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

//Functions I might use

// let gradeOneResult = function (score, points_possible){ //function to get the result for Grade One
//   return score / points_possible
// }

// let gradeTwoResult = function (score, points_possible) { //function to get the result for Grand Two
//   return score / points_possible
// }

// let classScoreAverage = function (gradeOneResult, gradeTwoResult) {
//   return gradeOneResult / gradeTwoResult
// }