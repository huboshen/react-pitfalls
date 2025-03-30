import { render, screen, fireEvent } from '@testing-library/react';

import { BadCounter } from '../BadCounter';
import { GoodCounter } from '../GoodCounter';

describe('Counter Components', () => {
    beforeEach(() => {
        vi.spyOn(console, 'log');
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    describe('BadCounter', () => {
        it('renders with initial count of 0', () => {
            render(<BadCounter />);
            expect(screen.getByText('Count: 0')).toBeInTheDocument();
        });

        it('increments count when button is clicked', () => {
            render(<BadCounter />);
            fireEvent.click(screen.getByText('Increment'));
            expect(screen.getByText('Count: 1')).toBeInTheDocument();
        });

        it('causes unnecessary renders of StaticComponent', () => {
            render(<BadCounter />);
            console.log.mockClear(); // Clear initial render logs

            fireEvent.click(screen.getByText('Increment'));

            // Verify that StaticComponent is re-rendered
            const staticComponentRenderLogs = console.log.mock.calls.filter(
                call => call[0] === 'Static component rendered'
            );
            expect(staticComponentRenderLogs.length).toBeGreaterThan(0);
        });
    });

    describe('GoodCounter', () => {
        it('renders with initial count of 0', () => {
            render(<GoodCounter />);
            expect(screen.getByText('Count: 0')).toBeInTheDocument();
        });

        it('increments count when button is clicked', () => {
            render(<GoodCounter />);
            fireEvent.click(screen.getByText('Increment'));
            expect(screen.getByText('Count: 1')).toBeInTheDocument();
        });

        it('prevents unnecessary renders with memoization', () => {
            render(<GoodCounter />);
            console.log.mockClear(); // Clear initial render logs

            fireEvent.click(screen.getByText('Increment'));

            // Verify that GoodCounter is re-rendered
            expect(console.log).toHaveBeenCalledWith('Good counter rendered');

            // Verify that StaticComponent is NOT re-rendered
            const staticComponentRenderLogs = console.log.mock.calls.filter(
                call => call[0] === 'Static component rendered'
            );
            expect(staticComponentRenderLogs.length).toBe(0);
        });
    });
});