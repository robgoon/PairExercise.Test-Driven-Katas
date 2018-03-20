const wrap = require('./wrap');
const { expect } = require('chai');

describe('wrap', () => {
    it('Returns empty string if empty string was provided', () => {
      expect(wrap("", 10)).to.equal("");
    });

    it('Returns empty string if wrap number is 0', () => {
        expect(wrap("", 0)).to.equal("");
        expect(wrap("The", 0)).to.equal("");
        expect(wrap("Little", 0)).to.equal("");
        expect(wrap("Engine", 0)).to.equal("");
        expect(wrap("That", 0)).to.equal("");
        expect(wrap("Could", 0)).to.equal("");
        expect(wrap("Wicked Witch of the West", 0)).to.equal("");
    });

    it('Correctly wraps lorem ipsum statement', () => {
        expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20))
        .to.equal("Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.");
    });
});

