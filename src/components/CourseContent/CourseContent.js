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
                    <video
                      className="video"
                      controls={true}
                      controlsList="nodownload"
                      src={subitem.video}
                    >
                    </video>
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