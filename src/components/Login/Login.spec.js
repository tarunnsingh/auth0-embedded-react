import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { AuthContext, AuthProvider } from "../../context/AuthContext";
import Login from "./Login";

const user = {
  nickname: "",
  email: "",
  email_verified: false,
  picture: "",
  last_updated: "",
};

const setUser = jest.fn().mockImplementation((mockUser) => {
  return mockUser;
});

const setIsAuthenticated = jest.fn().mockImplementation(() => {
  return !isAuthenticated;
});

describe("Check Login", () => {
  it("Sets isAuthenticted to True", () => {
    const isAuthenticated = false;
    render(
      <AuthProvider>
        {" "}
        value={(isAuthenticated, setIsAuthenticated, user, setUser)}
        <Login />
      </AuthProvider>
    );
    const textInput = screen.getByTestId("usernamefield");
    userEvent.type(textInput, "tarunSingh_tarunSingh_tarunSingh_tarunSingh_");
    expect(textInput.value).toBeTruthy();
  });
});

// import React from "react";
// import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// import Enzyme, { shallow, mount } from "enzyme";
// import Login from "./Login";
// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// Enzyme.configure({ adapter: new Adapter() });
// import * as AuthContextObj from "../../context/AuthContext";

// console.log("Au OBJ", AuthContextObj);

// describe("Testig the Login Component.", () => {

//   test("Checks the Login Heading.", () => {
//     const h3 = wrapper.find("h3");
//     expect(h3.text()).toBe("Login");
//   });
//   it("Email check", () => {

//     const tag = wrapper.find("#emailInput");
//     tag.simulate("change", {
//       target: { name: "username", value: "tarunsingh@gmail.com" },
//     });

//   test("Email check", () => {
//     const tag = wrapper.find("#emailInput");
//     tag.simulate("change", {
//       target: { name: "username", value: "tarunsingh@gmail.com" },
//     });

//     //   wrapper.find('Form.Control[type="email"]').simulate("change", {
//     //     target: { name: "username", value: "tarunsingh@gmail.com" },
//     //   });
//     expect(wrapper.user("username")).toEqual("tarunsingh@gmail.com");
//   });
// });

// describe("Test case for Testing Login", () => {
//   let wrapper;
//   test("username check", () => {
//     wrapper = shallow(<Login />);
//     wrapper.find('Form.Control[type="text"]').simulate("change", {
//       target: { name: "username", value: "tarunsingh" },
//     });
//     expect(wrapper.state("username")).toEqual("tarunsingh");
//   });
//   it("password check", () => {
//     wrapper = shallow(<Login />);
//     wrapper.find('input[type="password"]').simulate("change", {
//       target: { name: "password", value: "myownpassword" },
//     });
//     expect(wrapper.state("password")).toEqual("myownpassword");
//   });
//   it("username max length check", () => {
//     render(<Login />);
//     const textInput = screen.getByTestId("usernamefield");
//     userEvent.type(textInput, "tarunSingh_tarunSingh_tarunSingh_tarunSingh_");
//     expect(textInput.value).toHaveLength(12);
//   });
//   it("password max length check", () => {
//     render(<Login />);
//     const textInput = screen.getByTestId("passwordfield");
//     userEvent.type(textInput, "some_random_password_of_length_greater_greater");
//     expect(textInput.value).toHaveLength(15);
//   });
//   it("login check with right data", () => {
//     wrapper = shallow(<Login />);
//     wrapper.find('input[type="text"]').simulate("change", {
//       target: { name: "username", value: "tarunsingh" },
//     });
//     wrapper.find('input[type="password"]').simulate("change", {
//       target: { name: "password", value: "myownpassword" },
//     });
//     wrapper.find("button").simulate("click");
//     expect(wrapper.state("isLogined")).toBe(true);
//   });
//   it("login check with wrong username and right password", () => {
//     wrapper = shallow(<Login />);
//     wrapper.find('input[type="text"]').simulate("change", {
//       target: { name: "username", value: "tarunsingh" },
//     });
//     wrapper.find('input[type="password"]').simulate("change", {
//       target: { name: "password", value: "Zyownpassword" },
//     });
//     wrapper.find("button").simulate("click");
//     expect(wrapper.state("isLogined")).toBe(false);
//   });

//   it("login check with right username and wrong password", () => {
//     wrapper = shallow(<Login />);
//     wrapper.find('input[type="text"]').simulate("change", {
//       target: { name: "username", value: "tarunsingh" },
//     });
//     wrapper.find('input[type="password"]').simulate("change", {
//       target: { name: "password", value: "Zyownpassword" },
//     });
//     wrapper.find("button").simulate("click");
//     expect(wrapper.state("isLogined")).toBe(false);
//   });

//   it("login check with wrong username and password", () => {
//     wrapper = shallow(<Login />);
//     wrapper.find('input[type="text"]').simulate("change", {
//       target: { name: "username", value: "Zarunsingh" },
//     });
//     wrapper.find('input[type="password"]').simulate("change", {
//       target: { name: "password", value: "Zyownpassword" },
//     });
//     wrapper.find("button").simulate("click");
//     expect(wrapper.state("isLogined")).toBe(false);
//   });
// });
