import { create } from "zustand";

const useJobsStore = create((set) => ({
    isLoading: false,
    records: [],
    record: {},
    error: false,
    params: {
        page: 1,
        limit: 6,
        description: null,
        location: null,
        full_time: null,
    },
    setIsLoading: (values) => set({ isLoading: values }),
    setRecords: (datas) => set((prev) => ({ records: [...prev.records, ...datas]})),
    setRecord: (data) => set({ record: data}),
    setParams: (params) => set({ params: params }),
    setError: (error) => set({ error: error}),
    setPage: () => set((prev) => set({
        page: prev.page + 1
    })),
    resetRecord: () => set({ record: {} }) 
}))

export default useJobsStore;