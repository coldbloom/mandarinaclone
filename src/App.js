import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css'

import {Routes, Route} from "react-router-dom";

import Header from "./componets/Header";
import Footer from "./componets/Footer/Footer";

import Home from "./pages/Home";
import TourSearch from "./pages/TourSearch/TourSearch";
import Contacts from "./pages/Contacts/Contacts";
import Blog from "./pages/Blog/Blog";
import GetOffer from "./pages/GetOffer/GetOffer";

import LoadingPage from "./componets/LoadingPage/LoadingPage";

function App() {
    const [loading, setLoading] = React.useState(false)

    const loaderFunc = () => {
        setTimeout(() => {
            setLoading(true)
        }, [1000])
    }

    React.useEffect(() => {
        window.addEventListener('load', loaderFunc);
        return () => {
            window.removeEventListener('load', loaderFunc)
        }
    }, [])

    setTimeout(() => {
        setLoading(true)
    }, [5000])

    return (
        <>
            {
                loading ?
                    (
                        <>
                            <Header/>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/search" element={<TourSearch />} />
                                <Route path="/contacts" element={<Contacts />} />
                                <Route path="/blog" element={<Blog />}/>
                                <Route path="/get-offer" element={<GetOffer />}/>
                            </Routes>
                            <Footer/>
                        </>
                    )
                    : <LoadingPage />
            }
        </>
    );
}

export default App;
