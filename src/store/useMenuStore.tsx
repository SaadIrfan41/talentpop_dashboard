import { create } from "zustand";

interface State {
  // products: Product[]
  isLoading: boolean;
  error: any;
  reportingMenu: number;
  //   filterClientName: string[];
}

interface Actions {
  changeReportingMenu: (number: number) => void;
}

const INITIAL_STATE: State = {
  // products: [],
  isLoading: false,
  error: null,
  reportingMenu: 0,
};

export const useMenuStore = create<State & Actions>((set) => ({
  // products: INITIAL_STATE.products,
  isLoading: INITIAL_STATE.isLoading,
  error: INITIAL_STATE.error,
  reportingMenu: INITIAL_STATE.reportingMenu,
  changeReportingMenu: (number) => {
    try {
      return set((state) => ({
        isLoading: false,
        error: null,
        reportingMenu: number,
      }));
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));
