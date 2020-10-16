class Student{
    constructor({name, age, dateOfBirth, studentID}){
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        this.gender = "";
        this.studentID = studentID;
        this.hobbies = [];
    }

    set addName(studentName){
        this.name = studentName;
    }

    set addAge(studentAge){
        this.age = studentAge;
    }

    set addDateOfBirth(studentDateOfBirth){
        this.dateOfBirth = studentDateOfBirth;
    }

    set addGender(studentGender){
        switch(studentGender){
            case "Female":
                this.gender = studentGender;
                break;
            case "Male":
                this.gender = studentGender;
                break;
            default:
                this.gender = "Not Valid";
        }
    }

    set addStudentID(newStudentID){
        this.studentID = newStudentID;
    }

    set addHobbies(studentHobbies){
        this.hobbies.push(studentHobbies);
    }

    set removeHobbies(studentHobbies){
        //new hobby = "Swimming"
        let hobbiesArray = [];

        for (let i = 0; i < this.hobbies.length; i++){
            if(this.hobbies[i] !== studentHobbies){
                hobbiesArray.push(this.hobbies[i]);
            }
        }

        this.hobbies = hobbiesArray;
    }

    get hobbiesList(){
        return this.hobbies;
    }

    get showStudentData(){
        return `
        ============STUDENT IDENTITY============

        Name            : ${this.name}
        Age             : ${this.age}
        Date of Birthday: ${this.dateOfBirth}
        Gender          : ${this.gender}
        Student ID      : ${this.studentID}
        Hobbies         : ${this.hobbies}`
    }
    
}

const studentA = new Student({
    name: "Adriana Lima",
    age: 39,
    dateOfBirth: "June 12th, 1981",
    studentID: "0082020033",
})

studentA.addGender = "Female";

studentA.addHobbies = "Singing";
studentA.addHobbies = "Drawing";
studentA.addHobbies = "Dancing";

console.log(studentA.showStudentData);

studentA.removeHobbies = "Drawing";

console.log("Found deleted hobby!");

console.log(studentA.showStudentData);