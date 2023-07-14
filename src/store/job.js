import { create } from "zustand";

const useJobsStore = create((set) => ({
    isLoading: false,
    records: [],
    record: {},
    error: false,
    params: {
        page: 1,
        limit: null,
        description: null,
        location: null,
        full_time: null,
    },
    setIsLoading: (values) => set({ isLoading: values }),
    setRecords: (datas) => set((prev) => ({ records: [...prev.records, ...datas]})),
    setNewRecords: (datas) => set({ records: datas}),
    setRecord: (data) => set({ record: data}),
    setParams: (params) => set({ params: params }),
    setError: (error) => set({ error: error}),
    setPage: () => set((prev) => set({
        page: prev.page + 1
    })),
    resetRecord: () => set({ record: {} }) 
}))

export default useJobsStore;