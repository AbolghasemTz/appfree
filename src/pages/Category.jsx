import React from 'react';
import CategoryTable from '../features/admin/categories/CategoryTable';
import CategoryHeader from '../features/admin/categories/CategoryHeader';


function Category() {
  return (
    <div>
      <CategoryHeader />
      <CategoryTable />
    </div>
  );
}

export default Category;