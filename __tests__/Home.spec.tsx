import * as React from "react";
import { mount } from "enzyme";
import List from "../components/reservation/List";
import { mockReservationList } from "../lib/testUtil";
import { RESERVATIONS_QUERY } from "../components/reservation/query";
import { MockedProvider } from "react-apollo/test-utils";

describe("Home", () => {
  it("renders list with correct data", async () => {
    const mocks = [
      {
        request: {
          query: RESERVATIONS_QUERY
        },
        result: {
          data: {
            reservations: mockReservationList()
          }
        }
      }
    ];

    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <List reservations={mockReservationList()} />
      </MockedProvider>
    );

    expect(wrapper.find("span").length).toEqual(16);
  });
});