import React, { useState } from 'react';

import SIDEMENU from '../../data/menu/sidemenu.data';

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
                    <iframe 
                      className="video"
                      src={subitem.video}
                      frameborder="0" 
                      allow="autoplay; fullscreen" 
                      allowfullscreen
                    ></iframe>
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