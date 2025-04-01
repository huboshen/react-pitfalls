import { render, screen, act, fireEvent } from '@testing-library/react';

import { BadTimer } from '../BadTimer';
import { GoodTimer } from '../GoodTimer';

describe('Timer Components', () => {
    beforeEach(() => {
        vi.useFakeTimers();
        vi.spyOn(console, 'log');
    });

    afterEach(() => {
        vi.restoreAllMocks();
        vi.useRealTimers();
    });

    describe('BadTimer', () => {
        it('renders with initial count of 0', () => {
            render(<BadTimer />);
            expect(screen.getByText('Count: 0')).toBeInTheDocument();
        });

        it('starts timer when button is clicked', () => {
            render(<BadTimer />);

            // click the start button
            fireEvent.click(screen.getByText('Start'));

            // fast forward 1 second
            act(() => {
                vi.advanceTimersByTime(1000);
            });

            expect(screen.getByText('Count: 1')).toBeInTheDocument();
        });

        it('creates multiple intervals when dependencies change', () => {
            render(<BadTimer />);

            // click the start button
            fireEvent.click(screen.getByText('Start'));

            // fast forward 1 second
            act(() => {
                vi.advanceTimersByTime(1000);
            });

            // fast forward 1 second again
            act(() => {
                vi.advanceTimersByTime(1000);
            });

            // check if the timer has been incremented twice
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Bad timer tick'), expect.any(Number));
            const badTimerLogCalls = console.log.mock.calls.filter(call =>
                call[0] && call[0].toString().includes('Bad timer tick')).length;

            // expect the timer to have been called more than once
            expect(badTimerLogCalls).toBeGreaterThan(1);
        });
    });

    describe('GoodTimer', () => {
        it('renders with initial count of 0', () => {
            render(<GoodTimer />);
            expect(screen.getByText('Count: 0')).toBeInTheDocument();
        });

        it('properly increments count with single interval', () => {
            render(<GoodTimer />);

            // click the start button
            fireEvent.click(screen.getByText('Start'));

            // fast forward 2 second
            act(() => {
                vi.advanceTimersByTime(2000);
            });

            expect(screen.getByText('Count: 2')).toBeInTheDocument();

            // check if the timer has been incremented once
            expect(console.log).not.toHaveBeenCalledWith('Cleaning up timer');
        });

        it('cleans up interval when component unmounts', () => {
            const { unmount } = render(<GoodTimer />);

            // click the start button
            fireEvent.click(screen.getByText('Start'));

            unmount();

            // check if the timer has been cleaned up
            expect(console.log).toHaveBeenCalledWith('Cleaning up timer');
        });
    });
});