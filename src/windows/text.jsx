import React from 'react'
import WindowControls from '../../components/WindowControls'
import WindowWrapper from '../hoc/WindowWrapper'
import useWindowStore from '../store/window'

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile.data;

    // If no data, return null
    if (!data) return null;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                {data.name && (
                    <p className="font-bold text-sm text-center flex-1 text-[#5f6266]">
                        {data.name}
                    </p>
                )}
            </div>

            <div className="bg-white flex flex-col h-full overflow-y-auto">
                {/* Optional Image - Full width hero image */}
                {data.image && (
                    <div className="w-full p-6">
                        <img 
                            src={data.image} 
                            alt={data.name} 
                            className="w-full h-auto max-h-80 object-contain rounded-lg"
                        />
                    </div>
                )}

                {/* Content with padding */}
                <div className="p-8">
                    {/* Optional Subtitle */}
                    {data.subtitle && (
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">
                            {data.subtitle}
                        </h2>
                    )}

                    {/* Description Paragraphs */}
                    {data.description && Array.isArray(data.description) && (
                        <div className="space-y-4">
                            {data.description.map((paragraph, index) => (
                                <p 
                                    key={index} 
                                    className="text-sm text-gray-700 leading-relaxed"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
