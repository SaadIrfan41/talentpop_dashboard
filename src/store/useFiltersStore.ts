import { create } from "zustand";

// export interface Product {
//   id: string
//   user_id: string
//   product_id: string
//   quantity: number
//   image: string
//   name: string
//   price: number
//   product_type: string
//   created_at: string
//   updated_at: string
// }

interface State {
  // products: Product[]
  isLoading: boolean;
  error: any;
  filterClientName: string[];
}

interface Actions {
  addClientNames: (name: string[]) => void;
}

const INITIAL_STATE: State = {
  // products: [],
  isLoading: false,
  error: null,
  filterClientName: [],
};

export const useFiltersStore = create<State & Actions>((set) => ({
  // products: INITIAL_STATE.products,
  isLoading: INITIAL_STATE.isLoading,
  error: INITIAL_STATE.error,
  filterClientName: INITIAL_STATE.filterClientName,
  addClientNames: (name) => {
    try {
      // set({ isLoading: true, error: null })
      // const res = await fetch(`http://localhost:3000/api/cart/${userId}`)
      // const data = await res.json()
      // console.log(data)
      // set({ products: data.cart, isLoading: false })
      return set((state) => ({
        updatingCart: false,
        error: null,
        filterClientName: name,
      }));
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));
