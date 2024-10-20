import { create } from "zustand"


interface GlobalDataState {
    [key: string]: any
}

interface GlobalState {
    globalData: GlobalDataState
    isLoading: boolean
    loading: {
        start: (loadingText?: string) => void
        reset: () => void
    }
    loadingText: string
    updateGlobalData: (value: Partial<GlobalDataState>) => void
}

export const useGlobalStore = create<GlobalState>((set) => ({
    globalData: {

    },
    isLoading: false,
    loadingText: "Loading, Please wait...",
    loading: {
        reset: () => set((state) => ({ loadingText: "Loading, Please wait...", isLoading: false })),
        start: (loadingText = "Loading, Please wait...") => set((state) => ({ isLoading: true, loadingText })),
    },
    updateGlobalData: (value) => set((state) => ({ globalData: { ...state.globalData, ...value } })),
}))
