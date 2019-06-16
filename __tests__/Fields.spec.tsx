import * as React from "react";
import { shallow } from "enzyme";
import Fields from "../components/reservation/Fields";

const defaultValues = {
  name: "",
  hotelName: "",
  arrivalDate: new Date(),
  departureDate: new Date(),
  errorMessage: ""
};

describe("Fields", () => {
  it("renders and matches snapshot", () => {
    const wrapper = shallow(
      <Fields values={defaultValues} onInput={jest.fn} />
    );

    console.log(wrapper.debug());
  });
});
