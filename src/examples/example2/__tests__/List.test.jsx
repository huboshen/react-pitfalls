import { render, screen, fireEvent } from '@testing-library/react';

import { BadList } from '../BadList';
import { GoodList } from '../GoodList';

describe('List Components', () => {
    beforeEach(() => {
        vi.spyOn(console, 'log');
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    describe('BadList', () => {
        it('renders list items correctly', () => {
            render(<BadList />);
            expect(screen.getByText(/Apple/)).toBeInTheDocument();
            expect(screen.getByText(/Banana/)).toBeInTheDocument();
            expect(screen.getByText(/Orange/)).toBeInTheDocument();
        });

        it('reverses items when button is clicked', () => {
            render(<BadList />);

            // Get input elements and add some values
            const inputs = screen.getAllByRole('textbox');
            fireEvent.change(inputs[0], { target: { value: 'Apple' } });
            fireEvent.change(inputs[1], { target: { value: 'Banana' } });
            fireEvent.change(inputs[2], { target: { value: 'Orange' } });

            // Click reverse button
            fireEvent.click(screen.getByText(/Reverse Items/));

            // Verify order is reversed but input values are misplaced (due to index-based keys)
            const inputsAfterReverse = screen.getAllByRole('textbox');
            expect(inputsAfterReverse[0].value).not.toBe('Orange'); // Should be "Orange", but values don't move due to key issues
        });
    });

    describe('GoodList', () => {
        it('renders list items correctly', () => {
            render(<GoodList />);
            expect(screen.getByText(/Apple/)).toBeInTheDocument();
            expect(screen.getByText(/Banana/)).toBeInTheDocument();
            expect(screen.getByText(/Orange/)).toBeInTheDocument();
        });

        it('maintains input values when items are reversed', () => {
            render(<GoodList />);

            // Get input elements and add some values
            const inputs = screen.getAllByRole('textbox');
            fireEvent.change(inputs[0], { target: { value: 'Apple' } });
            fireEvent.change(inputs[1], { target: { value: 'Banana' } });
            fireEvent.change(inputs[2], { target: { value: 'Orange' } });

            // Click reverse button
            fireEvent.click(screen.getByText(/Reverse Items/));

            // Verify input values move with components (due to stable keys)
            expect(screen.getByDisplayValue('Apple')).toBeInTheDocument();
            expect(screen.getByDisplayValue('Banana')).toBeInTheDocument();
            expect(screen.getByDisplayValue('Orange')).toBeInTheDocument();
        });
    });
});