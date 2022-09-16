import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import './api/axiosDefaults'
import SignUpForm from "./pages/auth/SignUpForm";
import LogInForm from "./pages/auth/LogInForm";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <div className={styles.App}>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <h1>Home page</h1>} />
        <Route exact path="/login" render={() => <LogInForm />} />
        <Route exact path="/signup" render={() => <SignUpForm />} />
      </Switch>
    </div>
  );
}

export default App;
