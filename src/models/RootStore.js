import { types, onSnapshot, flow } from 'mobx-state-tree';
import uniqid from 'uniqid';

import Todo from './Todo';
import User from './User';
// import todos from '../mocks/todos';
import users from '../mocks/users';

const RootStore = types
  .model({
    todos: types.array(Todo),
    status: types.enumeration('Status', ['pending', 'done', 'error']),
    users: types.array(User)
  })
  .views(self => ({
    get usersIds() {
      return self.users.map(user => user.id);
    },

    get todosCount() {
      return self.todos.length;
    },

    get completedCount() {
      return self.todos.filter(todo => todo.completed).length;
    }
  }))
  .actions(self => ({
    addTodo(name, userId = 0) {
      const id = uniqid();

      self.todos.push(Todo.create({ id, title: name, userId }));
    },

    addUser(name) {
      const id = uniqid();
      self.users.push(User.create({ name, id }));
    },

    deleteTodo(todoId) {
      const deletedTodoIndex = self.todos.findIndex(todo => todo.id === todoId);

      self.todos.splice(deletedTodoIndex, 1);
    },

    fetchTodos: flow(function* fetchTodos() {
      self.status = 'pending';

      try {
        const response = yield fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = yield response.json();

        todos.length = 10;
        self.todos = todos.map(todo => ({
          ...todo,
          id: `${todo.id}`,
          userId: `${0}`
        }));
        self.status = 'done';
      } catch (error) {
        console.error('Failed to fetch todos', error);
        self.status = 'error';
      }
    })
  }));

const store = RootStore.create({ todos: [], status: 'done', users });

onSnapshot(store, data => {
  console.log(data);
});

export default store;
