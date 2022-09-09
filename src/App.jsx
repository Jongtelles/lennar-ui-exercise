import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import logo from "./assets/logo.svg";
import illustration from "./assets/illustration.svg";
import chevron from "./assets/chevron.svg";
import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Button } from "./components/Button/Button";

// Define mutation
const CREATE_NEW_USER = gql`
  mutation CreateNewUser($name: String!, $username: String!, $email: String!) {
    createUser(input: { name: $name, username: $username, email: $email }) {
      name
      username
      email
    }
  }
`;

const isValidEmail = email => {
  return /\S+@\S+\.\S+/.test(email);
};

function App() {
  const [addUser] = useMutation(CREATE_NEW_USER);
  const [error, setError] = useState(null);
  let input;

  const handleSubmit = event => {
    event.preventDefault();

    if (!isValidEmail(input.value)) {
      setError("Please enter a valid email address");
      return;
    }

    addUser({
      variables: {
        name: input.value,
        username: input.value,
        email: input.value,
      },
    })
      .then(res => {
        setError(null);
        input = "";
        console.log(res.data);
        // display email to user
        // I would not normally use an alert - this is just a quick implementation for the exercise
        // It needs to be wrapped in setTimout to allow the DOM to update and remove the error message
        setTimeout(() => {
          alert(
            `New user created: ${JSON.stringify(
              Object.values(res.data)[0]["email"],
              null,
              4
            )}`
          );
        }, 1);
      })
      .catch(error => console.error(error.message));
  };

  return (
    <main>
      <Navbar logo={logo} />

      <div className='container'>
        <div className='content--left'>
          <div className='callout'>
            <button className='badge'>We're hiring</button>
            <span className='text-link'>Visit our careers page</span>
            <img src={chevron} className='chevron' alt='chevron icon' />
          </div>
          <h2 className='header'>
            A better way to <br />
            <span>ship web apps</span>
          </h2>
          <p className='supporting-text'>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat.
          </p>
          <form className='email-form' onSubmit={handleSubmit}>
            {error && <p className='error-message'>{error}</p>}
            <input
              ref={node => {
                input = node;
              }}
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email'
            />
            <Button type='submit' className='indigo'>
              Start free trial
            </Button>
          </form>
          <p>
            Start your free 14-day trial, no credit card necessary. By providing
            your email, you agree to our <strong>terms of service</strong>.
          </p>
        </div>
        <div className='content--right'>
          <img
            src={illustration}
            className='illustration'
            alt='Illustration representing user profiles communicating with the cloud'
          />
        </div>
      </div>
    </main>
  );
}

export default App;
