let courses = [
  {
    id: 1,
    title: "ReactJS Tutorial",
    rating: 4.2,
  },
  {
    id: 2,
    title: "Angular Tutorial",
    rating: 2.5,
  },
  {
    id: 3,
    title: "VueJS Tutorial",
    rating: 3.8,
  },
  {
    id: 4,
    title: "Java Tutorial",
    rating: 4,
  },
  {
    id: 5,
    title: "JavaScript Tutorial",
    rating: 3.5,
  },
];
let addedCourses = [
  {
    id: 6,
    title: "PHP Tutorial",
    rating: 3,
  },
  {
    id: 7,
    title: "C# Tutorial",
    rating: 2,
  },
  {
    id: 8,
    title: "Docker Tutorial",
    rating: 3.8,
  },
];
const destructuring = [...courses, ...addedCourses];
console.log(destructuring);
const result = courses.filter((el) => el.rating >= 4);
const result2 = courses.filter((el) => el.rating < 4);
console.log(result);
console.log(result2);

// bài tập a Chánh
// bai 1
let soNguyenTo = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
let mangSoNguyen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mangSoNguyenTo = mangSoNguyen.filter((so) => soNguyenTo(so));
console.log(mangSoNguyenTo);
//2
const person = {
  firstName: undefined,
  lastName: "Doe",
  age: 30,
  gender: "male",
  occupation: "developer",
  nationality: "American",
  city: "New York",
  hobbies: ["reading", "traveling", "photography"],
  language: ["English", "Spanish"],
  education: {
    degree: "undefined",
    major: "Computer Science",
    university: "Harvard University",
  },
};
//bai 2
let {
  firstName,
  gender,
  education: { degree },
  language,
} = person;
let student = {
  firstName,
  gender,
  degree,
  english: language[0],
};
console.log(student);
//bai3
const getInfo = ({ firstName = "Quân", degree = "N/A" }) => {
  const student = {
    firstName,
    degree,
  };
  console.log(student);
};
getInfo(student);
