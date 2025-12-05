import React from 'react'
import WindowWrapper from '../hoc/WindowWrapper'
import WindowControls from '../../components/WindowControls'
import { socials } from '../../constants'

const contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <section className="bg-white p-6 space-y-8">
        <div className="flex items-center gap-4">
          <img
            src="/images/adrian.jpg"
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />

          <div className="space-y-1">
            <h3>Let&apos;s Connect</h3>
            <p className="text-sm text-gray-600">
              Got an idea? A bug to squash? Or just wanna talk tech? I&apos;m in.
            </p>
            <p className="text-sm font-medium text-gray-800">
              contact@jsmastery.pro
            </p>
          </div>
        </div>

        <ul>
          {socials.map(({ id, text, icon, bg, link }) => (
            <li
              key={id}
              style={{ backgroundColor: bg }}
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-3">
                  <img src={icon} alt={text} className="w-6 h-6" />
                  <p>{text}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

const ContactWindow = WindowWrapper(contact, 'contact');

export default ContactWindow
