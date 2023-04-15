import Home03 from "./Home03";
import Signin from "./Signin";
import Signup from "./Signup";

const routes = [
  { path: '/', component: <Home03 />},
  { path: '/home-03', component: <Home03 />},
  { path: '/signup', component: <Signup />},
  { path: '/signin', component: <Signin />},
  
]

export default routes;