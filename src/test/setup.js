import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from '@testing-library/jest-dom';

// ref: https://www.npmjs.com/package/@testing-library/jest-dom#with-vitest
expect.extend(matchers);

// clearup dom after each test
afterEach(() => {
    cleanup();
});