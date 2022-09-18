import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import LogInForm from "./pages/auth/LogInForm";
import TrackUploadForm from "./pages/tracks/TrackUploadForm";
import TrackPage from "./pages/tracks/TrackPage";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <h1>Home page</h1>} />
        <Route exact path="/login" render={() => <LogInForm />} />
        <Route exact path="/signup" render={() => <SignUpForm />} />
        <Route exact path="/tracks/upload" render={() => <TrackUploadForm />} />
        <Route exact path="/tracks/:id" render={() => <TrackPage />} />
      </Switch>
    </div>
  );
}

export default App;
