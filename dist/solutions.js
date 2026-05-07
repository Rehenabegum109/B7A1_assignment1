"use strict";
// Problem 1
Object.defineProperty(exports, "__esModule", { value: true });
const filterEvenNumbers = (numbers) => {
    return numbers.filter((num) => num % 2 === 0);
};
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
// Problem 2
const reverseString = (text) => {
    return text.split("").reverse().join("");
};
console.log(reverseString("typescript"));
const checkType = (value) => {
    if (typeof value === 'string') {
        return "String";
    }
    else {
        return "Number";
    }
};
console.log(checkType("Hello"));
console.log(checkType(42));
// problem 4
const getProperty = (obj, key) => {
    return obj[key];
};
const user = { id: 1, name: "John Doe", age: 21 };
console.log(getProperty(user, "name"));
const toggleReadStatus = (book) => {
    return {
        ...book,
        isRead: true,
    };
};
const myBook = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024,
};
console.log(toggleReadStatus(myBook));
// Problem 6
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
;
const student = new Student("Alice", 20, "A");
console.log(student.getDetails());
// Problem 7
const getIntersection = (arr1, arr2) => {
    return arr1.filter((num) => arr2.includes(num));
};
console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
//# sourceMappingURL=solutions.js.map