
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

let jsonStudent = '{"name"}';

let jsonStudent= JSON.parse(jsonStudent);
console.log(jsonStudent);

