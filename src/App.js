import './App.css';
import Header from "./componets/Header";
import InviteComp from "./componets/InviteComp/InviteComp";
import OfferComp from "./componets/OfferComp/OfferComp";

import {bestHotels} from "./assets/data/bestHotels";
import {popularHotel} from "./assets/data/popularHotel";
import IndividualOffer from "./componets/IndividualOfferer";
import PrincipleWork from "./componets/PrincipleWork/PrincipleWork";

function App() {
    return (
        <>
            <div className='mainBg flex flex-col items-center'>
                <div className='container'>
                    <Header/>
                    <InviteComp/>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <div className='container'>
                    <OfferComp data={bestHotels} title="Лучшие предложения" description="Предложения, которые могут быть интересны"/>
                    <OfferComp data={popularHotel} title="Поппулярные предложения" description="Предложения, которые могут быть интересны"/>

                    <IndividualOffer />
                    <PrincipleWork />
                </div>
            </div>
        </>
    );
}

export default App;
