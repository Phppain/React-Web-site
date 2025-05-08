// src/features/catalog/catalogSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Эмуляция базы данных
const allItems = [
  { id: 1, title: "Элемент 1", price: 100, category: "Одежда", color: "Синий" },
  { id: 2, title: "Элемент 2", price: 200, category: "Обувь", color: "Красный" },
  { id: 3, title: "Элемент 3", price: 300, category: "Аксессуары", color: "Зелёный" },
  { id: 4, title: "Элемент 4", price: 150, category: "Одежда", color: "Красный" },
  { id: 5, title: "Элемент 5", price: 220, category: "Одежда", color: "Синий" },
  { id: 6, title: "Элемент 6", price: 320, category: "Обувь", color: "Зелёный" },
  // ...добавь больше для 3+ страниц
];

const initialState = {
  allItems,
  filteredItems: allItems,
  currentPage: 1,
  itemsPerPage: 3,
  filters: {
    category: "",
    color: "",
    maxPrice: 1000,
  },
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.filters = action.payload;
      const { category, color, maxPrice } = action.payload;
      state.filteredItems = state.allItems.filter(item => {
        return (
          (category ? item.category === category : true) &&
          (color ? item.color === color : true) &&
          item.price <= maxPrice
        );
      });
      state.currentPage = 1; // сбрасываем на первую страницу при фильтрации
    },
  },
});

export const { setPage, setFilters } = catalogSlice.actions;
export default catalogSlice.reducer;