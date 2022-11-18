import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { ReactDOM } from "react";
import { EasybaseProvider, useEasybase } from "easybase-react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

import MainPage from "./Pages/MainPage";
import Login from "./Pages/Login";
import DetailMobil from "./Pages/DetailMobil";

function App() {
    return (
        <div className="App">
            {/* <MainPage /> */}
            <EasybaseProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/login" component={Login} />
                        <Route
                            exact
                            path="/detailmobil"
                            component={DetailMobil}
                        />
                    </Switch>
                </BrowserRouter>
            </EasybaseProvider>
        </div>
    );
}

export default App;
