import React from 'react';

import './SearchPage.scss'
import hotelStar from '../../assets/images/hotel-star.svg'

import Header from "../../componets/Header";
import InviteComp from "./components/InviteComp";
import MainForm from "../../componets/mainForm/mainForm";
import {useParams, useSearchParams} from "react-router-dom";
import axios from "axios";

import "swiper/css";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Thumbs} from "swiper";
import OffersCountComp from "./components/OffersCountComp";
import SearchPageHotelCard from "./components/SearchPageHotelCard/SearchPageHotelCard";

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const [tours, setTours] = React.useState()
    console.log(Object.fromEntries([...searchParams]));
    let {townFrom: townFrom, countryCode: countryCode, adult: adult, child: child, data: data, nights_max: nights_max, nights_min: nights_min, price_range_min: price_range_min, price_range_max: price_range_max, page: page, sort: sort} = Object.fromEntries([...searchParams])


    React.useEffect(() => {
        let url = `http://91.203.69.22/api/search-tours?townFrom=${townFrom}&countryCode=${countryCode}&adult=${adult}&child=${child}&data=${data}&nights_min=${nights_min}&nights_max=${nights_max}&price_range_min=${price_range_min}&price_range_max=${price_range_max}&sort=${sort}&page=${page}`
        axios.get(url)
            .then(response => setTours(response.data))
    }, [])
    console.log(tours, 'request data - tours')

    return (
        <>
        <div className='search-page'>
            <div className='bg-gray-wrapper'>
                <Header/>
            </div>
            <InviteComp />
            <div className='container-xxl'>
                <MainForm />
            </div>
           <OffersCountComp hotelsCount={tours?.total}/>
            <div className='container-xxl container_search_result'>
                <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-12 col-lg-8 search_col-8'>
                        <div className='row search_row_mb'>
                            {
                                tours?.data.map((hotel, i) => (
                                    <SearchPageHotelCard hotel={hotel} key={i}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default SearchPage;