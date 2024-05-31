import './../original/original.css'
import React, { useState } from 'react'
import { RiArrowRightUpLine } from "react-icons/ri";
import { useEffect } from 'react';
import axios from 'axios';


const Original = () => {
    const [news, setNews] = useState(null)


    const showNews = async () => {
        try{
            const newsData = await axios.get('https://newsapi.org/v2/everything?q=keyword&apiKey=b3565ca4ae66436c963b1fc3b237c57e')
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
    <div className="original__section">

            <div className='original' >

                                            
                <div className="entt__head">
                    <h2>GETUPDATE ENTERTAINMENT</h2>
                    <span className='ent__head'>
                        <small>View More</small>
                        <span><RiArrowRightUpLine /></span>
                    </span>
                </div>

                <div className="head--ent">
                {news?.slice(17, 21).map((news)=>(  
                                <div className="entertaiment__sect">
                                <div className="original__inside">
                            <img src={news?.urlToImage} alt="" className='img__original' />
                                <div className="news__title__home">
                                {news?.title}
                                </div>
                                <span className="coriginal__categories">Entertaiments</span>
                                <h4 className="news__date">{news?.publishedAt}</h4>
                        </div>
                        </div>  

                                ))}
                </div>
                

            </div>   

         
           
    </div>
  )
}

export default Original