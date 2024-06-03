
import Navbar from '../Navbar/Navbar'
import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import Footer from '../footer/Footer';
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import './blog.css'
import './../Navigation/Home/home.css'
import Banner from './../../assets/subscribe-banner.png'

const Blog = () => {

    const [news, setNews] = useState(null)
    const [trendingNews, settrendingNews] = useState(null)

    const apikey = "&apiKey=b3565ca4ae66436c963b1fc3b237c57e"

    const showNews = async () => {
        try {
            const newsData = await axios.get(
                `https://newsapi.org/v2/top-headlines?sources=bbc-news${apikey}`)
            console.log(newsData)
            setNews(newsData.data.articles)
        }
        catch (error) {
            console.log(error)
        }
    }



    const showTrendingNews = async () => {
        try {
            const trendingnewsData = await axios.get(
                `https://newsapi.org/v2/top-headlines/sources?apiKey=b3565ca4ae66436c963b1fc3b237c57e`)
            console.log(trendingnewsData.data.sources)
            settrendingNews(trendingnewsData.data.sources)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        showNews();
        showTrendingNews();
    }, [])


    return (

        <div>
            <Navbar />
            <div className="blog__section">

                <div className="blog">
                    <div className="home__right"  >
                        {news?.slice(0, 1).map((news, index) => (
                            <div key={index} className="home__left__head down__blog">
                                <h1>{news?.title}</h1>

                                <div className="blog__read">
                                    <div className="blog__categories">Entertaiment</div>

                                    <div className="author">
                                        <span>Kui Mwai</span>
                                        <small>May 28, 2024</small>
                                    </div>

                                    <div className="social__blog">

                                        <span><FaInstagram /></span>
                                        <span><FaFacebook /></span>
                                        <span><FaLinkedin /></span>
                                        <span><FaXTwitter /></span>
                                    </div>
                                </div>

                            </div>

                        ))}


                        {news?.slice(0, 1).map((news, index) => (
                            <div key={index} className="home__image_secton">
                                <img src={news?.urlToImage} alt="" className="home__img" />

                                <div className="blog__dec">{news?.content}
                                </div>
                            </div>

                        ))}

                    </div>

                    <div className="home__left">
                        <h2>Trending now</h2>

                        <div className="home__left__section">
                            {trendingNews?.slice(4, 9).map((trend, index) => (

                                <div key={index} className="home__left__news">

                                    <div className="left__news__details">

                                        <div className="news__title">
                                            {trend?.description} title
                                        </div>

                                        <span className='nes__blog__'>
                                            <span className="news__date">{trend?.name}</span>
                                            <small>{trend?.category}</small>
                                            <small>{trend?.id}</small>
                                        </span>


                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog__newsletter">


                <div className="newsletter newsdiv">

                    <img src={Banner} alt="" className='banner' />

                    <div className="left__left_newsletter">

                        <div className="first__three">
                            <h1>GET RELEVANT CONTENT DELIVERED TO YOU ONCE A WEEK</h1>
                            <small>Ready to dive in? Select your preferences and get ready for an experience tailored just for you!</small>

                            <div className="btn__newsletter">
                                <button className="news__btn">Apparel & Fashion</button>
                                <button className="news__btn">Food & Entertainment</button>
                                <button className="news__btn">Home & Design</button>
                                <br />
                                <button className="news__btn">Parenting/Family</button>
                                <button className="news__btn">Travel & Culture</button>
                                <button className="news__btn">Wealth & Finance</button>
                            </div>
                        </div>

                        <div className="send">
                            <div className="first__send">
                                <input type="email" placeholder='Enter E-mail Address' />
                                <span className="send__email">Send</span>
                            </div>
                            <span className="check">*by clicking Subscribe you agree to our Terms of Service and Privacy Policy</span>
                        </div>

                    </div>
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Blog