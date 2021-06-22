import React from "react";
import { fireEvent, render, getByRole, screen} from "@testing-library/react";
import Footer from "../../ui/components/Footer";

describe("<Footer />", () => {

  it("should render the Footer and click my github", () => {
    const {getByTestId} = render(<Footer />, {});
    fireEvent.click(getByTestId("aboutLink"));
    expect(screen.getByRole('link',{name: 'Desenvolvido por Rodrigo'})).toBeInTheDocument();
  });

    it('should match snapshot', ()=>{
      const {container} = render(<Footer/>);
      expect(container).toMatchSnapshot();
    });

});
