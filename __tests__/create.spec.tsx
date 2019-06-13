import * as React from "react";
import { shallow } from "enzyme";
import Card from "../components/reservation/Card";
import mockReservation from "../__mocks__/mockReservation";
import { formatDate } from "../lib/formatHelpers";

describe("Reservation", () => {
  describe("Card", () => {
    it("shows reservation name", function() {
      const page = shallow(<Card reservation={mockReservation} />);

      const span = page.find("span").at(0);

      expect(span.children().text()).toEqual(mockReservation.name);
    });
    it("shows hotel name", function() {
      const page = shallow(<Card reservation={mockReservation} />);

      const span = page.find("span").at(1);

      expect(span.children().text()).toEqual(mockReservation.hotelName);
    });
    it("shows arrival date", function() {
      const page = shallow(<Card reservation={mockReservation} />);

      const span = page.find("span").at(2);

      expect(span.children().text()).toEqual(
        formatDate(mockReservation.arrivalDate)
      );
    });
    it("shows departure date", function() {
      const page = shallow(<Card reservation={mockReservation} />);

      const span = page.find("span").at(3);

      expect(span.children().text()).toEqual(
        formatDate(mockReservation.departureDate)
      );
    });
  });
});
