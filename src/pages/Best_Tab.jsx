/* eslint-disable */
import React, { useState } from "react";
import data_main_best_baggubag from '../components/data_main_best_baggu'
import data_main_best_pouch from '../components/data_main_best_pouch'
import data_main_best_sports from '../components/data_main_best_sports'

const content = [
  { tab: 'BAGGU BAG', content: 
    <div className="bestitemcontainer">
      {data_main_best_baggubag.map((value) => {
        return (
          <div className="bestitem" id={value.id} key={value.id}>
            <div className="bestitem_imgwrap">
              <img src={process.env.PUBLIC_URL + value.img}/>
            </div>
            <div className="best_textwrap">
            <h3>{value.name}</h3>
            <span className='best_line_through'>{value.line_through_price}</span>
            <span className='best_price'>{value.price}</span>
            </div>
          </div>
        )
      })
    }  
    </div>
  }
  ,
  { tab: 'POUCH', content: 
    <div className="bestitemcontainer">
      {data_main_best_pouch.map((value) => {
        return (
          <div className="bestitem" id={value.id} key={value.id}>
            <div className="bestitem_imgwrap">
              <img src={process.env.PUBLIC_URL + value.img}/>
            </div>
            <div className="best_textwrap">
            <h3>{value.name}</h3>
            <span className='best_line_through'>{value.line_through_price}</span>
            <span className='best_price'>{value.price}</span>
            </div>
          </div>
        )
      })
    }  
    </div>
  },
  { tab: 'SPORTS', content: 
    <div className="bestitemcontainer">
      {data_main_best_sports.map((value) => {
        return (
          <div className="bestitem" id={value.id} key={value.id}>
            <div className="bestitem_imgwrap">
              <img src={process.env.PUBLIC_URL + value.img}/>
            </div>
            <div className="best_textwrap">
            <h3>{value.name}</h3>
            <span className='best_line_through'>{value.line_through_price}</span>
            <span className='best_price'>{value.price}</span>
            </div>
          </div>
        )
      })
    }  
    </div>
  },
];

const useTabs = (initialTabs, allTabs) => {
  const [contentIndex, setContentIndex] = useState(initialTabs);
  return {
    contentItem: allTabs[contentIndex],
    contentChange: setContentIndex
  };
};

export default function Tab() {
  const { contentItem, contentChange } = useTabs(0, content);
  // const tabItem = document.querySelectorAll(".best_tab_button")
  return (
    <div className="Best_Tab_Container">
      <div className="bestitem_labelbox">
      {content.map((section, index) => (
        <a href="#!" key={section.tab} className='best_tab_button' onClick={() => contentChange(index)}>{section.tab}</a>
      ))}
      {/* {tabItem.forEach((title) => {title.classList.remove("tab_active")})} */}
      </div>
      {contentItem.content}
    </div>
  );
}