import { Switch, Route } from 'react-router-dom';
import Order from './Order/Order';
import Profile from './Profile/ProfilePage';

function App() {
  return (
    <>
     <Switch>
     <Route exact path="/order" render={(props) => <Order {...props}  />} />
        <Route path="/" render={(props) => <Profile {...props} />} />
      </Switch>
    </>
  );
}

export default App;
