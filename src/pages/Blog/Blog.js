import React from 'react';
import Header from "../../components/Header";

import './Blog.scss'
import ArticlesComp from "../../components/ArticlesComp/ArticlesComp";
import MailingComp from "../../components/MailingComp/MailingComp";

const Blog = () => {
    return (
        <>
            <div className='bg-gray-wrapper'>
                <Header/>
            </div>
            <main>
                <div className='blog-page'>
                    <div className='container-xxl'>
                        <div className='row'>
                            <div className='col-12'>
                                <h1 className='block_title center_title blog_title'>Советы для твоего отдыха от экспертов по путешествиям</h1>
                                <div className='block_description blog_desc'>Получите вдохновение для следующей поездки.</div>
                            </div>
                        </div>
                    </div>
                    <ArticlesComp />
                    <MailingComp />
                </div>
            </main>
        </>
    );
};

export default Blog;