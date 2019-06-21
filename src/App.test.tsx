import React from 'react';
import ReactDOM from 'react-dom';
import ContextApp from './context/contextApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContextApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
