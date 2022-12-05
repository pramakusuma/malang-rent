import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { ReactDOM } from "react";
import { EasybaseProvider, useEasybase } from "easybase-react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

import MainPage from "./Pages/MainPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import DetailMobil from "./Pages/DetailMobil";
import Profile from "./Pages/Profile";
import Riwayat from "./Pages/Riwayat";
import Pembayaran from "./Pages/Pembayaran";

function App() {
    return (
        <div className="App">
            {/* <MainPage /> */}
            <EasybaseProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/riwayat" component={Riwayat} />
                        <Route
                            exact
                            path="/pembayaran"
                            component={Pembayaran}
                        />
                        <Route
                            exact
                            path="/detailmobil/:id"
                            component={DetailMobil}
                        />
                    </Switch>
                </BrowserRouter>
            </EasybaseProvider>
        </div>
    );
}

export default App;
