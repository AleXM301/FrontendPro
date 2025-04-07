function Student(name, surname, yearOfBirth, marks) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
    this.marks = marks || [];
    this.attendances = new Array(25);
    this.attendanceIndex = 0;

    this.getAge = function () {
        return new Date().getFullYear() - this.yearOfBirth;
    }

    this.avgMark = function () {
        return this.marks.length === 0
            ? 0
            : this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
    }

    this.addAttendance = function (value) {
        if (this.attendanceIndex >= 25) {
            console.log("Всі 25 занять вже заповнено.");
            return;
        }
        this.attendances[this.attendanceIndex++] = value;
    }
    this.present = () => this.addAttendance(true);


    this.absent = () => this.addAttendance(false);

    this.avgAttendance = function () {
        let validAttendances = this.attendances.filter(attendance => attendance !== undefined);
        let presents = validAttendances.filter(attendance => attendance === true);
        return presents.length / validAttendances.length;
    }

    this.summary = function () {

        let avgMark = this.avgMark();
        let avgAttendance = this.avgAttendance();

        if (avgMark > 90 && avgAttendance > 0.9) {
            return "Молодець!";
        } else if (avgMark > 90 || avgAttendance > 0.9) {
            return "Добре, але можна краще.";
        } else {
            return "Редиска!";
        }
    }
}

function repeatAction(action, times) {
    for (let i = 0; i < times; i++) {
        action();
    }
}

const student1 = new Student('студент1', 'Прізвище1', 2000, [90, 100, 95, 89, 91]);
const student2 = new Student('студент2', 'Прізвище2', 2001, [50, 100, 80, 60, 90]);
const student3 = new Student('студент3', 'Прізвище3', 2005, [50, 80, 90, 85, 78]);
const student4 = new Student('студент4', 'Прізвище4', 2003, [100, 98, 95, 89]);

repeatAction(student1.absent, 2);
repeatAction(student1.present, 23);

repeatAction(student2.absent, 16);
repeatAction(student2.present, 9);

repeatAction(student3.absent, 1);
repeatAction(student3.present, 24);

repeatAction(student4.absent, 14);
repeatAction(student4.present, 12);

console.log(`Студент : ${student1.name} Вік: ${student1.getAge()} підсумок - ${student1.summary()}`);
console.log(`Студент : ${student2.name} Вік: ${student2.getAge()} підсумок - ${student2.summary()}`);
console.log(`Студент : ${student3.name} Вік: ${student3.getAge()} підсумок - ${student3.summary()}`);
console.log(`Студент : ${student4.name} Вік: ${student4.getAge()} підсумок - ${student4.summary()}`);

