import * as React from "react";
import { shallow } from "enzyme";
import CreatePage from "../pages/create";

describe("Pages", () => {
  describe("Create", () => {
    it("should render without throwing an error", function() {
      const page = shallow(<CreatePage />);

      console.log(page);
    });
  });
});
