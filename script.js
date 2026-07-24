
let student =  {
		name :"Jacqueline Prescott",
		age: 45,
		enrolled : true,
		courses:["Science", "Maths", "English", "Biology"],
     
		displayInfo: function() {
		return "Student: " + this.name + " Age: " + this.age  + " Enrolled: " + this.enrolled;
		},


addCourse: function (newCourse) {
	this.courses.push (newCourse);
	console.log(newCourse + "has been added");
},


caluculateTotalCourses: function () {
	return this.courses.length;
}
};


 





console.log("Name:", student.name);
console.log ("Age:", student.age);
console.log(student.displayInfo());


let jsonStudent = JSON.stringify(student);

console.log(jsonStudent);



let parsedStudent= JSON.parse(jsonStudent);
console.log(parsedStudent);
console.log (student === parsedStudent);


let {name, courses} = student;


console.log (name, courses);


let scores =[85,92,78,90];
let [firstScore ,secondScore] =scores;
console.log(firstScore,secondScore);




let clonedStudent = {student, graduationYear: 2029};
console.log(clonedStudent);



let newCourses= ["Physics", "Javascript", "Science"];
 let combinedCourses = [student.courses , newCourses];

 console.log(combinedCourses);


 student.addCourse("Information Techology");
 console.log ("Total number of courses: " + student.caluculateTotalCourses());


let total= scores.reduce(function(total,score) {
	return total + score;

}, 0);

 let averageScore = total/scores.length;
 console.log ("Average Score:" , averageScore);
