// const greet = (name: string): string => {
//     return `Hello, ${name}!`;
//   };
  
//   console.log(greet("Alex"));

// was testing my typescript code up there

// Define the TodoItem interface
interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date;
  }
  
  // Implement the TodoList class
  class TodoList {
    private todos: TodoItem[] = [];
    private nextId: number = 1;
  
    // Add a new todo item
    addTodo(task: string, dueDate: Date): void {
      this.todos.push({ id: this.nextId++, task, completed: false, dueDate });
    }
  
    // Mark a todo item as completed
    completeTodo(id: number): void {
      const todo = this.todos.find((t) => t.id === id);
      if (!todo) {
        console.error(`Todo with ID ${id} not found.`);
        return;
      }
      todo.completed = true;
    }
  
    // Remove a todo item
    removeTodo(id: number): void {
      this.todos = this.todos.filter((t) => t.id !== id);
    }
  
    // List all todo items
    listTodos(): TodoItem[] {
      return this.todos;
    }
  
    // Filter todos by completion status
    filterTodos(completed: boolean): TodoItem[] {
      return this.todos.filter((t) => t.completed === completed);
    }
  
    // Update the task description
    updateTodo(id: number, newTask: string): void {
      const todo = this.todos.find((t) => t.id === id);
      if (!todo) {
        console.error(`Todo with ID ${id} not found.`);
        return;
      }
      todo.task = newTask;
    }
  
    // Clear all completed todos
    clearCompleted(): void {
      this.todos = this.todos.filter((t) => !t.completed);
    }
  }
  
  // Example usage
  const myTodoList = new TodoList();
  myTodoList.addTodo("Finish TypeScript project", new Date("2025-03-10"));
  myTodoList.addTodo("Read a new book", new Date("2025-03-15"));
  myTodoList.completeTodo(1);
  console.log(myTodoList.listTodos());
  console.log("Incomplete Todos:", myTodoList.filterTodos(false));
  
  