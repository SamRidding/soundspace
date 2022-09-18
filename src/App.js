import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import LogInForm from "./pages/auth/LogInForm";
import TrackUploadForm from "./pages/tracks/TrackUploadForm";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <h1>Home page</h1>} />
        <Route exact path="/login" render={() => <LogInForm />} />
        <Route exact path="/signup" render={() => <SignUpForm />} />
        <Route exact path="/tracks/upload" render={() => <TrackUploadForm />} />
      </Switch>
    </div>
  );
}

export default App;
