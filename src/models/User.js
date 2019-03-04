import { types } from 'mobx-state-tree';

const User = types.model({
  id: types.identifier,
  name: ''
});

export default User;
