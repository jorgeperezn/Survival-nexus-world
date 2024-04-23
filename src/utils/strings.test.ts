import { getInitials } from "./strings";

test("firstname and lastname", () => {
  expect(getInitials("Jhon Doe")).toBe("JD");
});

test("firstname only", () => {
  expect(getInitials("Jhon")).toBe("J");
});

test("a longer name", () => {
  expect(getInitials("Jhon Max Doe")).toBe("JM");
});
