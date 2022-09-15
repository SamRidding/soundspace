import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import './api/axiosDefaults'
import SignUpForm from "./pages/auth/SignUpForm";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <h1>Home page</h1>} />
        <Route exact path="/login" render={() => <h1>Log in</h1>} />
        <Route exact path="/signup" render={() => <SignUpForm />} />
      </Switch>
    </div>
  );
}

export default App;
