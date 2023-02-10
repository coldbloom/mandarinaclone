import './App.css';
import Header from "./componets/Header";
import InviteComp from "./componets/InviteComp/InviteComp";
import OfferComp from "./componets/OfferComp/OfferComp";

import {bestHotels} from "./assets/data/bestHotels";

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
                <OfferComp data={bestHotels} title="Лучшие предложения" description="Предложения, которые могут быть интересны"/>
            </div>
        </>
    );
}

export default App;
