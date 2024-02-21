import React from 'react';
import a_a from '../assets/a_a.jpg';

const Skills=()=>{
    return 
  }


export default function About() {

  
  return (
    <div className='min-h-full w-full flex items-center justify-start'>
      <div className='bg-slate-800 '>
        
        <div className='flex m-4 px-10' >
          <div>
            <img src={a_a} alt="" className='rounded-md' />
          </div>   
          <div className='w-5/6 mx-5 px-20' >
            <h3>About Me</h3>
            <p>
              I am a fun stack web developer with a passion for creating interactive
and responsive web applications. I have experience working with
JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize,
HTML. CSS, and Git I am a quick learner and I am always looking to
expand my knowledge and Skill set. I am a team player and I am excited
to work with others to create amazing applications.

            </p>
          
          <div  className="mt-10">
            <ul className='flex space-x-4'>
              <li>Skill
              <ul>
                <li>Javascript / TypeScript</li>
              </ul>
              </li>
              <li>Education</li>
              <li>Certifications</li>
            </ul>
          </div>


          </div>

        </div>
      </div>
    </div>
  )
}
