import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import ProductSlice from "./ProductSlice";
import CardSlice from "./CardSlice";
import SearchSlice from "./SearchSlice";

export const store = configureStore({
  reducer: {
    categories: CategorySlice,
    products: ProductSlice,
    cards: CardSlice,
    search: SearchSlice,
  },
});
