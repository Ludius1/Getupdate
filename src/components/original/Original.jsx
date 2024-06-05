import './../original/original.css'
import React, { useState } from 'react'
import { RiArrowRightUpLine } from "react-icons/ri";
import { useEffect } from 'react';
import axios from 'axios';


const Original = () => {
    const [originalNews, setoriginalNews] = useState(null)


    const showOriginalNews = async () => {
        try{
            const newsOriginal = await axios.get('https://newsdata.io/api/1/latest?apikey=pub_45704f598f48d3d535a61c582482596254cb9')
            console.log(newsOriginal)
            setoriginalNews(newsOriginal.data.results)
            console.log(setoriginalNews)
        }   
        catch(error) {
            console.log(error)
        }
    }


    useEffect(() => {
        showOriginalNews();
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
                {originalNews?.slice(17, 21).map((originalNews)=>(  
                                <div className="entertaiment__sect">
                                <div className="original__inside">
                            <img src={originalNews?.image_url} alt="" className='img__original' />
                                <div className="news__title__home">
                                {originalNews?.title}
                                </div>
                                <span className="coriginal__categories">Entertaiments</span>
                                <h4 className="news__date">{originalNews?.pubDate}</h4>
                        </div>
                        </div>  

                                ))}
                </div>
                

            </div>   

         
           
    </div>
  )
}

export default Original