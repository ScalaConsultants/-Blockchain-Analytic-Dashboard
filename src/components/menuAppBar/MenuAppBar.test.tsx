import React from "react";
import { mount, shallow } from "enzyme";
import ButtonAppBar from "./MenuAppBar";
import { MemoryRouter } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";

describe("MenuAppBar", () => {
  const props = {
    data: "test"
  };

  it("should base render", () => {
    const wrapper = shallow(<ButtonAppBar {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render only once", () => {
    const wrapper = shallow(<ButtonAppBar {...props}/>);
    expect(wrapper).toHaveLength(1);
  });

  it("should render with one ButtonAppBar element", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ { pathname: "/", key: "testKey" } ]}>
      <ButtonAppBar {...props}/>
    </MemoryRouter>
    );
    expect(wrapper.find(ButtonAppBar)).toHaveLength(1);
  });

  it("should render with one AppBar element", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ { pathname: "/", key: "testKey" } ]}>
        <ButtonAppBar {...props}/>
      </MemoryRouter>
    );
    const buttonAppBarElement = wrapper.find(ButtonAppBar);
    expect(buttonAppBarElement.find(AppBar)).toHaveLength(1);
  });

  it("should render with one Toolbar element", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ { pathname: "/", key: "testKey" } ]}>
        <ButtonAppBar {...props}/>
      </MemoryRouter>
    );
    const buttonAppBarElement = wrapper.find(ButtonAppBar);
    expect(buttonAppBarElement.find(Toolbar)).toHaveLength(1);
  });

  it('should render with one Button element', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ { pathname: '/', key: 'testKey' } ]}>
        <ButtonAppBar {...props}/>
      </MemoryRouter>
    );
    const buttonAppBarElement = wrapper.find(ButtonAppBar);
    expect(buttonAppBarElement.find(Button)).toHaveLength(1);
  });

  it("should render with one IconButton element", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ { pathname: "/", key: "testKey" } ]}>
        <ButtonAppBar {...props}/>
      </MemoryRouter>
    );
    const buttonAppBarElement = wrapper.find(ButtonAppBar);
    expect(buttonAppBarElement.find(IconButton)).toHaveLength(1);
  });

  it("should render with one MenuIcon element", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ { pathname: "/", key: "testKey" } ]}>
        <ButtonAppBar {...props}/>
      </MemoryRouter>
    );
    const buttonAppBarElement = wrapper.find(ButtonAppBar);
    const iconButtonElement = buttonAppBarElement.find(IconButton);
    expect(iconButtonElement.find(MenuIcon)).toHaveLength(1);
  });

  it("should render with one Menu element", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ { pathname: "/", key: "testKey" } ]}>
        <ButtonAppBar {...props}/>
      </MemoryRouter>
    );
    const buttonAppBarElement = wrapper.find(ButtonAppBar);
    expect(buttonAppBarElement.find(Menu)).toHaveLength(1);
  });
});
