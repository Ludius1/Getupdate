import News from './../../../assets/news.jpg'
import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { RiArrowRightUpLine } from "react-icons/ri";
import './home.css'
import Navbar from '../../Navbar/Navbar';
import Original from '../../original/Original';
import Footer from '../../footer/Footer';
import Newsletter from '../../Newsletter';
import './../../original/original.css'

const Home = () => {
    const [news, setNews] = useState(null)

    const apikey = "?q=keyword&apiKey=b3565ca4ae66436c963b1fc3b237c57e"

    const showNews = async () => {
        try{
            const newsData = await axios.get(
                `https://newsapi.org/v2/everything${apikey}`)
            console.log(newsData)
            setNews(newsData.data.articles)
            console.log(setNews)
        }   
        catch(error) {
            console.log(error)
        }
    }


    useEffect(() => {
        showNews();
        newNews()
    }, [])
    const newapikey = "c2aaf33ff9msh3da29005fb8ac47p144509jsna438256234d8"
    
   const newNews = async () => {
    try{
        const shownewNews = await axios.get(
            `https://google-news13.p.rapidapi.com/latest${newapikey}`
        )
        console.log(shownewNews)

    }catch(error) {
        console.log(error)
    }
   }

  return (
    <>
        <div className="home__sect">
            <Navbar/>
            <div className='Home'>
            
                        <div className="home__left">
                            <h2>Trending <br />now🔥</h2>

                            <div className="home__left__section">
                                    {news?.slice(5, 15).map((news)=>(

                                    <div className="home__left__news" key={news.id}>
                                    <img src={news?.urlToImage} alt="" />
                                    <div className="left__news__details">
                                        <div className="news__title">
                                            {news?.title}
                                        </div>

                                        <span className="news__date">{news?.publishedAt}</span>
                                    </div>
                                    </div>
                                    ))}
                            </div>
                    </div>
                    
                    <div className="home__right">

                        {news?.slice(0, 1).map((news)=>( 
                                <div className="home__left__head" key={news.id}>
                                <h1>{news?.title}</h1>

                                <div className="read">
                                        <h4>Read full story</h4>
                                        <span><RiArrowRightUpLine /></span>
                                </div>

                                </div>

                        ))}

                        {news?.slice(0, 1).map((news)=>(  
                            <div className="home__image_secton">
                            <img src={news?.urlToImage} alt="" className="home__img" />
                            <button className="home__one">Black Owned Business</button>
                    </div>

                        ))}

                
                            
                            <div className="other__home__img">

                            {news?.slice(1, 5).map((news)=>(  
                                <div className="inside__other__home">
                                <img src={news?.urlToImage} alt="" />
                                <div className="news__title">
                                {news?.title}
                                </div>
                                <span className="categories">Culture / Politics</span>
                                <h4 className="news__date">{news?.publishedAt}</h4>
                            </div>
                            ))}
                                
                            </div>

                            <div className="newletter__ ">
                                <span className='desktop__news'><Newsletter/></span>

                                <span className="desktop__side">
                                {news?.slice(6, 7).map((news)=>(  
                                <div className="other__home__img__">
                                <img src={news?.urlToImage} alt="" className='img__left__home' />
                                <div className="news__title__home">
                                {news?.title}
                                </div>
                                <span className="desc">{news?.description}</span>

                                <div className="read">
                                    <h4>Read full story</h4>
                                    <span><RiArrowRightUpLine /></span>
                            </div>
                            </div>

                            ))}
                                </span>
                            </div>

                            
                            
                    </div>
            </div>
            <span className='mobile__newsletter'><Newsletter/></span>
            <Original/>
            <Footer/>
        </div>
    </>
    
  )
}

export default Home