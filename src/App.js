import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import LogInForm from "./pages/auth/LogInForm";
import TrackUploadForm from "./pages/tracks/TrackUploadForm";
import TrackPage from "./pages/tracks/TrackPage";
import TracksPage from "./pages/tracks/TracksPage";
import TrackEdit from "./pages/tracks/TrackEdit";
import { useCurrentUser } from "./contexts/CurrentUserContexts";
import ProfilePage from "./pages/profiles/ProfilePage";
import EditPassword from "./pages/profiles/EditPassword";
import EditProfile from "./pages/profiles/EditProfile";
import EditUsername from "./pages/profiles/EditUsername";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <TracksPage
              filter={`owner__followed__owner__profile=${profile_id}&`}
            />
          )}
        />
        <Route exact path="/login" render={() => <LogInForm />} />
        <Route exact path="/signup" render={() => <SignUpForm />} />
        <Route exact path="/tracks/upload" render={() => <TrackUploadForm />} />
        <Route exact path="/tracks/:id" render={() => <TrackPage />} />
        <Route exact path="/tracks/:id/edit" render={() => <TrackEdit />} />
        <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
        <Route exact path="/profiles/:id/edit" render={() => <EditProfile />} />
        <Route
          exact
          path="/profiles/:id/edit/username"
          render={() => <EditUsername />}
        />
        <Route
          exact
          path="/profiles/:id/edit/password"
          render={() => <EditPassword />}
        />
      </Switch>
    </div>
  );
}

export default App;
