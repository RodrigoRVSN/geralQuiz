import React from "react";
import { render } from "@testing-library/react";
import ButtonCancel from "../../ui/components/Buttons/ButtonCancel";

describe("<ButtonCancel />", () => {

  it("should render the button cancel", () => {
    render(<ButtonCancel />);
  });
});
