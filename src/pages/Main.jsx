/* eslint-disable */

import React from 'react'
import Main_Event from './Main_Event';
import Main_Best from './Main_Best';
import Main_Feature from './Main_Feature';
import Brand_Story from './Main_BrandStory';
import Animation from './Main_Animation';


export default function Main() {
  return (
    <div className='visual_main'>
      <div className='visual_main_imgbox'>
      <img src={process.env.PUBLIC_URL + "/baggu_main_page_imgs/main_visual01.png"} alt="" />
      </div>
      <Main_Event/>
      <hr className="hrhr" />
      <Main_Best/>
      <hr className="hrhr" />
      <Main_Feature/>
      <hr className="hrhr" />
      <Brand_Story/>
      <hr className="hrhr" />
      <Animation/>
    </div>
  )
}