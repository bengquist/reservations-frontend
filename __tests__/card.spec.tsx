import * as React from "react";
import { shallow } from "enzyme";
import Card from "../components/reservation/Card";
import { formatDate } from "../lib/formatHelpers";
import { mockReservation } from "../lib/testUtil";

const setup = () => shallow(<Card reservation={mockReservation()} />);

describe("Card", () => {
  it("renders and matches snapshot", () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it("shows reservation name", () => {
    const wrapper = setup();

    const span = wrapper.find("span").at(0);

    expect(span.children().text()).toEqual(mockReservation().name);
  });

  it("shows hotel name", () => {
    const wrapper = setup();

    const span = wrapper.find("span").at(1);

    expect(span.children().text()).toEqual(mockReservation().hotelName);
  });

  it("shows arrival date", () => {
    const wrapper = setup();

    const span = wrapper.find("span").at(2);

    expect(span.children().text()).toEqual(
      formatDate(mockReservation().arrivalDate)
    );
  });

  it("shows departure date", () => {
    const wrapper = setup();

    const span = wrapper.find("span").at(3);

    expect(span.children().text()).toEqual(
      formatDate(mockReservation().departureDate)
    );
  });

  it("show modal on click", () => {
    const wrapper = setup();

    const button = wrapper.find("button");

    button.simulate("click");

    const modal = wrapper.find("Modal");

    expect(modal).not.toBeNull();
  });
});
