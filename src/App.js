import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { ReactDOM, useRef } from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

import MainPage from "./Pages/MainPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import DetailMobil from "./Pages/DetailMobil";
import Profile from "./Pages/Profile";
import Riwayat from "./Pages/Riwayat";
import Pembayaran from "./Pages/Pembayaran";
import Persyaratan from "./Pages/Persyaratan";
import TentangKami from "./Pages/TentangKami";

import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

function App() {
    const tawkMessengerRef = useRef();

    const handleMinimize = () => {
        tawkMessengerRef.current.minimize();
    };
    return (
        <div className="App">
            <button onClick={handleMinimize}> Minimize the Chat </button>
            {/* <MainPage /> */}
            <TawkMessengerReact
                propertyId="638e47bab0d6371309d2c267"
                widgetId="1gjhsgcvg"
                ref={tawkMessengerRef}
            />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/tentangkami" component={TentangKami} />
                    <Route exact path="/riwayat" component={Riwayat} />
                    <Route
                        exact
                        path="/pembayaran/:id"
                        component={Pembayaran}
                    />
                    <Route
                        exact
                        path="/persyaratan/:id"
                        component={Persyaratan}
                    />
                    <Route
                        exact
                        path="/detailmobil/:id"
                        component={DetailMobil}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
