import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import "./App.css";
import { Lottery } from "./comp-ts/lottery/Lottery";

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>header</h1>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="mainWrapper">
            <ul className="list">
              <NavLink className={"navLinks"} to={"/"}></NavLink>
              <NavLink className={"navLinks"} to={"/boxing"}>
                boxing
              </NavLink>
              <NavLink className={"navLinks"} to={"/lottery"}>
                lottery
              </NavLink>
              <NavLink className={"navLinks"} to={"/basket_total"}>
                basket total
              </NavLink>
            </ul>

            <section className="sectionCarusel">
              <Routes>
                <Route path={"/boxing"} element={<h1>text</h1>}></Route>
                <Route path={"/lottery"} element={<Lottery />}></Route>
                <Route path={"/basket_total"} element={<h1>text</h1>}></Route>
              </Routes>
            </section>
          </div>
        </div>
      </main>

      <footer>
        <div className="container">
          <h2>footer</h2>
        </div>
      </footer>
    </div>
  );
}

export default App;
