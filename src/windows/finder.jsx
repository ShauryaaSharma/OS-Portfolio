import React from 'react'
import WindowControls from '../../components/WindowControls'
import { Search } from 'lucide-react'
import WindowWrapper from '../hoc/WindowWrapper'
import useLocationStore from '../store/location'
import clsx from 'clsx'
import useWindowStore from '../store/window'
import { locations } from '../../constants'

const finder = () => {

    const { activeLocation, setActiveLocation } = useLocationStore();
    const { openWindow, openImageWindow } = useWindowStore();
    
    const OpenItem = (item) => {
        if(item.fileType === "pdf") return openWindow("resume");
        if(item.kind === "folder") return setActiveLocation(item);
        if(["fig", "url"].includes(item.fileType) && item.href)
            return window.open(item.href, "_blank");
        if(item.fileType === "img") return openImageWindow(item);
        openWindow(`${item.fileType}file`, item);
    }
    
    const renderList = (name, items) => (
        <div>
            <h3>{name}</h3>
            <ul>
                {items.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => setActiveLocation(item)}
                        className={clsx(
                            item.id === activeLocation.id ? "active" : "not-active",
                            "cursor-pointer hover:opacity-80 transition-opacity"
                        )}
                    >
                        <img src={item.icon} className="w-4" alt={item.name} />
                        <p className="text-sm font-medium truncate">{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <>
            <div id="window-header">
                <WindowControls target="finder" />
                <Search className="icon" />
            </div>

            <div className="bg-white flex h-full">
                <div className="sidebar">
                    <div>
                        <h3></h3>
                        {renderList("Favorites", Object.values(locations))}
                        {renderList("My Projects", locations.work.children)}
                    </div>
                </div>

                <div className="content">
                    <ul>
                        {activeLocation?.children?.map((item) => (
                            <li
                                key={item.id}
                                className={`${item.position} cursor-pointer hover:opacity-80 transition-opacity`}
                                onClick={(e) => {
                                    // Prevent bubbling to the window wrapper so the newly opened
                                    // file window keeps the highest z-index.
                                    e.stopPropagation();
                                    OpenItem(item);
                                }}
                            >
                                <img src={item.icon} alt={item.name} />
                                <p>{item.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

const FinderWindow = WindowWrapper(finder, "finder");

export default FinderWindow;
