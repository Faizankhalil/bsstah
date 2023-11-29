import React from "react"
import { Redirect } from "react-router-dom"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// Dashboard
import Dashboard from "../pages/Dashboard/index"

//user
import UsersList from "../pages/users/UsersList"

//Auctioneer
import AuctioneerList from "../pages/Auctioneer/AuctioneerList"
import AuctioneerDetails from "../pages/Auctioneer/AuctioneerDetails"
import CreateAuctioneer from "../pages/Auctioneer/CreateAuctioneer"

//Config
import MainConfig from "../pages/Configurations/MainConfig"
import AuctionConfig from "../pages/Configurations/AuctionConfig"


 const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },
  // //profile
  { path: "/profile", component: UserProfile },

  //User
  { path: "/userList", component: UsersList },

  //Auctioneer
  {path:"/auctioneer-list",component:AuctioneerList},
  {path:"/auctioneer-details/:id",component:AuctioneerDetails},
  {path:"/create-auctioneer",component:CreateAuctioneer},

  //Config
  {path:"/Configuration", component:MainConfig},
  {path:"/Auction-Config",component:AuctionConfig},
  

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
]

export { publicRoutes, authProtectedRoutes }
