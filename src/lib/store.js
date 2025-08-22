import { create } from 'zustand';

const useStore = create((set, get) => ({
  // Current room/route state
  currentRoom: 'airlock', // 'airlock', 'bridge', 'projects', 'about', 'contact'
  
  // Project filtering
  selectedCategory: 'all', // 'all', 'uiux', 'dev', 'creative'
  selectedProject: null,
  
  // UI states
  isPanelOpen: false,
  isHologramOpen: false,
  isAudioOn: false,
  
  // Navigation actions
  setCurrentRoom: (room) => set({ currentRoom: room }),
  
  // Project actions
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSelectedProject: (project) => set({ selectedProject: project }),
  
  // Panel actions
  openPanel: () => set({ isPanelOpen: true }),
  closePanel: () => set({ isPanelOpen: false }),
  togglePanel: () => set((state) => ({ isPanelOpen: !state.isPanelOpen })),
  
  // Hologram actions
  openHologram: () => set({ isHologramOpen: true }),
  closeHologram: () => set({ isHologramOpen: false }),
  toggleHologram: () => set((state) => ({ isHologramOpen: !state.isHologramOpen })),
  
  // Audio actions
  toggleAudio: () => set((state) => ({ isAudioOn: !state.isAudioOn })),
  
  // Reset state
  resetState: () => set({
    currentRoom: 'airlock',
    selectedCategory: 'all',
    selectedProject: null,
    isPanelOpen: false,
    isHologramOpen: false,
  }),
}));

export default useStore;
