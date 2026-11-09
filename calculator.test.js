import test from 'node:test';
import assert from 'node:assert';
import { add, subtract, multiply, divide } from './calculator.js';

test('Addition', () => {
    assert.strictEqual(add(1, 2), 3);
});

test('Subtraction', () => {
    assert.strictEqual(subtract(10, 5), 5);
});

test('Multiplication', () => {
    assert.strictEqual(multiply(10, 5), 50);
});

test('Division', () => {
    assert.strictEqual(divide(10, 5), 2);
});

test('Division by zero', () => {
    assert.throws(() => divide(10, 0), Error);
});