import React from 'react';

import './SearchPage.scss'
import Header from "../../componets/Header";
import InviteComp from "./components/InviteComp";
import MainForm from "../../componets/mainForm/mainForm";
import {useParams, useSearchParams} from "react-router-dom";

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    console.log(Object.fromEntries([...searchParams]));
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
        </div>
            </>
    );
};

export default SearchPage;