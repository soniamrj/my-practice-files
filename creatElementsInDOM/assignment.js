const ppl = [
  {
    name: "Yolo Nyunyo",
    profession: "Mums little boy",
    age: "34",
    hobbies: [
      "Nyunyoing around",
      "full time kutule"
    ]
  },
  {
    name: "Alex Madrina",
    profession: "football player",
    age: "24",
    hobbies: [
      "watching netflix",
      "playing guitar"
    ]
  },
  {
    name: "jack savureti",
    profession: "singer",
    age: "21",
    hobbies: [
      "playing ppiano",
      "reading books"
    ]
  }
];

const mainDiv = document.querySelector('.person');
const appDiv = document.getElementById('app')


const Name = person => {
  const p = document.createElement('p');
  p.textContent = "name: " + person.name;
  return p;
}

const Age = person => {
  const p = document.createElement('p');
  p.textContent = "age: " + person.age;
  return p;
}

const Profession = person => {
  const p = document.createElement('p');
  p.textContent = "profession: " + person.profession;
  return p;
}

const Hobbies = person => {
  const p = document.createElement('p');
  p.textContent = "hobbies: " + person.hobbies;
  return p;
}

const line = person => {
  const p = document.createElement('hr');
  return p;
}


const personalInfo = (person) => {
  const personald = document.createElement('div');
  personald.setAttribute('class', 'personal');
  personald.appendChild(Profession(person));
  personald.appendChild(Hobbies(person));
  return personald;
}
const generateDiv = (person) => {
  const d = document.createElement('div');
  d.setAttribute('class', 'person');
  d.append(Name(person));
  d.append(Age(person));
  d.append(line(person));
  d.appendChild(personalInfo(person));
  return d;
}


function insertppl() {
  for (let i = 0; i < ppl.length; i++) {


    appDiv.append(generateDiv(ppl[i]));

  }
}

insertppl();