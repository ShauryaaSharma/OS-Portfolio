import React from 'react'
import WindowWrapper from '../hoc/WindowWrapper'
import WindowControls from '../../components/WindowControls'
import { photosLinks, gallery } from '../../constants'
import useWindowStore from '../store/window'

const photos = () => {
  const { openImageWindow } = useWindowStore();

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <h2>Photos</h2>
      </div>

      <div className="flex bg-white">
        <aside className="sidebar">
          <h2>Library</h2>
          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li key={id}>
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </aside>

        <section className="gallery flex-1">
          <ul>
            {gallery.map(({ id, img }) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() =>
                    openImageWindow({
                      id,
                      name: `Gallery image ${id}`,
                      imageUrl: img,
                    })
                  }
                  className="block w-full h-full"
                >
                  <img src={img} alt={`Gallery image ${id}`} />
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}

const PhotosWindow = WindowWrapper(photos, 'photos');

export default PhotosWindow
