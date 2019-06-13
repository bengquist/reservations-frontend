import * as React from "react";
import { mount } from "enzyme";
import CreatePage from "../pages/create";

describe("Pages", () => {
  describe("Create", () => {
    it("should render without throwing an error", function() {
      const wrap = mount(<CreatePage />);
      expect(wrap.find("div").text()).toBe("Hello Next.js");
    });
  });
});
