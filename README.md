# TODO App in TypeScript

A simple TODO application built using **TypeScript** and **Vanilla JavaScript**. The app allows users to create tasks, mark them as completed, and delete them. The project showcases DOM manipulation, form validation, and list rendering using TypeScript.

## Features

- Add new tasks to the TODO list.
- Mark tasks as completed.
- Delete tasks from the list.
- Input validation to ensure meaningful task names.
  - Tasks must not be empty.
  - Task names must have more than 2 characters.

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/lemon-sazu/todo-typescript.git
   ```

2. **Navigate to the project folder**
   ```bash
   cd todo-typescript
   ```

3. **Install dependencies (if applicable)**
   This project does not rely on external dependencies, but if you plan to integrate a build system or package manager:
   ```bash
   npm install
   ```

## Usage

1. Open the `index.html` file in your browser.
2. Use the input field to add tasks to your TODO list.
3. Click `Done` to mark a task as completed.
4. Click `Delete` to remove a task.

## Code Structure

- **`Todo` Interface**: Defines the structure of a task (name and completed status).
- **Key DOM Elements**:
  - `header`: Displays the title of the app.
  - `listBox`: Contains the input field, button, and list of tasks.
  - `listData`: The unordered list where tasks are displayed.
- **Functions**:
  - `addItem(name: string)`: Adds a new task to the list.
  - `removeItem(index: number)`: Deletes a task from the list.
  - `randerTodos()`: Updates the DOM to reflect the current state of the `todos` array.

## Validation Rules

- If the input field is empty, an error message is displayed: `Task Name should not be empty`.
- If the task name is less than 3 characters, another error message is displayed: `Task Name length should be more than 2 characters`.
- Both error messages are removed when the user provides valid input.

## Screenshots

![TODO App Screenshot](public/Screenshot_1.png)

## Contributing

Contributions are welcome! If you'd like to improve the app, follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add a new feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

