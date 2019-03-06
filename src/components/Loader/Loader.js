import React from 'react';

import './Loader.css';

function Loader() {
  return (
    <div className="loader-wrapper">
      <span className="loader-circle" />
      <span className="loader-circle" />
      <span className="loader-circle" />
      <span className="loader-circle" />
    </div>
  );
}

export default Loader;
