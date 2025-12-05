import React, { useLayoutEffect, useRef } from 'react'
import WindowControls from '../../components/WindowControls'
import useWindowStore from '../store/window'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Draggable } from 'gsap/all';

gsap.registerPlugin(Draggable);

const ImageWindowInstance = ({ imageId, data, zIndex, position }) => {
    const { focusImageWindow, closeImageWindow } = useWindowStore();
    const ref = useRef(null);

    useGSAP(() => {
        const el = ref.current;
        if(!el) return;

        el.style.display = "block";

        gsap.fromTo(el, 
            {scale: 0.8, opacity: 0, y: 40},
            {scale: 1, opacity: 1, y:0, duration: 0.3, ease: "power3.out"},)
    }, []);

    useGSAP(() => {
        const el = ref.current;
        if(!el) return;

        const [instance] = Draggable.create(el, { 
            trigger: el.querySelector('#window-header'),
            bounds: 'body',
            onPress: () => focusImageWindow(imageId)
        });

        return () => instance.kill();
    }, [imageId]);

    return (
        <section 
            id={imageId} 
            ref={ref} 
            style={{
                zIndex,
                left: `${position.x}px`,
                top: `${position.y}px`
            }} 
            className="absolute w-xl bg-white shadow-2xl drop-shadow-2xl rounded-xl overflow-hidden" 
            onClick={() => focusImageWindow(imageId)}
        >
            <div id="window-header">
                <WindowControls 
                    target={imageId} 
                    onClose={() => closeImageWindow(imageId)}
                />
            </div>

            <div className="bg-white flex flex-col overflow-hidden" style={{ height: '500px' }}>
                {/* Image */}
                {data.imageUrl && (
                    <div className="w-full p-4 flex-1 flex items-center justify-center overflow-hidden">
                        <img 
                            src={data.imageUrl} 
                            alt={data.name} 
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />
                    </div>
                )}

                {/* Image Title/Name at bottom */}
                {data.name && (
                    <div className="px-4 pb-3 pt-2 border-t border-gray-200 bg-white">
                        <p className="text-xs font-medium text-gray-700 text-center truncate">
                            {data.name}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

const ImageWindows = () => {
    const { imageWindows } = useWindowStore();

    return (
        <>
            {Object.values(imageWindows).map((imageWindow) => (
                <ImageWindowInstance
                    key={imageWindow.id}
                    imageId={imageWindow.id}
                    data={imageWindow.data}
                    zIndex={imageWindow.zIndex}
                    position={imageWindow.position}
                />
            ))}
        </>
    );
};

export default ImageWindows;
