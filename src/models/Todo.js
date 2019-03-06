import { types } from 'mobx-state-tree';

import User from './User';

const Todo = types
  .model({
    id: types.identifier,
    title: types.string,
    completed: false,
    userId: types.maybe(types.reference(User))
  })
  .actions(self => ({
    toggle() {
      self.completed = !self.completed;
    },

    setTitle(title) {
      self.title = title;
    }
  }));

export default Todo;
