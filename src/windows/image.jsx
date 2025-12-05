import React from 'react'
import WindowControls from '../../components/WindowControls'
import WindowWrapper from '../hoc/WindowWrapper'
import useWindowStore from '../store/window'

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile.data;

    // If no data, return null
    if (!data) return null;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                {data.name && (
                    <p className="font-bold text-sm text-center flex-1 text-[#5f6266]">
                        {data.name}
                    </p>
                )}
            </div>

            <div className="bg-white flex flex-col h-full overflow-y-auto">
                {/* Image */}
                {data.imageUrl && (
                    <div className="w-full p-6 flex-1 flex items-center justify-center">
                        <img 
                            src={data.imageUrl} 
                            alt={data.name} 
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />
                    </div>
                )}
            </div>
        </>
    )
}

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
