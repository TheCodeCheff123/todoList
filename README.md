# Todo List Application

A simple Todo List application implemented in TypeScript. This application allows users to add, complete, remove, and list todo items with due dates.

## Features

- Add a new todo item with a task description and due date
- Mark a todo item as completed
- Remove a todo item
- List all todo items
- Filter todos by their completed status
- Update the task description of a todo item
- Clear all completed todos

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/todo-list.git
   cd todo-list
   ```

2. Install dependencies (if any):
   ```sh
   npm install
   ```

## Usage

1. Create an instance of `TodoList`:
   ```typescript
   const myTodoList = new TodoList();
   ```

2. Add a new todo item:
   ```typescript
   myTodoList.addTodo("Finish TypeScript project", new Date("2025-03-10"));
   ```

3. List all todos:
   ```typescript
   console.log(myTodoList.listTodos());
   ```

4. Complete a todo:
   ```typescript
   myTodoList.completeTodo(1);
   ```

5. Remove a todo:
   ```typescript
   myTodoList.removeTodo(1);
   ```

6. Filter todos by completion status:
   ```typescript
   console.log(myTodoList.filterTodos(false));
   ```

7. Update a todo item:
   ```typescript
   myTodoList.updateTodo(1, "Finish TypeScript assignment");
   ```

8. Clear all completed todos:
   ```typescript
   myTodoList.clearCompleted();
   ```

## Technologies Used

- TypeScript


## Author

Developed by Alex.

