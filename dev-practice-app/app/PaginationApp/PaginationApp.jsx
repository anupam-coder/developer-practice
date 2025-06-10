"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import ProductCard from "./Components/ProductCard";
import Pagination from "./Components/Pagination";
import { PAGE_SIZE } from "./constants";

const PaginationApp = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  //use a try catch block in async await code so that we can show errors whenever we get some
  //errors
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return !products.length ? (
    <h1>No Products Found</h1>
  ) : (
    <div className="App">
      <h1>Pagination</h1>
      <div className="products-container">
        {products.slice(start, end).map((p) => (
          <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>
      {/* <div className="pagination-container">
        <button
          className="page-number"
          disabled={currentPage === 0}
          onClick={() => goToPrevPage()}
        >
          ◀
        </button>
        {[
          ...Array(noOfPages)
            .keys()
            .map((num) => (
              <button
                onClick={() => handlePageChange(num)}
                className={`page-number ${currentPage === num ? "active" : ""}`}
                key={num}
              >
                {num + 1}
              </button>
            )),
        ]}
        <button
          className="page-number"
          disabled={currentPage === noOfPages - 1}
          onClick={() => goToNextPage()}
        >
          ▶
        </button>
      </div> */}
      <Pagination
        handlePageChange={handlePageChange}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        noOfPages={noOfPages}
        currentPage={currentPage}
      />
    </div>
  );
};

export default PaginationApp;
