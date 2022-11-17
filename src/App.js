import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

import MainPage from "./Pages/MainPage";
import Login from "./Pages/Login";

function App() {
    return (
        <div className="App">
            {/* <MainPage /> */}
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
