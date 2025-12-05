import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Draggable } from 'gsap/all'
import { locations } from '../constants'
import useWindowStore from '../src/store/window'
import useLocationStore from '../src/store/location'

gsap.registerPlugin(Draggable)

const Desktop = () => {
  const ref = useRef(null)
  const { openWindow } = useWindowStore()
  const { setActiveLocation } = useLocationStore()

  const workLocation = locations.work

  useGSAP(() => {
    const el = ref.current
    if (!el) return

    const icons = el.querySelectorAll('.desktop-icon')
    const instances = Draggable.create(icons, {
      bounds: 'body',
    })

    return () => {
      instances.forEach((instance) => instance.kill())
    }
  }, [])

  const openFolder = (folder) => {
    setActiveLocation(folder)
    openWindow('finder')
  }

  return (
    <section id="home" ref={ref}>
      <ul>
        {workLocation.children.map((folder) => (
          <li
            key={folder.id}
            className={`${folder.position} desktop-icon group cursor-pointer`}
            onDoubleClick={() => openFolder(folder)}
          >
            <img src={folder.icon} alt={folder.name} />
            <p>{folder.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Desktop
