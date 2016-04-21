import React from 'react';
import {List, Map} from 'immutable';

import {TodoAppContainer} from './ToDoApp';

export default React.createClass({

  render() {
    return (
      <div>
        <TodoAppContainer />
      </div>
    );
  }
})
