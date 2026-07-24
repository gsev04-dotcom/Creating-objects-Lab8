
let student =  {
		name :"Jacqueline Prescott",
		age: 45,
		enrolled : true,
		courses:["Science", "Maths", "English", "Biology"],
     
		displayInfo: function() {
		return "Student: " + this.name + " Age: " + this.age  + " Enrolled: " + this.enrolled;
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

