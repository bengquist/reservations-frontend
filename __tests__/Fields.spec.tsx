import * as React from "react";
import { shallow, mount } from "enzyme";
import Fields from "../components/reservation/Fields";
import { ThemeProvider } from "styled-components";
import { theme } from "../components/styles/theme";

const defaultValues = {
  name: "",
  hotelName: "",
  arrivalDate: new Date("06-16-2019"),
  departureDate: new Date("06-17-2019"),
  errorMessage: ""
};

const setup = () =>
  shallow(<Fields values={defaultValues} onInput={jest.fn} />);

describe("Fields", () => {
  it("renders and matches snapshot", () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it("renders section inputs", () => {
    const wrapper = setup();

    const sections = wrapper.find("Section");

    expect(sections.length).toEqual(4);
  });
});
