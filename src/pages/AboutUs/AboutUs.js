import React from 'react';

import { Parallax } from 'react-scroll-parallax';
import BartiraImg from '../../assets/BARTIRA.jpg';

import './AboutUs.scss';

function AboutUs() {
  return (
    <div 
      id="about-us" 
      className="container txt-center about"
    >

      <section className="about-section">
        <h1>ABOUT US</h1>
        <p>
          Located in the heart of Dublin, the Head Start Courses is formed by Bartira Augelli, 
          an experienced and qualified professional focused on providing accessible services for the food sector, 
          including “Food Safety (HACCP - Level 1)” and “Barista” courses.
          Our courses are available face to face or online, either English or Portuguese language, helping students, 
          especially those immigrants and who need effective and clear content to get a job in Ireland.
        </p>
        <p>
          With a simple, engaging and dynamic language, the Head Start Courses gives support by adequate 
          training, and also helps the students with their Curriculum Vitae, with the objective to develop 
          the necessary tools and confidence in order to distinguish our students toward the labour market, 
          contributing to their personal and professional journey.
        </p>

        <b>MISSION</b>
        <p>
          Delivering knowledgment in a light and efficient way, growing personally and professionally the student. 
        </p>

        <b>VISION</b>
        <p>
          To become a benchmark in forming outstanding professionals of the Irish food sector, 
          contributing with the immigrant’s lives and also with the country. 
        </p>

        <b>VALUES</b>
        <p>
          Honesty, Integrity, Respect and Inclusion.
        </p>
      </section>

      <section className="about-section">
        <h1>WHO IS BARTIRA?</h1>
        <div className="about-founder">
        
          <Parallax y={[-20, 20]}>
            <img className="bartira-img" src={BartiraImg} alt="Bartira"/>
            <p>
              <i>
                “My business started when I realized that my tools and experience could create a 
                positive impact on people’s lives, especially immigrants like me. Since then, my 
                happiness is doing what I love, knowing that I can contribute to the start of so 
                many professionals.”
              </i> (BARTIRA)
            </p>
          </Parallax>
          
          <div className="description">
            <p>
              With almost 10 years’ experience in irish food sector, Bartira Augelli is a brazilian entrepreneur, 
              teacher and Master in "MSc in Entrepreneurship" by Trinity College Dublin (TCD), 
              studying the necessity of food safety training in Ireland.
            </p>
            <p>
              The professional also has training with certification in “Advanced HACCP Design and Validation based on 
              Risk Assessment (Level 6)" by QQI; Master by International College Dublin (ICD)  - 
              "BA (Honours) Business Studies" - in Business and Training; and 
              Certification by School of Education - Trinity College Dublin (TCD) in “Mentoring Training” .
            </p>
            <p>
              Bartira is the founder of Head Start Courses and of the renowned “Barista Course By Bartira”, 
              that in 7 years already has qualified more than 5000 professionals. She also is the owner of 
              the stylish coffee shop located in British Studies Centres, Dublin.
            </p>
            <p>
              She spends part of her time giving talks, training and workshops, as well working in social programs, 
              teaching for a challenging group of adolescents that belong to underserved areas around Dublin. 
            </p>
            <p>
              Bartira is a member and works as tutor for “Career LEAP” Work Readiness Training Programme, 
              a program created by Trinity College Dublin and local business with the objective to minimize 
              youth unemployment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;