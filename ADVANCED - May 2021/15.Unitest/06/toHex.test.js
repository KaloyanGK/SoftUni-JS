let rgbToHexColor = require(`./toHex`);
let { expect } = require(`chai`);

describe(`rgbToHexColor`, function () {
    it(`this is correct test`, function () {
        expect(rgbToHexColor(255, 255, 255)).to.equal(`#FFFFFF`)
    });
    it(`this is correct test`, () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal(`#000000`)
    });
    it(`this is true - missing element`, () => {
        expect(rgbToHexColor(0, 0)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
        expect(rgbToHexColor(0,)).to.be.undefined;
    });
    it(`invalid lower boundary`, () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });
    it(`invalid upper boundary`, () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });
})