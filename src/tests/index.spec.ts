import { createClasses, getClasses } from "../index";

describe('Testing createClasses function', () => {

  it('Should instantiate new Set', () => {
    const testClass = 'test';
    const newClasses = createClasses(testClass);

    expect(newClasses).toBeDefined();
    expect(newClasses instanceof Set).toBeTruthy();
    expect(newClasses.has(testClass)).toBeTruthy();
    expect(newClasses.size).toBe(1);
  })
})