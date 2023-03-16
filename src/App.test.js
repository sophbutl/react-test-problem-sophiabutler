import { render, screen, fireEvent } from '@testing-library/react';

// import your story from App.stories.js
import { Default, Clicked } from "./App.stories";

// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library
 it('renders a button with initial text "click me"', () => {
    render(<App />);
    expect(screen.getByRole('button')).toHaveTextContent('click me');
  });

  it('changes the button text to "thanks" when clicked', () => {
    render(<App />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(button).toHaveTextContent('thanks');
  });
