import * as React from "react";
import { formatDate } from "../lib/formatHelpers";
import { mockReservation } from "../lib/testUtil";
import { preventDefault } from "../lib/eventHelpers";
import { mount } from "enzyme";
import { isValidDate } from "../lib/common";

describe("Helpers", () => {
  describe("Format", () => {
    it("formats the date correctly", () => {
      const arrivalDate = formatDate(mockReservation().arrivalDate);
      const departureDate = formatDate(mockReservation().departureDate);

      expect(arrivalDate).toEqual("Jun 9th, 2019");
      expect(departureDate).toEqual("Jun 19th, 2019");
    });
  });

  describe("Event", () => {
    it("calls event handler", () => {
      const eventHandler = jest.fn();
      const form = mount(<form onSubmit={preventDefault(eventHandler)} />);

      form.simulate("submit");

      expect(eventHandler).toHaveBeenCalled();
    });
  });

  describe("Common", () => {
    it("returns correct validation", () => {
      const isValid = isValidDate("10/12/2019");
      const isNotValid = isValidDate("10-12-2019");

      expect(isValid).toBe(true);
      expect(isNotValid).toBe(false);
    });
  });
});
