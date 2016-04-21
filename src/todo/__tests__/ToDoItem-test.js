'use strict';

jest.unmock('../TodoItem');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import TodoItem from '../TodoItem';

const {renderIntoDocument,
       scryRenderedDOMComponentsWithTag} = TestUtils;

describe('TodoItem', () => {
    it('renders an item', () => {
        const text = 'React';
        const component = renderIntoDocument(
          <TodoItem text={text} />
        );
        const todo = scryRenderedDOMComponentsWithTag(component, 'li');

        expect(todo.length).toEqual(1);
        expect(todo[0].textContent).toEqual('React');
    });
});
