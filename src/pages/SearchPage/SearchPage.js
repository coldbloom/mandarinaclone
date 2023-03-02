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
import RangeSlider from "./components/RangeSlider/RangeSlider";

import hotelstar from './../../assets/images/hotel-star.svg'
import hotelstarTransporent from '../../assets/images/hotel-star-transporent.svg'

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const [tours, setTours] = React.useState()
    console.log(Object.fromEntries([...searchParams]));
    let {townFrom: townFrom, countryCode: countryCode, adult: adult, child: child, data: data, nights_max: nights_max, nights_min: nights_min, price_range_min: price_range_min, price_range_max: price_range_max, page: page, sort: sort} = Object.fromEntries([...searchParams])

    const [priceMin, setPriceMin] = React.useState()
    const [priceMax, setPriceMax] = React.useState()
    const [nightMin, setNightMin] = React.useState()
    const [nightMax, setNightMax] = React.useState()

    const [checkBox, setCheckBox] = React.useState(false)
    const onChangeCheckBox = () => {

    }

    const setPriceMinFunc = (e) => {
        console.log(e, 'setPriceMinFunc')
    }
    const setPriceMaxFunc = (e) => {
        console.log(e, 'setPriceMaxFunc')
    }
    const setNightMinFunc = (night) => {
        setNightMin(night / 1000)
        console.log(night, 'setNightMinFunc')
    }
    const setNightMaxFunc = (night) => {
        setNightMax(night / 1000)
        console.log(night, 'setNightMaxFunc')
    }


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
                    <div className='col-4 search_filter_result_wrap'>
                        <div className='search_filter_result_body'>
                            <div className='filter_item'>
                                <div className='filter_name'>
                                    Какую гостиницу Вы выбрали?
                                </div>
                                <div className='hotel_search'>
                                    <input type="text" className='select_hotel'/>
                                </div>  
                            </div>
                            <div className='filter_item'>
                                <RangeSlider
                                    initialMin={200}
                                    initialMax={7000}
                                    min={10}
                                    max={9999}
                                    step={100}
                                    step2={10}
                                    priceCap={100}
                                    scaleError={0}
                                    title={"Ценовой диапазон"}
                                    changeMin={setPriceMinFunc}
                                    changeMax={setPriceMaxFunc}
                                />
                            </div>
                            <div className='filter_item'>
                                <div className='filter_name'>Город</div>
                                <div className='hotel_search'>
                                    <input type="text" className='select_hotel'/>
                                </div>
                            </div>
                            <div className='filter_item'>
                                <RangeSlider
                                    initialMin={3000}
                                    initialMax={20000}
                                    min={3000}
                                    max={20000}
                                    step={113}
                                    step2={1000}
                                    priceCap={1000}
                                    scaleError={14}
                                    title={"Кол-во ночей"}
                                    changeMin={setNightMinFunc}
                                    changeMax={setNightMaxFunc}
                                    nightMax={nightMax}
                                    nightMin={nightMin}
                                />
                            </div>
                            <div className='filter_item'>
                                <div className='filter_name'>
                                    Рейтинг гостинницы
                                </div>
                                <div className='wrapper_checkbox'>
                                    <input type="checkbox" className="custom-checkbox" name="stars0" onChange={(e) => onChangeCheckBox(e, 1)}></input>
                                    <div className='stars_hotel'>
                                        <img src={hotelstar} alt=""/>
                                        <img src={hotelstarTransporent} alt=""/>
                                        <img src={hotelstarTransporent} alt=""/>
                                        <img src={hotelstarTransporent} alt=""/>
                                        <img src={hotelstarTransporent} alt=""/>
                                    </div>
                                </div>
                                <div className='wrapper_checkbox'>
                                    <input type="checkbox" className="custom-checkbox" name="stars0" value="100"></input>
                                    <div className='stars_hotel'>
                                        <img src={hotelstar} alt=""/>
                                        <img src={hotelstar} alt=""/>
                                        <img src={hotelstarTransporent} alt=""/>
                                        <img src={hotelstarTransporent} alt=""/>
                                        <img src={hotelstarTransporent} alt=""/>
                                    </div>
                                </div>
                                <div className='wrapper_checkbox'>
                                    <input type="checkbox" className="custom-checkbox" name="stars0" value="100"></input>
                                    <div className='stars_hotel'>
                                        <img src={hotelstar} alt=""/>
                                        <img src={hotelstar} alt=""/>
                                        <img src={hotelstar} alt=""/>
                                        <img src={hotelstarTransporent} alt=""/>
                                        <img src={hotelstarTransporent} alt=""/>
                                    </div>
                                </div>
                                <div className='wrapper_checkbox'>
                                    <input type="checkbox" className="custom-checkbox" name="stars0" value="100"></input>
                                    <div className='stars_hotel'>
                                        <img src={hotelstar} alt=""/>
                                        <img src={hotelstar} alt=""/>
                                        <img src={hotelstar} alt=""/>
                                        <img src={hotelstar} alt=""/>
                                        <img src={hotelstarTransporent} alt=""/>
                                    </div>
                                </div>
                                <div className='wrapper_checkbox'>
                                    <input type="checkbox" className="custom-checkbox" name="stars0" value="100"></input>
                                    <div className='stars_hotel'>
                                        <img src={hotelstar} alt=""/>
                                        <img src={hotelstar} alt=""/>
                                        <img src={hotelstar} alt=""/>
                                        <img src={hotelstar} alt=""/>
                                        <img src={hotelstar} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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