import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from './data'


const allCategories = ["All", ...new Set(items.map((item) => item.category))];

const Mainmmenu = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menuu-section">
        <div className="title">
          
          <h2>Recommended Destination
</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default Mainmmenu;