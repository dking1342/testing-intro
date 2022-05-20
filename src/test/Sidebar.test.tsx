import { render, screen } from "@testing-library/react";
import SideBar from "../components/SideBar";
import { SidebarObject } from "../types/sidebar";


describe("sidebar component tests", () => {
  const items: SidebarObject[] = [{
      name:"test",
      href:"/test"
    }]
  const setup = (items:SidebarObject[]) => render(<SideBar items={items} />);

  it("renders items as the props", () => {
    setup(items);
    const anchorElements = screen.getAllByRole("navigation");
    expect(anchorElements[0]).toHaveTextContent(items[0].name);
    expect(anchorElements[0]).toHaveAttribute("href", items[0].href);
  });
});