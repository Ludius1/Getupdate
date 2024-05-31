import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { RiArrowRightUpLine } from "react-icons/ri";

import './../components/Navigation/Home/home.css'

const Newsletter = () => {

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
    }, [])
    
  return (
    <div>

                <div className="Newletter__ ">
                            
                            <div className="newsletter ">
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

                                  <div className="send">
                                        <div className="first__send">
                                            <input type="email" placeholder='Enter E-mail Address'/>
                                            <button className="send__email">Send</button>
                                        </div>
                                        <span className="check">*by clicking Subscribe you agree to our Terms of Service and Privacy Policy</span>
                                    </div>
                                        
                                    </div>

                

                        
                        </div>

                        {/* {news?.slice(6, 7).map((news)=>(  
                            <div className="other__home__img__  ">
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

                        ))} */}
    </div>
  )
}

export default Newsletter