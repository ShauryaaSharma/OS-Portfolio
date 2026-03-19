import { Download } from 'lucide-react';
import React, { useState } from 'react'
import WindowWrapper from '../hoc/WindowWrapper'
import WindowControls from '../../components/WindowControls'

const resume = () => {
  const resumePath = `${import.meta.env.BASE_URL}files/resume.pdf`;

  return (
  <>
    <div id="window-header">
      <WindowControls target="resume" />
      <h2>Resume.pdf</h2>

      <a 
        href={resumePath}
        download
        className="cursor-pointer"
        title="Download resume"    
      >
        <Download className="icon" />
      </a>
    </div>

    <div className="pdf-container">
      <iframe 
        src={resumePath}
        width="100%"
        height="600px"
        title="Resume PDF"
        style={{ border: 'none' }}
      />
    </div>
  </>
  )
}

const ResumeWindow = WindowWrapper(resume, "resume");

export default ResumeWindow;
