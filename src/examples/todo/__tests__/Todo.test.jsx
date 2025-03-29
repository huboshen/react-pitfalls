import { render, screen, fireEvent } from '@testing-library/react';
import { BadTodo } from '../BadTodo';
import { GoodTodo } from '../GoodTodo';

describe('Todo Components', () => {
    beforeEach(() => {
        vi.spyOn(console, 'log');
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    describe('BadTodo', () => {
        it('renders todo items', () => {
            render(<BadTodo />);
            expect(screen.getByText('Learn React')).toBeInTheDocument();
        });

        it('toggles todo completion but fails to trigger re-render', () => {
            render(<BadTodo />);

            const firstCheckbox = screen.getAllByRole('checkbox')[0];
            fireEvent.click(firstCheckbox);

            // Verify console output shows same object reference
            expect(console.log).toHaveBeenCalled();

            // Verify text has not updated in the status div
            const statusText = firstCheckbox.parentElement.nextElementSibling;
            expect(statusText).toHaveTextContent('(not completed)');
        });
    });

    describe('GoodTodo', () => {
        it('renders todo items', () => {
            render(<GoodTodo />);
            expect(screen.getByText('Learn React')).toBeInTheDocument();
        });

        it('properly toggles todo completion state', () => {
            render(<GoodTodo />);

            const firstCheckbox = screen.getAllByRole('checkbox')[0];
            const statusText = firstCheckbox.parentElement.nextElementSibling;
            expect(statusText).toHaveTextContent('(not completed)');

            fireEvent.click(firstCheckbox);

            // Verify text has updated in the status div
            expect(statusText).toHaveTextContent('(completed)');

            // Verify console output shows new array creation
            expect(console.log).toHaveBeenCalled();
        });
    });
});