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
    console.log(tours)
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
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='search_count_body'>
                            <div>
                                <b>{tours?.total}</b>
                                предложения путешествий
                            </div>
                        </div>
                        <div className='search_sort'>
                            Сортировать
                            <div className='select_wrapper'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-xxl container_search_result'>
                <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-4'>
                        {
                            tours?.data.map((hotel, i) => (
                                <div className='slideComp' key={i}>
                                    <div className='image-slider-wrapper'>
                                        <Swiper
                                            navigation={true}
                                            modules={[Navigation, Thumbs]}
                                            scrollbar={{ draggable: true }}
                                            allowTouchMove={false}  // отключаем свайп не по кнопке
                                        >
                                            {hotel?.photoList.map((photo, index) => (
                                                <SwiperSlide key={index}>
                                                    <img src={`http://91.203.69.22/${photo?.urlPhoto}`} alt="" className='img'/>
                                                </SwiperSlide>
                                            ))}
                                            {/*{data.images.map((img, index) => (*/}
                                            {/*    <SwiperSlide key={index}>*/}
                                            {/*        <img src={img} alt="" className='img'/>*/}
                                            {/*    </SwiperSlide>*/}
                                            {/*))}*/}
                                        </Swiper>
                                    </div>

                                    <div className='name-star-wrapper'>
                                        <h1 className='card_desc_name_palace'>{hotel?.name}</h1>
                                        <div className='hotel-stars'>
                                            <img src={hotelStar} alt="" className='hotel-star'/>
                                            <img src={hotelStar} alt="" className='hotel-star'/>
                                            <img src={hotelStar} alt="" className='hotel-star'/>
                                            <img src={hotelStar} alt="" className='hotel-star'/>
                                            <img src={hotelStar} alt="" className='hotel-star'/>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <p className='place-name'>{data.country}</p>
                                        <p className='card_desc_type_eat card_description_body'>{data.nights}</p>
                                        <div className='card_desc_price_include'>
                                            <p className='card_description_body'>В цену включено:</p>
                                            <div className='svg-wrapper'>
                                                <svg
                                                    className='svg'
                                                    viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.625 0C10.4596 0 11.2159 0.495 11.55 1.2595L14.806 8.69825L19.2555 8.42188C19.9392 8.37934 20.6119 8.61009 21.1255 9.06339C21.6391 9.51668 21.9517 10.1554 21.9945 10.8391L22 11C22 11.6852 21.7278 12.3424 21.2433 12.8269C20.7588 13.3114 20.1016 13.5836 19.4164 13.5836L19.2555 13.5781L14.806 13.3004L11.5514 20.7391C11.3877 21.1139 11.1183 21.4327 10.7761 21.6567C10.434 21.8806 10.0339 22 9.625 22C9.30299 22 8.99418 21.8721 8.76648 21.6444C8.53879 21.4167 8.41088 21.1079 8.41088 20.7859L8.41363 20.7103L9.38025 12.9607L6.0005 12.749L4.433 15.884C4.34072 16.0691 4.19869 16.2247 4.02284 16.3335C3.84699 16.4424 3.64429 16.5 3.4375 16.5C3.25516 16.5 3.0803 16.4276 2.95136 16.2986C2.82243 16.1697 2.75 15.9948 2.75 15.8125V12.5455L1.28975 12.4561C0.940289 12.4344 0.612273 12.2802 0.372606 12.025C0.13294 11.7697 -0.000322875 11.4326 5.8747e-07 11.0825V10.9147C2.7232e-05 10.5649 0.133446 10.2281 0.373078 9.97317C0.612709 9.71821 0.940527 9.56419 1.28975 9.5425L2.75 9.45312V6.1875C2.75 6.00516 2.82243 5.8303 2.95136 5.70136C3.0803 5.57243 3.25516 5.5 3.4375 5.5C3.64411 5.50003 3.84665 5.55753 4.02245 5.66607C4.19826 5.77461 4.34041 5.92992 4.433 6.11462L5.99913 9.24963L9.38025 9.03788L8.4205 1.36538C8.39905 1.19452 8.41419 1.02106 8.46491 0.856498C8.51563 0.691941 8.60077 0.540056 8.71469 0.410925C8.82861 0.281794 8.96869 0.178371 9.12563 0.107524C9.28258 0.0366758 9.4528 2.3707e-05 9.625 0Z" fill="#546179"></path>
                                                </svg>
                                                <svg
                                                    className='svg'
                                                    width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24.2617 2.75C24.6416 2.75 24.9492 2.44234 24.9492 2.0625V0.6875C24.9492 0.307656 24.6416 0 24.2617 0H0.886719C0.506875 0 0.199219 0.307656 0.199219 0.6875V2.0625C0.199219 2.44234 0.506875 2.75 0.886719 2.75H1.57336V19.25H0.886719C0.506875 19.25 0.199219 19.5577 0.199219 19.9375V21.3125C0.199219 21.6923 0.506875 22 0.886719 22H11.1992V18.5625C11.1992 18.1844 11.5086 17.875 11.8867 17.875H13.2617C13.6398 17.875 13.9492 18.1844 13.9492 18.5625V22H24.2617C24.6416 22 24.9492 21.6923 24.9492 21.3125V19.9375C24.9492 19.5577 24.6416 19.25 24.2617 19.25H23.5742V2.75H24.2617ZM11.1992 4.675C11.1992 4.4 11.4742 4.125 11.7492 4.125H13.3992C13.6742 4.125 13.9492 4.4 13.9492 4.675V6.325C13.9492 6.6 13.6742 6.875 13.3992 6.875H11.7492C11.4742 6.875 11.1992 6.6 11.1992 6.325V4.675ZM11.1992 8.8C11.1992 8.525 11.4742 8.25 11.7492 8.25H13.3992C13.6742 8.25 13.9492 8.525 13.9492 8.8V10.45C13.9492 10.725 13.6742 11 13.3992 11H11.7492C11.4742 11 11.1992 10.725 11.1992 10.45V8.8ZM5.69922 4.675C5.69922 4.4 5.97422 4.125 6.24922 4.125H7.89922C8.17422 4.125 8.44922 4.4 8.44922 4.675V6.325C8.44922 6.6 8.17422 6.875 7.89922 6.875H6.24922C5.97422 6.875 5.69922 6.6 5.69922 6.325V4.675ZM7.89922 11H6.24922C5.97422 11 5.69922 10.725 5.69922 10.45V8.8C5.69922 8.525 5.97422 8.25 6.24922 8.25H7.89922C8.17422 8.25 8.44922 8.525 8.44922 8.8V10.45C8.44922 10.725 8.17422 11 7.89922 11ZM8.44922 16.5C8.44922 14.2218 10.296 12.375 12.5742 12.375C14.8524 12.375 16.6992 14.2218 16.6992 16.5H8.44922ZM19.4492 10.45C19.4492 10.725 19.1742 11 18.8992 11H17.2492C16.9742 11 16.6992 10.725 16.6992 10.45V8.8C16.6992 8.525 16.9742 8.25 17.2492 8.25H18.8992C19.1742 8.25 19.4492 8.525 19.4492 8.8V10.45ZM19.4492 6.325C19.4492 6.6 19.1742 6.875 18.8992 6.875H17.2492C16.9742 6.875 16.6992 6.6 16.6992 6.325V4.675C16.6992 4.4 16.9742 4.125 17.2492 4.125H18.8992C19.1742 4.125 19.4492 4.4 19.4492 4.675V6.325Z" fill="#546179"></path>
                                                </svg>
                                                <svg
                                                    width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.4992 3.3L16.1528 0.6083C16.0615 0.425611 15.9212 0.271944 15.7475 0.164508C15.5738 0.0570714 15.3736 0.000109063 15.1694 0H5.52902C5.32479 0.000109063 5.12462 0.0570714 4.95094 0.164508C4.77725 0.271944 4.63691 0.425611 4.54562 0.6083L3.19922 3.3H0.449219V5.5H20.2492V3.3H17.4992ZM4.55662 21.0562C4.63472 21.5974 5.09892 22 5.64672 22H15.0528C15.3175 22 15.5734 21.9046 15.7734 21.7313C15.9734 21.5579 16.1042 21.3182 16.1418 21.0562L18.0492 7.7H2.64922L4.55662 21.0562ZM14.7492 11L13.9638 16.5H6.73462L5.94922 11H14.7492Z" fill="#546179"></path>
                                                </svg>
                                                <svg
                                                    className='svg'
                                                    width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.00078 4.95C5.00078 7.6791 7.22168 9.9 9.95078 9.9C12.6799 9.9 14.9008 7.6791 14.9008 4.95C14.9008 2.2209 12.6799 0 9.95078 0C7.22168 0 5.00078 2.2209 5.00078 4.95ZM18.7508 20.9H19.8508V19.8C19.8508 15.5551 16.3957 12.1 12.1508 12.1H7.75078C3.50478 12.1 0.0507812 15.5551 0.0507812 19.8V20.9H18.7508Z" fill="#546179"></path>
                                                </svg>
                                                <svg
                                                    width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M27.8516 12.75V14.8125C27.8516 15.573 27.2371 16.1875 26.4766 16.1875H25.0457C24.7191 18.1383 23.0219 19.625 20.9766 19.625C18.9312 19.625 17.234 18.1383 16.9074 16.1875H11.2957C10.9691 18.1383 9.27188 19.625 7.22656 19.625C5.18125 19.625 3.4857 18.1383 3.15871 16.1875H1.72656C0.967305 16.1875 0.351562 15.573 0.351562 14.8125V10C0.351562 8.83555 1.07387 7.84297 2.09438 7.43906L3.88359 2.96816C4.51008 1.40195 6.02773 0.375 7.71211 0.375H15.5281C16.7828 0.375 17.9301 0.944766 18.7508 1.92316L23.0477 7.29297C25.7547 7.59805 27.8516 9.94844 27.8516 12.7113V12.75ZM7.71211 3.125C7.14922 3.125 6.64648 3.43008 6.43594 3.98867L5.13398 7.25H9.97656V3.125H7.71211ZM12.0391 7.25H19.4898L16.6023 3.64062C16.3445 3.31406 15.9105 3.125 15.5281 3.125H12.0391V7.25ZM22.923 16.1875C22.9961 15.934 23.0391 15.7406 23.0391 15.5C23.0391 14.3613 22.1152 13.4375 20.9766 13.4375C19.8379 13.4375 18.9141 14.3613 18.9141 15.5C18.9141 15.7406 18.9184 15.934 19.0301 16.1875C19.3137 16.9867 20.0785 17.5625 20.9766 17.5625C21.8746 17.5625 22.6395 16.9867 22.923 16.1875ZM9.17305 16.1875C9.24609 15.934 9.28906 15.7406 9.28906 15.5C9.28906 14.3613 8.36523 13.4375 7.22656 13.4375C6.08789 13.4375 5.16406 14.3613 5.16406 15.5C5.16406 15.7406 5.16836 15.934 5.28008 16.1875C5.56367 16.9867 6.32852 17.5625 7.22656 17.5625C8.12461 17.5625 8.88945 16.9867 9.17305 16.1875Z" fill="#546179"></path>
                                                </svg>
                                                <svg
                                                    className='svg'
                                                    width="23" height="6" viewBox="0 0 23 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.44766 4.10039C3.05517 4.10039 3.54766 3.6079 3.54766 3.00039C3.54766 2.39288 3.05517 1.90039 2.44766 1.90039C1.84014 1.90039 1.34766 2.39288 1.34766 3.00039C1.34766 3.6079 1.84014 4.10039 2.44766 4.10039Z" stroke="#546179" strokeWidth="2"></path>
                                                    <path d="M11.2484 4.10039C11.856 4.10039 12.3484 3.6079 12.3484 3.00039C12.3484 2.39288 11.856 1.90039 11.2484 1.90039C10.6409 1.90039 10.1484 2.39288 10.1484 3.00039C10.1484 3.6079 10.6409 4.10039 11.2484 4.10039Z" stroke="#546179" strokeWidth="2"></path>
                                                    <path d="M20.0492 4.10039C20.6567 4.10039 21.1492 3.6079 21.1492 3.00039C21.1492 2.39288 20.6567 1.90039 20.0492 1.90039C19.4417 1.90039 18.9492 2.39288 18.9492 3.00039C18.9492 3.6079 19.4417 4.10039 20.0492 4.10039Z" stroke="#546179" strokeWidth="2"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='price_wrap'>
                                        <span className='width'>с</span>
                                        <p className='price_bold '>{hotel?.price}</p>
                                    </div>
                                    <p className='price-description'>*Цена зависит от даты вылета и типа питания</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default SearchPage;