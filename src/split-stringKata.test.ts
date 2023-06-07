import { splitString } from "./split-stringKata";

describe("split string kata", () => {
    it("should return an empty array when empty string is input", () => {
      expect(splitString("")).toEqual([]);
    });
    it("should split a string with '_' appended at the end for odd characters", () => {
      expect(splitString("abcde")).toEqual(['ab','cd','e_']);
    });
    it("should split a string for even characters", () => {
      expect(splitString("abcdef")).toEqual(['ab','cd','ef']);
    });
    it("should split a string for even a single character with '_' appended", () => {
      expect(splitString("a")).toEqual(['a_']);
    });
  });
  