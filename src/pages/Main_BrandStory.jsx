/* eslint-disable */

import React from 'react'
import data_main_brand from '../components/data_main_brand'

export default function Brand_Story() {
  return (
    <section className="brandstory">
    <h3>BRAND STORY</h3>
    <p>바꾸의 브랜드 스토리</p>
    <div className="story_container">
      { 
        data_main_brand.map((value, i) => {
          return (
            <div className="storywrap">
              <div className="story_imgbox">
                <img src={process.env.PUBLIC_URL + value.img} />
                <div className="story_hiddenbox">
                  <h3>{value.title}</h3>
                  <p>{value.comment}</p>
                </div>
              </div>
              <div className="story_textbox">
                <h3>{value.title}</h3>
                <p>{value.comment}</p>
              </div>
            </div>
          )
        })
      }    
    </div>
  </section>
  )
}




