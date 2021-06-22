import React from "react";
import { render,fireEvent,screen ,getByRole} from "@testing-library/react";
import Header from "../../ui/components/Header";

describe("<Header />", () => {

  it("should render the header", () => {
    const {getByTestId} = render(<Header />, {});
    fireEvent.click(getByTestId("homePage")); 
    expect(screen.getByRole('heading',{name: 'GERAL QUIZ'})).toBeInTheDocument();
  });

    it('should match snapshot', ()=>{
      const {container} = render(<Header/>);
      expect(container).toMatchSnapshot();
    });
});
