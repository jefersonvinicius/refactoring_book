import { Province, sampleProvinceData } from "./main";

describe("province", () => {
    it("shortfall", () => {
        const asia = new Province(sampleProvinceData());
        expect(asia.shortfall).toBe(5);
    });
});
