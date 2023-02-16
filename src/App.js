import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import Header from "./componets/Header";
import InviteComp from "./componets/InviteComp/InviteComp";
import OfferComp from "./componets/OfferComp/OfferComp";

import {bestHotels} from "./assets/data/bestHotels";
import {popularHotel} from "./assets/data/popularHotel";
import IndividualOffer from "./componets/IndividualOfferer";
import PrincipleWork from "./componets/PrincipleWork/PrincipleWork";
import ReviewSlider from "./componets/rewiewSlider/ReviewSlider";
import ArticlesComp from "./componets/ArticlesComp/ArticlesComp";
import PopularDestinations from "./componets/PopularDestinations/PopularDestinations";
import MailingComp from "./componets/MailingComp/MailingComp";
import Footer from "./componets/Footer/Footer";

import LoadingPage from "./componets/LoadingPage/LoadingPage";

function App() {
    const [loading, setLoading] = React.useState(false)

    const loaderFunc = () => {
        setTimeout(() => {
            setLoading(true)
        }, [1000])
        console.log(loading)
    }

    React.useEffect(() => {
        window.addEventListener('load', loaderFunc);
        return () => {
            window.removeEventListener('load', loaderFunc)
        }
    }, [])

    setTimeout(() => {
        setLoading(true)
        console.log(loading)
    }, [5000])

    return (
        <>
            {
                loading ?
                    (
                        <>
                            <div className='mainBg flex flex-col items-center'>
                                <div className='container-xxl'>
                                    <Header/>
                                    <InviteComp/>
                                </div>
                            </div>
                            <main className='flex flex-col items-center'>
                                <div className='container-xxl'>
                                    <OfferComp data={bestHotels} title="Лучшие предложения"
                                               description="Предложения, которые могут быть интересны"/>
                                    <OfferComp data={popularHotel} title="Поппулярные предложения"
                                               description="Предложения, которые могут быть интересны"/>
                                </div>

                                <IndividualOffer className='max-w-full'/>

                                <div className='container-xxl'>
                                    <PrincipleWork/>

                                    <ReviewSlider/>

                                    <ArticlesComp/>

                                    <PopularDestinations/>
                                </div>
                                <MailingComp/>
                            </main>
                            <Footer/>
                        </>
                    )
                    : <LoadingPage />
            }
        </>
    );
}

export default App;
