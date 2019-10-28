import Vue from "vue";
import Router from "vue-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    }
  ]
});
