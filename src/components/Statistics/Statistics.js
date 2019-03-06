import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

const Statistics = props => {
  const { store } = props;

  return (
    <div className="statistics">
      <span>
        Progress: {store.completedCount}/{store.todosCount}
      </span>
    </div>
  );
};

Statistics.propTypes = {
  store: PropTypes.object.isRequired
};

export default observer(Statistics);
