// KateqoriyaOptions.jsx
import React, { useState } from 'react';
import './KateqoriyaOptions.css'; // Ensure this CSS file is created

const KateqoriyaOptions = () => {
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);

  const handleAddCategoryClick = () => {
    setShowAddCategoryForm(!showAddCategoryForm);
    setShowAllCategories(false);
  };

  const handleAllCategoriesClick = () => {
    setShowAllCategories(!showAllCategories);
    setShowAddCategoryForm(false);
  };

  const handleDeleteCategory = (id) => {
    console.log(`Deleting category with id: ${id}`);
    // Implement delete functionality here
  };

  const mockCategories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
  ];

  return (
    <div className="kateqoriya-options">
      <h2>Kateqoriyalar</h2>
      <ul>
        <li onClick={handleAddCategoryClick}>Kateqoriya əlavə et</li>
        <li onClick={handleAllCategoriesClick}>Butun kateqoriyalar</li>
      </ul>

      {showAddCategoryForm && (
        <div className="kateqoriya-form">
          <h3>Kateqoriya əlavə et</h3>
          <form>
            <label htmlFor="category-name">Kateqoriya adı</label>
            <input id="category-name" type="text" />
            <button type="submit" className="submit-button">Göndər</button>
          </form>
        </div>
      )}

      {showAllCategories && (
        <div className="all-categories">
          {mockCategories.map(category => (
            <div key={category.id} className="category-item">
              <h4>{category.name}</h4>
              <div className="delete-containercategory">
                <button
                  className="delete-buttoncategory"
                  onClick={() => handleDeleteCategory(category.id)}
                >
              Sil
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default KateqoriyaOptions;
