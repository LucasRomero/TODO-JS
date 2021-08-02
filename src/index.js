import './styles.css';
import { Todo, TodoList } from "./classes";
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach(element => {
//     crearTodoHtml(element);
// });

// esto siempre le va a enviar el primer argumento que regresa el foreach, osea en este caso seria el "todo" y eso mismo se lo pasa a la funcion crearTodoHtml(),
// es lo mismo que la funcion documentaba arriba.
todoList.todos.forEach(crearTodoHtml); 

// todoList.todos[0].imprimirClase();

// console.log('todos', todoList.todos);