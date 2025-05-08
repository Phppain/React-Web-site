import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { setFilters, setPage } from "../../feauters/catalog/catalogSlice.js";
import "./Shop.css";

export const Shop = () => {
  const dispatch = useDispatch();
  const {
    filteredItems,
    currentPage,
    itemsPerPage,
    filters,
  } = useSelector((state) => state.catalog);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(startIdx, startIdx + itemsPerPage);

  const handleFilterChange = (field, value) => {
    dispatch(setFilters({
      ...filters,
      [field]: field === "maxPrice" ? parseFloat(value) || 1000 : value
    }));
  };

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  useEffect(() => {
    window.scrollTo(0, 0); // на всякий случай
  }, [currentPage]);

  return (
    <div className="shop-page">
      <h1>K/DA Shop</h1>

      <div className="filters">
        <select
          value={filters.category}
          onChange={(e) => handleFilterChange("category", e.target.value)}
        >
          <option value="">Все категории</option>
          <option value="Одежда">Одежда</option>
          <option value="Обувь">Обувь</option>
          <option value="Аксессуары">Аксессуары</option>
        </select>

        <select
          value={filters.color}
          onChange={(e) => handleFilterChange("color", e.target.value)}
        >
          <option value="">Все цвета</option>
          <option value="Синий">Синий</option>
          <option value="Красный">Красный</option>
          <option value="Зелёный">Зелёный</option>
        </select>

        <select
          value={filters.maxPrice}
          onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
        >
          <option value="1000">Любая цена</option>
          <option value="200">До 200</option>
          <option value="300">До 300</option>
        </select>
      </div>

      <div className="product-list">
        {currentItems.length ? (
          currentItems.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))
        ) : (
          <p className="no-results">Ничего не найдено</p>
        )}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx + 1}
            className={currentPage === idx + 1 ? "active" : ""}
            onClick={() => handlePageChange(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};