import * as React from "react";
import { mount } from "enzyme";
import { mockReservation } from "../lib/testUtil";
import Detail from "../components/reservation/Detail";
import { RESERVATION_QUERY } from "../components/reservation/query";
import { MockedProvider } from "react-apollo/test-utils";
import { theme } from "../components/styles/theme";
import { ThemeProvider } from "styled-components";
import wait from "waait";

const mocks = [
  {
    request: {
      query: RESERVATION_QUERY,
      vaiable: { id: mockReservation().id }
    },
    result: {
      data: {
        reservation: {
          ...mockReservation()
        }
      }
    }
  }
];

const setup = () =>
  mount(
    <MockedProvider mocks={mocks}>
      <ThemeProvider theme={theme}>
        <Detail id={mockReservation().id} />
      </ThemeProvider>
    </MockedProvider>
  );

describe("Detail", () => {
  it("renders and matches snapshot", () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
