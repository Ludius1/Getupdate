import News from './../../../assets/news.jpg'
import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import './home.css'
import Navbar from '../../Navbar/Navbar';
import Original from '../../original/Original';
import { Link } from 'react-router-dom';
import Footer from '../../footer/Footer';
import Newsletter from '../../Newsletter';
import './../../original/original.css'
import { RiArrowRightUpLine } from 'react-icons/ri';
// import Newsletter from '../../newsletter';

const Home = () => {
    const [news, setNews] = useState(null)

    const apikey = "?apikey=pub_45704f598f48d3d535a61c582482596254cb9"

    const showNews = async () => {
        try{
            const newsData = await axios.get(
                `https://newsdata.io/api/1/latest${apikey}`)
            console.log(newsData)
            setNews(newsData.data.results)
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
                                    {news?.slice(1, 15).map((news)=>(

                                    <div className="home__left__news" key={news.id}>
                                    <img src={news?.image_url} alt="" />
                                    <div className="left__news__details">
                                        <div className="news__title">
                                            {news?.title}
                                        </div>

                                        <span className="news__date">{news?.pubDate}</span>
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
                                <Link to="/blog"><h4>Read full story</h4></Link>
                                        <span><RiArrowRightUpLine /></span>
                                </div>

                                </div>

                        ))}

                        {news?.slice(0, 1).map((news)=>(  
                            <div className="home__image_secton">
                            <img src={news?.image_url} alt="" className="home__img" />
                            <button className="home__one">{news?.creator}</button>
                    </div>

                        ))}

                
                            
                            <div className="other__home__img">

                            {news?.slice(1, 5).map((news)=>(  
                                <div className="inside__other__home">
                                <img src={news?.image_url} alt="" />
                                <div className="news__title">
                                {news?.title}
                                </div>
                                <span className="categories">{news?.category}</span>
                                <h4 className="news__date">{news?.pubDate}</h4>
                            </div>
                            ))}
                                
                            </div>

                            <div className="newletter__ ">
                                <span className='desktop__news'><Newsletter/></span>

                                <span className="desktop__side">
                                {news?.slice(6, 7).map((news)=>(  
                                <div className="other__home__img__">
                                <img src={news?.image_url} alt="" className='img__left__home' />
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