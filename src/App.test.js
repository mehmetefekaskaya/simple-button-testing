import { logRoles } from '@testing-library/react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// test('renders learn react', () => {
//   render(<App />);
//   const linkElement = screen.getByRole('link', { name: /sadass/i }); // We should use getByRole insteaad of getByText to find element because getByRole has higher prioerity. Check https://testing-library.com/docs/queries/about/#priority. By the way, getByRole takes two argument. First argument is the role we are looking for and the second argument is an object which we can define options. In this case, we  used name option which represents text inside the role we are loooking for.
//   // const linkElement = screen.getByText(/learn React/i);
//   expect(linkElement).toBeInTheDocument()
// })

// We can read the role whenever possible to make sure that my elements are accessible by screen readers.
/*
  So how do we know to look for which role?
    Check this link: https://www.w3.org/TR/wai-aria/#role_definitions
    This definitions of roles tell you what roles are possible. We can add a role to any element, like a div, by using role attribute. Role can be anything in that link.
      <div className="App" role="cell">
  Some elements are built in roles. A button, for example, has automatically a rule of button. And as we just saw, an anchor element whşch is <a>, has a role of link.
*/
/*
  If we can't find an element like a screen reader would?
    then our app isn't friendly to screen readers.
*/

test('button has correct initial color', () => {
  const { container } = render(<App />);
  // logRoles(container)
  // find an element with a role of button and the text of 'Change to Blue' 
  const buttonElement = screen.getByRole('button', { name: 'Change to Blue' });
  // expect the background color to be red
  expect(buttonElement).toHaveStyle({ 'background-color': 'red' })
  // click button

})

// test('button has correct initial text', () => {

// })

test('button turns blue when clicked', () => {
  render(<App />);
  // find an element with a role of button and the text of 'Change to Blue' 
  const buttonElement = screen.getByRole('button', { name: 'Change to Blue' });
  // expect the background color to be red
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveStyle({ 'background-color': 'blue' })
})

test('button text changes when clicked', () => {
  render(<App />);
  // find an element with a role of button and the text of 'Change to Blue' 
  const buttonElement = screen.getByRole('button', { name: 'Change to Blue' });
  // expect the background color to be red
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('Change to Red')
})