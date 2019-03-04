import { types, onSnapshot } from 'mobx-state-tree';
import uniqid from 'uniqid';

import Todo from './Todo';
import User from './User';
import todos from '../mocks/todos';
import users from '../mocks/users';

const RootStore = types
  .model({
    todos: types.array(Todo),
    users: types.array(User)
  })
  .views(self => ({
    get usersIds() {
      return self.users.map(user => user.id);
    }
  }))
  .actions(self => ({
    addTodo(name, assignee = 0) {
      const id = uniqid();

      self.todos.push(Todo.create({ id, name, assignee }));
    },

    addUser(name) {
      const id = uniqid();
      self.users.push(User.create({ name, id }));
    },

    deleteTodo(todoId) {
      const deletedTodoIndex = self.todos.findIndex(todo => todo.id === todoId);

      self.todos.splice(deletedTodoIndex, 1);
    }
  }));

const store = RootStore.create({ todos, users });

onSnapshot(store, data => {
  console.log(data);
});

export default store;
