import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../Components/Login";

const setup = () => render(<Login />);
let testState = {
  email: "",
  invalidEmail: "",
  password: "",
  invalidPassword: "",
  confirmPassword: "",
  invalidConfirmPassword: "",
};

const typeIntoElement = ({ email, password, confirmPassword }) => {
  const emailInputElement = screen.getByRole("textbox", { name: /email/i });
  const passwordInputElement = screen.getByLabelText(/^password$/i);
  const confirmPasswordInputElement =
    screen.getByLabelText(/^confirm password$/i);
  if (email) {
    userEvent.type(emailInputElement, email);
  }
  if (password) {
    userEvent.type(passwordInputElement, password);
  }
  if (confirmPassword) {
    userEvent.type(confirmPasswordInputElement, confirmPassword);
  }
};

const clickOnSubmitButton = () => {
  const submitBtnElement = screen.getByRole("button", { name: /submit/i });
  userEvent.click(submitBtnElement);
};

const getElements = () => {
  const emailInputElement = screen.getByRole("textbox", { name: /email/i });
  const passwordInputElement = screen.getByLabelText(/^password$/i);
  const confirmPasswordInputElement =
    screen.getByLabelText(/^confirm password$/i);
  const emailErrorElement = screen.queryByText(
    /the email you entered is invalid/i
  );
  const passwordErrorElement = screen.queryByText(
    /the password you entered is invalid/i
  );
  const confirmPasswordErrorElement = screen.queryByText(
    /the passwords do not match/i
  );

  return {
    emailInputElement,
    passwordInputElement,
    confirmPasswordInputElement,
    emailErrorElement,
    passwordErrorElement,
    confirmPasswordErrorElement,
  };
};



// beforeEach(() => {
//   render(<Login />)
// });

// afterEach(() => cleanup() );

describe("Login Tests", () => {

  beforeAll(() => {
    testState = {
      ...testState,
      email: "joe@example.com",
      invalidEmail: "joeexample.com",
      password: "password123QWQ@#",
      invalidPassword: "123",
      confirmPassword: "password123QWQ@#",
      invalidConfirmPassword: "1234",
    };
  });

  describe("confirming input functionality", () => {
    test("inputs should be initially empty", () => {
      setup();
      const {
        emailInputElement,
        passwordInputElement,
        confirmPasswordInputElement,
      } = getElements();
      expect(emailInputElement.value).toBe("");
      expect(passwordInputElement.value).toBe("");
      expect(confirmPasswordInputElement.value).toBe("");
    });
  
    test("should be able to type an email", () => {
      setup();
      const { emailInputElement } = getElements();
      const { email } = testState;
      expect(emailInputElement.value).toBe("");
      typeIntoElement({ email });
      expect(emailInputElement.value).toBe(email);
    });
  
    test("should be able to type a password", () => {
      setup();
      const { passwordInputElement } = getElements();
      const { password } = testState;
      expect(passwordInputElement.value).toBe("");
      typeIntoElement({ password });
      expect(passwordInputElement.value).toBe(password);
    });
  
    test("should be able to type a confirmed password", () => {
      setup();
      const { confirmPasswordInputElement } = getElements();
      const { confirmPassword } = testState;
      expect(confirmPasswordInputElement.value).toBe("");
      typeIntoElement({ confirmPassword });
      expect(confirmPasswordInputElement.value).toBe(confirmPassword);
    });
  });

  describe("error handling", () => {
    test("should show email error message on invalid email", () => {
      setup();
      const { emailErrorElement: emailBeforeClick } = getElements();
      const { invalidEmail } = testState;
  
      expect(emailBeforeClick).toBeNull();
      typeIntoElement({ email: invalidEmail });
      clickOnSubmitButton();
  
      const { emailErrorElement: emailAfterClick } = getElements();
      expect(emailAfterClick).not.toBeNull();
    });
  
    test("should show password error message on invalid password", () => {
      setup();
      const { passwordErrorElement: passwordBeforeClick } = getElements();
      const { invalidPassword } = testState;
  
      expect(passwordBeforeClick).toBeNull();
      typeIntoElement({ password: invalidPassword });
      clickOnSubmitButton();
  
      const { passwordErrorElement: passwordAfterClick } = getElements();
      expect(passwordAfterClick).not.toBeNull();
    });
  
    test("should show confirm password error message on invalid confirm password", () => {
      setup();
      const { confirmPasswordErrorElement: confirmPasswordBeforeClick } =
        getElements();
      const { invalidPassword, invalidConfirmPassword } = testState;
  
      expect(confirmPasswordBeforeClick).toBeNull();
      typeIntoElement({
        password: invalidPassword,
        confirmPassword: invalidConfirmPassword,
      });
      clickOnSubmitButton();
  
      const { confirmPasswordErrorElement: confirmPasswordAfterClick } =
        getElements();
      expect(confirmPasswordAfterClick).not.toBeNull();
    });
  
    test("should show no errors when logging in and successful log in criteria", () => {
      setup();
      const {
        emailErrorElement,
        passwordErrorElement,
        confirmPasswordErrorElement,
      } = getElements();
      const { email, password, confirmPassword } = testState;
  
      typeIntoElement({ email, password, confirmPassword });
      clickOnSubmitButton();
  
      expect(emailErrorElement).toBeNull();
      expect(passwordErrorElement).toBeNull();
      expect(confirmPasswordErrorElement).toBeNull();
    });
  });

});
