import chai from "chai";
import { takeTurn } from "../game_logic/ship_methods.js";

const expect = chai.expect;

describe("GAME INSTANCE FUNCTIONS", () => {
    describe("checkGameStatus", () => {
        // pending test
        it("should tell me when the game is over");
    })

    // mock and stub tests
    describe("takeTurn", () => {
        let guess, player;

        // input of stub inputs to make test happen
        beforeEach(()=> {
            guess = () => {
                return [0, 0];
            }
            player = {
                ships:[
                    { locations: [[0, 0]], damage: [] }
                ]
            }
        })
        it("should return false if the game ends", () => {
            const actual = takeTurn(player, guess);
            expect(actual).to.be.false;
        })
    })
});

// pending items
xdescribe("GAME INSTANCE FUNCTIONS 2", () => {
    describe("checkGameStatus", () => {
        // pending test
        it("should tell me when the game is over", () => {});
    })
});



