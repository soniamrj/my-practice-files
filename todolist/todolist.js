/**
 const aTodo = {
   id: 1,
   text: "Play PUBG",
   isDone: false
 };
 */

/**
  CRUD => Create, Read, Update, Delete
  DB => Server => Frontend
  Fronted ====REQUEST====>Server ====DB qeury ====> Database
  ==== Query done => Server ====RESPONSE ===> Frontend
  */

/**
   The local storage.
   */

/**
   * 4 features.
   1. Add new todos to our list.
    - Button, which on click triggers adding todos.
    - An input which recieves the text of the input. 
   2. Display the list of todos.
    - an element that renders the list on screen .
    - add id to the list items.
   3. Being able to edit already defined todos.
    - edit button , which on click triggers editing todos.
   4. Delete todos.
    - delete button 
*/

const addButton = document.getElementById("add-btn");
const addContainer = document.getElementById("add-container");
const newTaskUserInput = addContainer.querySelector("input");
const list = document.querySelector("ul");
const backdrop = document.querySelector(".backdrop");
const addToListButton = document.querySelector(".add");
const cancelButton = document.querySelector(".cancel");
let tasks = [];

const togglebackdrop = () => {
  backdrop.classList.toggle("visible");
};
const toggleAddContainer = () => {
  addContainer.classList.toggle("invisible");
}

addToListButton.addEventListener("click", () => {
  if(newTaskUserInput.value === ''){
    alert('you can not add an empty text to the list');
    return;
  }
  createUserTask(newTaskUserInput.value);
  newTaskUserInput.value = "";
  renderToDOM();
  toggleAddContainer();
  togglebackdrop();
});

cancelButton.addEventListener("click", () => {
  newTaskUserInput.value = "";
  toggleAddContainer()
  togglebackdrop();
});

backdrop.addEventListener('click', () => {
  newTaskUserInput.value = "";
  toggleAddContainer()
  togglebackdrop();
});


// the upside code is what i added today .
function createUserTask(task) {
  const checkbox = document.querySelector('.checkbox');
  const newTask = {
    text: task,
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    isDone: false
  };
  tasks.push(newTask);
  // addNewTask(newTask.text, newTask.id);
}

newTaskUserInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    createUserTask(e.target.value);
    newTaskUserInput.value = "";
    renderToDOM();
    toggleAddContainer()
    togglebackdrop();
  }
});

addButton.addEventListener("click", () => {
  toggleAddContainer()
  togglebackdrop();
});

const renderToDOM = () => {
  list.innerHTML = "";
  for (let task of tasks) {
    const el = createTaskElement(task);
    list.appendChild(el);
  }
};

const createTaskElement = (task) => {
  const newTaskElement = document.createElement("li");
  newTaskElement.innerHTML = `
  <div class = list-container>
  <p >${task.text}</p>
  <label for ="edit-input" class = "invisible">After Editing Press Enter :</label>
  <input value='${task.text}' class="invisible" name = 'edit-input' type="text"/>
  <input class= 'checkbox' type = 'checkbox'>
  <div class = 'action'>
  <button class = 'btn cancel delete-btn'>DELETE</button>
  <button class = 'btn add edit-btn'>EDIT</button>
  </div>
  </div>
  `;
  handleEventListeners(newTaskElement, task.id);
  return newTaskElement;
};


const handleEventListeners = (el, id) => {
  const deleteButton = el.querySelector(".delete-btn");
  const editButton = el.querySelector(".edit-btn");
  const pTag = el.querySelector("p");
  const editInput = el.querySelector("input");

  
  const checkbox = document.querySelector('.checkbox');

  editInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      for (const task of tasks) {
        if (id === task.id) {
          task.text = editInput.value;
        }
      }
      console.log(tasks);
      renderToDOM();
      el.querySelector(`p`).classList.toggle("invisible");
      el.querySelector(`input`).classList.toggle("invisible");
    }
  });
  
  deleteButton.addEventListener("click", () => {
    
    for (const task of tasks) {
      if (id === task.id) {
        const taskIndex =tasks.findIndex(task => {return task.id === id});
        console.log(taskIndex);
        tasks.splice(taskIndex, 1);
      } 
    }
    renderToDOM();
  });

  editButton.addEventListener("click", (e) => {
    el.querySelector(`p`).classList.toggle("invisible");
    el.querySelector(`input`).classList.toggle("invisible");
    el.querySelector(`label`).classList.toggle("invisible");

  });

};


