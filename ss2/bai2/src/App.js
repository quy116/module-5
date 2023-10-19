import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center">
      <div className="form-signin">
        <form>
          <img
            className="mb-4"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="p-10 text-7xl">Please sign in</h1>
          <div className="form-floating">
            <input
              type="email"
              className="p-5 w-full/2"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label>Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="p-5 w-full/2"
              id="floatingPassword"
              placeholder="Password"
            />
            <label>Password</label>
          </div>
          <div>
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button
            className="flex items-center justify-center p-5 bg-purple-400"
            type="submit"
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
      </div>
    </div>
  );
}

export default App;
