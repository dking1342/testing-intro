import chai from "chai";

const expect = chai.expect;

// simple examples of expects with manual input/outputs
// expect(true).to.be.false;
// expect(true).to.be.true;

// setting up expects
const titleCase = (title) => {

    const words = title
        .split(" ")
        .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())
        .join(" ")

    return words;
}

expect(titleCase("the great mouse detective")).to.be.a("string");
expect(titleCase("a")).to.equal("A");
expect(titleCase("vertigo")).to.equal("Vertigo");
expect(titleCase("the great mouse detective")).to.be.equal("The Great Mouse Detective");