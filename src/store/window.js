import { INITIAL_Z_INDEX } from "../../constants";
import { WINDOW_CONFIG } from "../../constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useWindowStore = create(immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,
    imageWindows: {}, // Store multiple image windows
    nextImageId: 1,

    openWindow: (windowKey, data = null) => set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
    }),
    
    openImageWindow: (data) => set((state) => {
        const imageId = `img-${state.nextImageId}`;
        const offsetX = (state.nextImageId - 1) * 30;
        const offsetY = (state.nextImageId - 1) * 30;
        
        state.imageWindows[imageId] = {
            id: imageId,
            data: data,
            isOpen: true,
            zIndex: state.nextZIndex,
            position: { x: 100 + offsetX, y: 100 + offsetY }
        };
        state.nextImageId++;
        state.nextZIndex++;
    }),
    
    closeImageWindow: (imageId) => set((state) => {
        delete state.imageWindows[imageId];
    }),
    
    focusImageWindow: (imageId) => set((state) => {
        if (state.imageWindows[imageId]) {
            state.imageWindows[imageId].zIndex = state.nextZIndex++;
        }
    }),
    
    closeWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
    }),
    
    focusWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        win.zIndex = state.nextZIndex++;
    }),

})));


export default useWindowStore;