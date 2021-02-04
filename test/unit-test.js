import { expect } from 'chai';
import { getNameWithInitials } from '../index';

describe("getNameWithInitials", () => {
    it("should give name with initials", () => {
        expect(getNameWithInitials("Albus Severus Potter").to.eq("A. S. Potter"))
    })
});