import {create} from 'zustand';

export const useCoinStore = create((set) => ({
    coins: 0,
    addCoin: () => set((state) => ({coins: state.coins + 1})),
    resetCoin: () => set((state) => ({coins: 0}))
}));