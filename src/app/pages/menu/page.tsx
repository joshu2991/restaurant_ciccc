"use client";
import { useEffect, useState } from "react";
import "./menu.css";

const MenuPage = () => {
    const [menuItems, setMenuItems] = useState<any[]>([]);

    useEffect(() => {
        fetch("http://localhost:3005/products")
            .then((response) => response.json())
            .then((data) => setMenuItems(data))
            .catch((error) => console.error("Error fetching menu data:", error));
    }, []);

    return (
        <div className="menu-container">
            <h1 className="menu-title">Menu</h1>
            <div className="menu-grid">
                {menuItems.map((item) => (
                    <div className="menu-item" key={item.id} style={{ backgroundImage: `url(${item.photo})` }}>
                        <div className="item-info">
                            <h3 className="item-name">{item.name}</h3>
                            <p className="item-price">${item.price}</p>
                            <p className="item-about">{item.about}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuPage;
