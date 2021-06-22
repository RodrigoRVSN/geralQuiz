import React from "react";
import { render } from "@testing-library/react";
import ButtonSearch from "../../ui/components/Buttons/ButtonSearch";

describe("<ButtonSearch />", () => {

  it("should render the button search", () => {
    render(<ButtonSearch />);
  });
});
