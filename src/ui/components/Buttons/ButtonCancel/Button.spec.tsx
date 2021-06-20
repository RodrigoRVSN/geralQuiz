import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonCancel from ".";

describe("<ButtonCancel />", () => {
  it("should renter the button", () => {
    render(<ButtonCancel />);
  });
});
