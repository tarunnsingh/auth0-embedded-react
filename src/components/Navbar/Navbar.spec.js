// import React from "react";
// import { render, screen } from "@testing-library/react";
// import Navbar from "./Navbar";
// import "@testing-library/jest-dom";
// import Enzyme, { shallow, mount } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import { AuthContext } from "../../context/AuthContext";
// Enzyme.configure({ adapter: new Adapter() });

// describe("non-shallow render", () => {
//   const isAuthenticated = true;
//   const wrapper = mount(
//     <AuthContext.Provider value={isAuthenticated}>
//       <Navbar />
//     </AuthContext.Provider>
//   );
//   test("Should test Navbar with mocking the conntext", () => {
//     wrapper = shallow(<Navbar />);
//     wrapper.find("NavLink").contains("Home");
//   });
// });

// describe("Testing the Navbar - Home + Profile Tab", () => {
//   it("Should test Navbar with mocking the conntext", () => {
//     jest.spyOn(React, "useContext").mockImplementation((AuthContext) => ({
//       isAuthenticated: true,
//     }));

//     const myComponent = shallow(<Navbar />).dive();
//     expect(myComponent).toMatchSnapShot();
//     homeTab = screen.getByText(/Home/i);
//     proileTab = screen.getByText(/Profile/i);
//     expect(homeTab).toBeInTheDocument();
//     expect(profileTab).toBeInTheDocument();
//   });
// });

// describe("Testing the Navbar - Login + Register Tab", () => {
//   it("Should test Navbar with mocking the conntext", () => {
//     jest.spyOn(React, "useContext").mockImplementation(() => ({
//       isAuthenticated: false,
//     }));

//     const myComponent = shallow(<Navbar />).dive();
//     expect(myComponent).toMatchSnapShot();
//     LoginTab = screen.getByText(/Login/i);
//     RegisterTab = screen.getByText(/Register/i);
//     expect(LoginTab).toBeInTheDocument();
//     expect(RegisterTab).toBeInTheDocument();
//   });
// });

// describe("Dashboard Component Tests - Logged in", () => {
//   beforeEach(() => {
//     useAuth0.mockReturnValue({
//       isAuthenticated: true,
//       user,
//       logout: jest.fn(),
//       loginWithRedirect: jest.fn(),
//       getAccessTokenWithPopup: jest.fn(),
//       getAccessTokenSilently: jest.fn(),
//       getIdTokenClaims: jest.fn(),
//       loginWithPopup: jest.fn(),
//       isLoading: false,
//     });
//   });
//   test("Logout Button displays when Logged in", () => {
//     render(<Dashboard />);
//     const logoutButton = screen.getByText(/Logout/i);
//     expect(logoutButton).toBeInTheDocument();
//   });
// });

// describe("Dashboard Component Tests - Logged out", () => {
//   beforeEach(() => {
//     useAuth0.mockReturnValue({
//       isAuthenticated: false,
//       user: null,
//       login: jest.fn(),
//       loginWithRedirect: jest.fn(),
//       getAccessTokenWithPopup: jest.fn(),
//       getAccessTokenSilently: jest.fn(),
//       getIdTokenClaims: jest.fn(),
//       loginWithPopup: jest.fn(),
//       isLoading: false,
//     });
//   });
//   test("Login Button displays when Logged out", () => {
//     render(<Dashboard />);
//     const loginButton = screen.getByText(/Login/i);
//     expect(loginButton).toBeInTheDocument();
//   });
// });
