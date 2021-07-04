import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/home";
import BookView from "./components/Books";
import Layout from "./Hoc/layout";
import Login from "./containers/Admin/login";
import User from "./components/admin";

import Auth from './Hoc/auth'
import AddBook from "./containers/Admin/add";
import UserPosts from "./components/admin/userPost";
import EditReview from "./containers/Admin/edit";
import Register from './containers/Admin/register'
import Logout from "./components/admin/logout";

export default function Routes() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home,null)} />
        <Route path="/login" exact component={Auth(Login, false)} />
        <Route path="/user" exact component={Auth(User,true)} />
        <Route path="/user/logout" exact component={Auth(Logout,true)} />
        <Route path="/user/user-reviews" exact component={Auth(UserPosts)} />
        <Route path="/user/add" exact component={Auth(AddBook,true)} />
        <Route path="/user/register" exact component={Auth(Register,true)} />
        <Route path="/user/edit-post/:id" exact component={Auth(EditReview,null)} />
        <Route path="/books/:id" exact component={Auth(BookView,null)} />
        
        
      </Switch>
    </Layout>
  );
}
