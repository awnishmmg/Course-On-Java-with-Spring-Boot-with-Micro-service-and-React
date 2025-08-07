import React from "react";
import About from "./components/pages/About";
import Gallery from "./components/pages/Gallery";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Contact from "./components/pages/Contact";
import Not from "./components/pages/Not";

import { Switch, Route, Link } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
          {/* This is comment : dynamic argument  */}
          <Route path="/about/:id" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={Not} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}

export default App;
