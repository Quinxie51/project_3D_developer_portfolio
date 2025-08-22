import { create } from 'zustand';

const useStore = create((set) => ({
  currentRoom: 'airlock', // 'airlock', 'projects', 'about', 'contact'
  selectedCategory: 'all',
  selectedProject: null,
  isPanelOpen: false,
  isAudioOn: true,
  
  setCurrentRoom: (room) => set({ currentRoom: room }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSelectedProject: (project) => set({ selectedProject: project }),
  setIsPanelOpen: (isOpen) => set({ isPanelOpen: isOpen }),
  setIsAudioOn: (isOn) => set({ isAudioOn: isOn }),
}));

export default useStore;
