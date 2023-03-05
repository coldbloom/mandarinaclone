import React from 'react';
import './TourSearch.scss'

import sp from './../../assets/images/destinations/PhotoSpain.webp'
import eg from './../../assets/images/destinations/EG.webp'
import gr from './../../assets/images/destinations/GR.webp'
import tr from './../../assets/images/destinations/TR.webp'

import CountryCard from "./CountryCard";
import Header from "../../components/Header";
import MailingComp from "../../components/MailingComp/MailingComp";

const TourSearch = () => {
    return (
        <>
            <div className='bg-gray-wrapper'>
                <Header/>
            </div>
            <main>
                <div className='issetSearch'>
                    <div className='container-xxl'>
                        <div className='row'>
                            <div className='col-12 title_page'>
                                <div className='block_title popular_title'>
                                    Популярные направления
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carusel_wrap carusel_wrap5'>
                        <div className='container-xxl'>
                            <div className='row' style={{marginTop: "20px"}}></div>
                            <div className='col-12 col-lg-12  d-flex flex-column justify-content-between issetSearch_row'>
                                <div className='row'>
                                    <CountryCard image={sp} title="Испания" description="69 гостиницы" mb={'20px'}/>
                                    <CountryCard image={eg} title="Египет" description="150 гостиницы"/>
                                </div>
                            </div>
                            <div className='col-12 col-lg-12  d-flex flex-column justify-content-between issetSearch_row'>
                                <div className='row'>
                                    <CountryCard image={gr} title="Греция" description="206 гостиницы" mb={'20px'}/>
                                    <CountryCard image={tr} title="Турция" description="278 гостиницы"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <MailingComp />
        </>
    );
};

export default TourSearch;