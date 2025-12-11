import { formatCurrency } from "../../scripts/utils/money.js";

describe("test suite: formatCurrency", () => {
  //suite name
  it("converts cents into dollars", () => {
    //test case name
    expect(formatCurrency(2095)).toEqual("20.95"); //like if condition
  });

  //second test case

  it("works with 0", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });

  //third test case

  it("rounds up to the nearest cent", () => {
    expect(formatCurrency(2000.5)).toEqual("20.01");
  });

  //fourth test case
  it("exercise question", () => {
    expect(formatCurrency(2000.4)).toEqual("20.00");
  });
});
