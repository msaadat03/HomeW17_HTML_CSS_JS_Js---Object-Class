// let stu1 = {
//   name: "Saadat",
//   surname: "Mursaliyeva",
//   age: 23,
//   phoneNumbers: [124578, 124578],
//   groups: [
//     {
//       name: "P130",
//       room: "Sirius",
//       teachers: [
//         {
//           name: "Cavid",
//           age: 28,
//         },
//         {
//           name: "Rovsen",
//           age: 22,
//         },
//       ],
//     },
//     {
//       name: "Dl104",
//       room: "Pluton",
//       teachers: ["Cavid", "Gulnar"],
//     },
//   ],
// };

// for (const item of stu1.groups) {
//   if (item.room == "Sirius") {
//     console.log(item.name);
//   }
// }

// let teacherFullData = () => {
//   for (const item of stu1.groups) {
//     if (item.name == "P130") {
//       for (const teacher of item.teachers) {
//         if (teacher.name == "Cavid") {
//           return `${tecaher.name} - ${teacher.age}`;
//         }
//       }
//     }
//   }
// };

// console.log(teacherFullData());

// function setGroupTeacher(groupName) {
//   return `${teacherFullData()} ${groupName}`;
// }

// let setGroupTeacher = (groupName) => {
//   let teacherData = teacherFullData();

//   return `${teacherData} ${groupName}`;
// };

// let group = "P130";

// console.log(setGroupTeacher(group));

// for (const item of stu1.phoneNumbers) {
//     if (item == 32434) {
//         console.log(stu1.name);
//     }
// }

// let isExist = stu1.phoneNumbers.includes(124578);

// if (isExist) {
//     console.log("Var");
// }else{
//     console.log("Yoxdur");
// }

// let stu2 = {
//   name: "Fidan",
//   surname: "Merdanli",
//   age: 33,
// };

// let stu3 = {
//   name: "Togrul",
//   surname: "Quluzade",
//   age: 22,
// };

// let students = [stu1, stu2, stu3];

// for (const item of students) {
//     console.log(item["name"]);
//     console.log(item.name + " " + item.surname);
// }

// let stu1 = {
//     id:1,
//     name:"Saadat",
//     surname:"Mursaliyeva"
// }

// let stu2 = {
//     id:2,
//     name:"Fidan",
//     surname:"Merdanli"
// }

// let stu3 = {
//     id:3,
//     name:"Togrul",
//     surname:"Quluzade"
// }

// let stu4 = {
//     id:4,
//     name:"Emil",
//     surname:"Abdullayev"
// }

// let group = {
//     name: "P130",
//     capacity: 5,
//     students: [],
//     addStudent: function (stu) {

//         //find method alternative
//         // let student = this.students.filter(m=>m.id == stu.id);

//         // if(student.length != 0){
//         //     console.log("Already exist");
//         //     return;
//         // }

//         let student = this.students.find(m=>m.id == stu.id);

//         if(student != undefined){
//             console.log("Already exist");
//             return;
//         }

//         if (this.students.length != this.capacity) {
//             this.students.push(stu);
//             return;
//         }
//         console.log("Yer yoxdu")

//     }
// }

// group.addStudent(stu1)
// group.addStudent(stu2)
// group.addStudent(stu3)
// group.addStudent(stu4)
// group.addStudent(stu4)

// function Book(name,author){
//     this.name = name;
//     this.author = author;

//     function getFullData(){
//         console.log(name + "-" +author)
//     }

// }

// let book = new Book("Xosrov","Nizami");

// Book.prototype.pageCount = 55;

// Book.prototype.getAuthor = function (){
//     console.log(author)
// }

// console.log(book)

// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;

//     }

//     getFullName() {
//         console.log(this.name + " " + this.surname)
//     }
// }

// class Employee extends Person {

// }

// let employee = new Employee("Fidan", "Merdanli")

// employee.getFullName()

// console.log(employee.surname)

// let group = {
//   name: "P130",
//   capacity: 5,
//   students: [],
//   addStudent: function (stu) {
//     if (this.students.length != this.capacity) {
//       this.students.push(stu);
//       return;
//     }
//     console.log("Yer yoxdur");
//   },
// };

// group.addStudent("Orxan");
// group.addStudent("Togrul");
// group.addStudent("Seid");
// group.addStudent("Cavidan");
// group.addStudent("Eshqin");

// console.log(group.students);