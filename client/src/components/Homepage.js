import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="login-header">
      <h1>Start Your Workout Now!</h1>
      <div className="Options">
        <div className="Option">
          <Link to="/ClientLogin">
            <button type="Submit">Client Login</button>
          </Link>
        </div>
        <div className="Option">
          <Link to="/TrainerLogin">
            <button type="Submit">Trainer Login</button>
          </Link>
        </div>
        <div className="Option">
          <Link to="/SignUp">
            <button type="Submit">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
