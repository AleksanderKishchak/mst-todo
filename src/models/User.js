import { types } from 'mobx-state-tree';

const User = types.model({
  id: types.identifier,
  name: types.string
});

export default User;
