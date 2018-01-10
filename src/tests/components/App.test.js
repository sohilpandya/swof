import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../components/App';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


test('App Component shows intial information when firt loaded', () => {

  // 1. Initial render of the component
  const component = renderer.create(
    <App />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // // 2. Manually Trigger getEmployeeName
  // console.log(tree);

  // tree.props.getEmployeeName();
  //   // rerenders the component
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});
