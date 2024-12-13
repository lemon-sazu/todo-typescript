interface Todo {
  name: string,
  completed: boolean
}
const todos: Todo[] = [];


const rootApp = document.getElementById('app');
const header = document.createElement('h1');
header.textContent = 'TODO - TypeScript';
header.style.textAlign = 'center';
const listBox = document.createElement('div')
listBox.style.width = '400px'
listBox.style.margin = '0 auto'
listBox.style.border = '1px solid gray';
listBox.style.padding = '20px';
listBox.style.textAlign = 'center'
const listData = document.createElement('ul');
const create_area = document.createElement('div');
const inputTodo = document.createElement('input');
inputTodo.placeholder = 'Create Todo';
const buttonTodo = document.createElement('button');
buttonTodo.textContent = 'Create New';
buttonTodo.style.marginLeft = '10px';
buttonTodo.addEventListener('click', () => {
  if (inputTodo.value === '') {
    if (!listBox.querySelector('#error-message')) {
      const _empty_name = document.createElement('p');
      _empty_name.textContent = "Task Name should not be empty";
      _empty_name.style.color = 'red';
      _empty_name.id = 'error-message';
      listBox.prepend(_empty_name);
    }
    return;
  }
  if (inputTodo.value.length <= 2) {
    if (!listBox.querySelector('#error-message2')) {
      const _small_name = document.createElement('p');
      _small_name.textContent = "Task Name length should be more then 2 character";
      _small_name.style.color = 'red';
      _small_name.id = 'error-message2';
      listBox.prepend(_small_name);
    }
    return;
  }

  const name: string = inputTodo.value.trim();
  addItem(name);
  const errorMessage = listBox.querySelectorAll('#error-message, #error-message2')
  errorMessage.forEach(error => error.remove())
  inputTodo.value = '';
})
create_area.append(inputTodo);
create_area.append(buttonTodo);
rootApp?.append(header);
rootApp?.append(listBox);
listBox.append(listData);
listBox?.prepend(create_area)

function randerTodos(): void {
  if (!listData) return;
  listData.innerHTML = '';
  todos.forEach((todo, index) => {
    const listItem = document.createElement('li');
    listItem.style.marginBottom = '10px';
    listItem.style.textAlign = 'left';
    listItem.textContent = todo.name;
    listData.append(listItem)
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Done';
    completeBtn.style.marginLeft = '10px';
    completeBtn.addEventListener('click', () => {
      todo.completed = true;
      randerTodos();
    })
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Delete';
    removeBtn.style.marginLeft = '10px';
    removeBtn.addEventListener('click', () => {
      removeItem(index);
    })
    listItem.append(completeBtn)
    if (todo.completed) {
      listItem.append(removeBtn);
      listItem.style.color = 'Green'
    }
  })
}
function removeItem(index: number): void {
  todos.splice(index, 1);
  randerTodos();
}
function addItem(name: string): void {
  todos.push({ name: name, completed: false })
  randerTodos();
}
randerTodos();
