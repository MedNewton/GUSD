import Home03 from "./Home03";
import Signin from "./Signin";
import Signup from "./Signup";
import Buy from "./buy";
import Profile from "./Profile";

const routes = [
  { path: '/', component: <Home03 />},
  { path: '/home-03', component: <Home03 />},
  { path: '/signup', component: <Signup />},
  { path: '/signin', component: <Signin />},
  { path: '/buy_gusd', component: <Buy />},
  { path: '/profile', component: <Profile />},
  
]

export default routes;