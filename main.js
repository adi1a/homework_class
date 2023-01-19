class Student {
    constructor(name, age, facility){
        this.name = name;
        this.age = age;
        this.facility = facility;
    }
}

class MedicalStudent extends Student {
    
    constructor(name, age, facility, specialization){
        super(name, age, facility)
        this.specialization = specialization
    }
    displayInfo(){
        return `${this.name} ${this.age} ${this.facility} ${this.specialization}`
    }
}

const StudentOne = new MedicalStudent('Megan', 23, 'Neirobiology', 'nurse');
const StudentTwo = new MedicalStudent('Alex', 40, 'Neurology', 'Neurologist')
const StudentThree = new MedicalStudent('Max', 55, 'Plastic surgery', 'Surgeon')
console.log(StudentOne.displayInfo());
console.log(StudentTwo.displayInfo());
console.log(StudentThree.displayInfo());


