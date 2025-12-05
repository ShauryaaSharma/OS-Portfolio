import React from 'react'
import useWindowStore from '../src/store/window'

const WindowControls = ({target, onClose}) => {

    const { closeWindow } = useWindowStore();

    const handleClose = (e) => {
        // Prevent the click from bubbling to the window wrapper, which would
        // immediately refocus the window and can make it feel like two clicks
        // are required to close.
        e.stopPropagation();

        if (onClose) {
            onClose();
        } else {
            closeWindow(target);
        }
    };

  return (
    <div id="window-controls">
        <div className="close" onClick={handleClose} />
        <div className="minimize" />
        <div className="maximize" />
    </div>
  )
}

export default WindowControls
