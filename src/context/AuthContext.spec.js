import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { AuthContext, AuthProvider } from "./AuthContext";

// const mockSetIsAuthenticated = jest.fn().mockImplementation(() => {
//     return false
// })

// const mockSetUser = jest.fn().mockImplementation((mockUser) => {
//     return mockUser
// })

// const mockUseContext = jest.fn().mockImplementation(() => {
//     isAuthenticated: false
// })

describe("AuthProvider", () => {
  it("isAuthenticated is false by default", () => {
    const { getByText } = render(
      <AuthProvider>
        <AuthContext.Consumer>
          {(value) => (
            <span>Is authenticated: {value.isAuthenticated.toString()}</span>
          )}
        </AuthContext.Consumer>
      </AuthProvider>
    );
    expect(getByText("Is authenticated: false")).toBeTruthy();
  });
});

describe("Check Login", () => {
  it.todo("sets isAuthenticted to True", () => {
    const { getByText } = render(
      <AuthProvider>
        <AuthContext.Consumer>
          {(value) => (
            <>
              <span>Is logged in: {value.isAuthenticated.toString()}</span>
              <button onClick={value.setIsAuthenticated}>Login</button>
            </>
          )}
        </AuthContext.Consumer>
      </AuthProvider>
    );
    fireEvent.click(getByText("Login"));
    expect(getByText("Is logged in: true")).toBeTruthy();
  });
});

// import React from "react";
// import { AuthContext, AuthProvider } from "./AuthContext";
// import { mount } from "enzyme";

// describe("login", () => {
//     it("Set isAuthenticated to true", () => {
//         const Testcomponent = () => {
//             const {isAuthenticated, setIsAuthenticated} = React.useContext(AuthContext)

//             return (<React.Fragment>
//                 <div data-testid="value">{isAuthenticated.toString()}</div>
//                 <button onClick={setIsAuthenticated(true)}>Login</button>
//             </React.Fragment>)
//         }

//     // const wrapper = mount(
//     //     <AuthProvider>
//     //         <Testcomponent />
//     //     </AuthProvider>
//     // )

// }})
