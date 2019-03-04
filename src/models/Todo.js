import { types } from 'mobx-state-tree';

import User from './User';

const Todo = types
  .model({
    id: types.identifier,
    name: types.string,
    done: false,
    assignee: types.maybe(types.reference(User))
  })
  .actions(self => ({
    toggle() {
      self.done = !self.done;
    },

    setName(name) {
      self.name = name;
    }
  }));

export default Todo;
