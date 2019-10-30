import Vue from "vue";
import Router from "vue-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import EditProfile from "../pages/EditProfile";
import MyFollows from "../pages/MyFollows";
import MyComments from "../pages/MyComments";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      name:'Home',
      component:Home
    },
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
    },
    {
      path: "/editprofile",
      name: "EditProfile",
      component: EditProfile
    },
    {
      path: "/myfollows",
      name: "MyFollows",
      component: MyFollows
    },
    {
      path: "/mycomments",
      name: "MyComments",
      component: MyComments
    },
  ]
});
