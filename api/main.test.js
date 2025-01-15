const {it, describe} = require('node:test')
const assert = require('node:assert')


function add(a, b) {
    return a + b;
}

describe('add()', () => {
    it("should add positive numbers", () => {
        assert.strictEqual(add(2, 2), 4, '2 + 2 = 4!!!!!!')
    })
    it("Should add negative Numbers", () => {
        assert.strictEqual(add(-5, -5), -10, '-5 + -5 = -10!!!!')
    })
})