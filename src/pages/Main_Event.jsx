/* eslint-disable */

import React from 'react'
import data_main_event from '../components/data_main_event'


export default function Main_Event() {
  return (
    <div className='Main_Event'>
      {
        data_main_event.map((value, i) => {
          return (
            <div className="main_event_item" key={value.id}>
              <div className="event_img">
                <img src={process.env.PUBLIC_URL + `/baggu_main_page_imgs/event_img0${i+1}.jpg`}/>
              </div>
              <div className="event_text">
                <h3>{value.title}</h3>
                <p>{value.comment}</p>
                <a href="#!">자세히 보기</a>
              </div>
            </div>
          )
        })
      }       
    </div>
  )
}