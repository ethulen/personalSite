import React, { useState } from 'react';

const Resume = () => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: 'Ethan Hulen',
      address: '9574 W 87th St. Overland Park, KS 66212',
      phone: '(913) 231-1170',
      email: 'ethulen01@gmail.com',
    },
    education: [
      {
        school: 'Kansas State University, Manhattan, KS',
        duration: 'August 2020 - May 2023',
        degree: 'Bachelor of Science, Computer Science',
      },
      {
        school: 'Johnson County Community College, Overland Park, KS',
        duration: 'August 2019 – May 2020',
      },
    ],
    experiences: [
      {
        title: 'Software Engineer 1, Go Local Interactive',
        duration: 'June 2023 - September 2023',
        responsibilities: [
          'Maintain and update existing sites',
          'Create plugins in WordPress',
          'Work with multiple clients and strategists',
        ],
      },
      {
        title: 'Full Stack Web Development Intern, Purple Wave Auction',
        duration: 'May 2022 - May 2023',
        responsibilities: [
          'Refactor front page into React from Backbone Marionette',
          'Create an Appraisals Page for the acquisition of Heavyworth to transition to Purple Wave Appraisal Services',
          'Created a new territory map via Google API',
        ],
      },
      {
        title: 'Data Scientist, City of Lawrence',
        duration: 'January 2023 - May 2023',
        responsibilities: [
          'Analyze recreation center data to increase participation',
          'Streamline recreational sports league data',
          'Invent marketing solutions to improve enrollment',
        ],
      },
    ],
    skills: [
      'Java', 'Python', 'C#', 'C', 'SQL', 'HTML5', 'CSS', 'JavaScript',
      'R', 'MATLAB', '.NET', 'React', 'PHP', 'Tableau',
    ],
    languages: ['Spanish', 'English'],
    certifications: [
      'CPR', 'Teaching EDGE', 'Microsoft Office Suite', 'Adobe', 'IBM Data Science Professional Certificate',
    ],
    platforms: ['Mac', 'Windows', 'Android', 'iOS'],
    otherExperience: [
      {
        title: 'Best Buy, Manhattan, KS',
        duration: 'April 2021 - April 2022',
        role: 'Sales Advisor',
        responsibilities: [
          'Sales of new technology to enthusiastic customers',
          'Creating relationships with others and understanding their needs',
        ],
      },
    ],
    awards: [
      'IBM Data Science Professional Certificate - January 2024',
      'Robert & Dale Weary Achievement Award - January 2022',
      'Transfer Impact Award - August 2020',
      'Eagle Scout - November 2016',
    ],
  });

  return (
    <div>
      <h2>{resumeData.personalInfo.name}</h2>
      <p>{resumeData.personalInfo.address} | {resumeData.personalInfo.phone} | {resumeData.personalInfo.email}</p>

      <h3>EDUCATION</h3>
      {resumeData.education.map((edu, index) => (
        <p key={index}>
          <strong>{edu.school}</strong>
          <br />
          <em>{edu.duration}</em>
          {edu.degree && <br />}{edu.degree}
        </p>
      ))}

      <h3>RELEVANT EXPERIENCE</h3>
      {resumeData.experiences.map((exp, index) => (
        <div key={index}>
          <p>
            <strong>{exp.title}</strong>
            <br />
            <em>{exp.duration}</em>
          </p>
          <ul>
            {exp.responsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}

      <h3>SKILLS</h3>
      <ul>
        {resumeData.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <p><strong>Languages:</strong> {resumeData.languages.join(', ')}</p>
      <p><strong>Certifications:</strong> {resumeData.certifications.join(', ')}</p>
      <p><strong>Proficient Platforms:</strong> {resumeData.platforms.join(', ')}</p>

      <h3>OTHER EXPERIENCE</h3>
      {resumeData.otherExperience.map((exp, index) => (
        <div key={index}>
          <p>
            <strong>{exp.title}</strong>
            <br />
            <em>{exp.duration}</em>
          </p>
          <p>{exp.role}</p>
          <ul>
            {exp.responsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}

      <h3>AWARDS</h3>
      <ul>
        {resumeData.awards.map((award, index) => (
          <li key={index}>{award}</li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;
