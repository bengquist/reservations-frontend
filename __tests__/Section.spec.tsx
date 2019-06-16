import * as React from "react";
import { mount } from "enzyme";
import Section from "../components/ui/Section";
import { ThemeProvider } from "styled-components";
import { theme } from "../components/styles/theme";

const setup = () =>
  mount(
    <ThemeProvider theme={theme}>
      <Section
        label="Reservation Name:"
        placeholder="Blake"
        value=""
        setValue={jest.fn}
      />
    </ThemeProvider>
  );

describe("Section", () => {
  it("renders and matches snapshot", () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it("shows Input as default child", () => {
    const wrapper = setup();

    const input = wrapper.find("Input");
    expect(input).not.toBeNull();
  });

  it("shows children if passed in", () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Section
          label="Reservation Name:"
          placeholder="Blake"
          value=""
          setValue={jest.fn}
        >
          <div className="child">I am a child</div>
        </Section>
      </ThemeProvider>
    );

    const child = wrapper.find(".child");
    expect(child).not.toBeNull();
  });
});
