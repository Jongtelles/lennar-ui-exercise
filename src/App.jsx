import logo from "./assets/logo.svg";
import illustration from "./assets/illustration.svg";
import chevron from "./assets/chevron.svg";
import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Button } from "./components/Button/Button";

function App() {
  const handleSubmit = event => {
    event.preventDefault();
    alert("email address submitted");
    // do graphQL stuff
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
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email'
            />
            <Button className="indigo">Start free trial</Button>
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
