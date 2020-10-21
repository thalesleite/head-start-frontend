import React, { useState } from 'react';

import SIDEMENU from '../../data/menu/sidemenu.data';

import { Button } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';

import CourseForm from '../../components/CourseForm/CourseForm';

import './CourseContent.scss';

function CourseContent() {
  const [menu, setMenu] = useState(SIDEMENU);

  return (
    <div className="container course-content">
      {
        menu.map((item,index) => (
          <div key={index}>
          {
            item?.items.map((subitem,index) => (
              <section 
                key={index} 
                id={subitem.link}
                className={ `${subitem?.hidden ? 'hide' : ''}` }
              >
              {
                !subitem?.hidden ?  
                  subitem?.video ? (
                    <div>
                      <iframe
                        title={`${subitem.link}`} 
                        className="video"
                        frameBorder= "0"
                        src={subitem.video} 
                        allow="autoplay; fullscreen" 
                        allowFullScreen
                      ></iframe>
                      {/* <Link
                        className=''
                        onClick={() => {
                          console.log(subitem)
                        }}
                        to="/course#1.2"
                      >
                        Next >>
                      </Link> */}
                    </div>
                  ) : (
                    <CourseForm moduleId={item?.id} />
                  )
                : ''
              }
              </section>
            ))
          }
          </div>
        ))
      }
    </div>
  );
}

export default CourseContent;