import { expect } from "chai";
import { describe, it } from "mocha";
import { getLastDelegation } from "../code/ceremonie"

describe("return the last delegation", function(){
    it("should return Estonia", function(){
        expect(getLastDelegation([
            "Chili 101 2", "Estonia 58 1", "Romania 102 3", "Ecuator 103 4", "Mada 104 5", "Oman 50 1", "Nicaragua 51 3", "Yemen 53 4"
        ])).to.equal("Estonia");
    });
    it("should return Chili", function(){
        expect(getLastDelegation([
            "Chili 101 2", "Mada 104 5", "Romania 102 3"
        ])).to.equal("Chili");
    });
});