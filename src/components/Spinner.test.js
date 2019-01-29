import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Spinner from "./Spinner";

configure({ adapter: new Adapter() });

describe("Spinner Component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Spinner />);
  });
});
