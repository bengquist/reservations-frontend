import * as React from "react";
import { mount } from "enzyme";
import { mockReservation } from "../lib/testUtil";
import Detail from "../components/reservation/Detail";
import { RESERVATION_QUERY } from "../components/reservation/query";
import { MockedProvider } from "react-apollo/test-utils";

describe("Detail", () => {
  it("shows reservation name", function() {
    const mocks = [
      {
        request: {
          query: RESERVATION_QUERY
        },
        result: {
          data: {
            reservation: mockReservation()
          }
        }
      }
    ];

    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <Detail id={mockReservation().id} />
      </MockedProvider>
    );
  });
});
