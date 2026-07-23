
let person =  {
		name :"Jacqueline Prescott",
		age: 45,
		enrolled : true,
		courses:["Science", "Maths", "English", "Biology"],
     
		displayInfo: function() {
				return "Name: " + this.name + " Age: " + this.age  + " Enrolled: " + this.enrolled;
			}
};

console.log("Name:", person.name);
console.log ("Age:", person.age);
console.log(person.displayInfo());
