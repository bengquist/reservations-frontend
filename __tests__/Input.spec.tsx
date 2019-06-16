import * as React from "react";
import { mount } from "enzyme";
import { ThemeProvider } from "styled-components";
import { theme } from "../components/styles/theme";
import Input from "../components/ui/Input";

const setup = (props?: React.ComponentPropsWithoutRef<"input">) =>
  mount(
    <ThemeProvider theme={theme}>
      <Input {...props} />
    </ThemeProvider>
  );

describe("Input", () => {
  it("renders and matches snapshot", () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it("contains input element", () => {
    const wrapper = setup();

    const input = wrapper.find("input");

    expect(input).not.toBeNull();
  });

  it("accepts onChange prop", () => {
    const wrapper = setup({ onChange: jest.fn });

    const input = wrapper.find("input");

    expect(input.prop("onChange")).toEqual(jest.fn);
  });

  it("toggles onChange prop", () => {
    const onChange = jest.fn();

    const wrapper = setup({ onChange, value: "" });

    const input = wrapper.find("input");

    input.simulate("change", { target: { value: "Hilton" } });

    expect(onChange).toHaveBeenCalled();
  });
});
