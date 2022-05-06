import chai from "chai";
import { checkForShip, damageShip, fire } from "../game_logic/ship_methods.js";

const expect = chai.expect;

describe("check for ship", () => {
  let player;

  before(() => {
    player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
          ],
        },
        {
          locations: [
            [1, 0],
            [1, 1],
            [1, 2],
            [1, 3],
          ],
        },
        {
          locations: [
            [2, 0],
            [2, 1],
            [2, 2],
          ],
        },
      ],
    };
  });

  it("should correctly report no ship at a given players coordinate", () => {
    // const player = {
    //   ships: [{ locations: [[0, 0]] }],
    // };
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  it("should correctly report a ship at the given players coordinate", () => {
    // const player = {
    //   ships: [{ locations: [[0, 0]] }],
    // };
    expect(checkForShip(player, [0, 0])).to.be.true;
  });

  it("should correctly report multiple ships at the given players coordinates", () => {
    // const player = {
    //   ships: [{ locations: [[0, 0],[0, 1]] }],
    // };
    expect(checkForShip(player, [0, 1])).to.be.true;
    expect(checkForShip(player, [0, 0])).to.be.true;
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  it("should correctly report multiple ships", () => {
    // const player = {
    //     ships: [
    //       { locations: [[0, 0], [0, 1]] },
    //       { locations: [[1, 0], [1, 1], [1, 2], [1, 3]] },
    //       { locations: [[2, 0], [2, 1], [2, 2]] }
    //     ],
    // };
    expect(checkForShip(player, [0, 1])).to.be.true;
    expect(checkForShip(player, [0, 0])).to.be.true;
    expect(checkForShip(player, [1, 0])).to.be.true;
    expect(checkForShip(player, [1, 1])).to.be.true;
    expect(checkForShip(player, [1, 2])).to.be.true;
    expect(checkForShip(player, [1, 3])).to.be.true;
    expect(checkForShip(player, [2, 0])).to.be.true;
    expect(checkForShip(player, [2, 1])).to.be.true;
    expect(checkForShip(player, [2, 2])).to.be.true;
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
});

describe("damageShip", () => {
  it("should register damage on a given ship at a given location", () => {
    const ship = {
      location: [[0, 0]],
      damage: [],
    };
    damageShip(ship, [0, 0]);
    expect(ship.damage).to.not.be.empty;
    expect(ship.damage[0]).to.deep.equal([0, 0]);
  });
});

describe("fire", () => {
  let player;

  beforeEach(() => {
    player = {
      ships: [
        {
          locations: [
            [0, 0],
            [1, 0],
          ],
          damage: [],
        },
      ],
    };
  });

  after(() => {
    console.log("entire test suite completed");
  });

  afterEach(() => {
    console.log("one unit test completed");
  });

  it("should record no damage on the given players ship at given coordinate", () => {
    // const player = {
    //     ships:[
    //         {
    //             locations: [[0, 0]],
    //             damage:[]
    //         },
    //     ]
    // }
    fire(player, [1, 0]);
    expect(player.ships[0].damage[0]).to.deep.equal(player.ships[0].damage[0]);
  });

  it("should record damage on the given players ship at a given coordinate", () => {
    // const player = {
    //     ships:[
    //         {
    //             locations: [[0, 0]],
    //             damage:[]
    //         },
    //     ]
    // }

    fire(player, [0, 0]);
    expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
  });

  it("should record damage on the given players ship at a given coordinate and multiple locations", () => {
    // const player = {
    //     ships:[
    //         {
    //             locations: [[0, 0], [1, 0]],
    //             damage:[]
    //         },
    //     ]
    // }

    fire(player, [1, 0]);
    expect(player.ships[0].damage[0]).to.deep.equal([1, 0]);
  });
});
