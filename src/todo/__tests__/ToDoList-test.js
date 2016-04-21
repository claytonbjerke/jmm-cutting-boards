'use strict';

jest.unmock('../ToDoList');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import TodoList from '../TodoList';
import {List, Map} from 'immutable';

const {renderIntoDocument,
       scryRenderedDOMComponentsWithTag} = TestUtils;

describe('TodoList', () => {
   it('renders all items in list', () => {
      const todos = [{id: 1, text: 'React', status: 'active'},
         {id: 2, text: 'Redux', status: 'active'},
         {id: 3, text: 'Immutable', status: 'completed'}];
      const filter = 'active';
      const component = renderIntoDocument(
         <TodoList filter={filter} todos={todos}/>
      );
      const items = scryRenderedDOMComponentsWithTag(component, 'li');
      expect(items.length).toEqual(2);
   });
});
