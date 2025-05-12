// Person Class
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Setter for age
  set age(age) {
    this._age = age;
  }
}

// Student Class (inherits from Person)
class Student extends Person {
  constructor(name, age) {
    super(name, age);  // Call the parent constructor
  }

  // Method for the student to study
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Teacher Class (inherits from Person)
class Teacher extends Person {
  constructor(name, age) {
    super(name, age);  // Call the parent constructor
  }

  // Method for the teacher to teach
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
