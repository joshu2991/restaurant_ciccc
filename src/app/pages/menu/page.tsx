'use client';
import { useEffect, useState } from 'react';
import './menu.css'
import client from "../../lib/contentful";
import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Button from '@/app/components/Button/Button';
import { useCart } from '@/app/context/CartContext';

export const dynamic = 'force-dynamic';

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const { addToCart } = useCart();

  const fetchEntries = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "restaurant",
      });
      return entries.items;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    const getEntries = async () => {
      const items = await fetchEntries();
      setMenuItems(items || []);
    };
    getEntries();
  }, []);

  return (
    <div className="menu-container">
      <h1 className="menu-title">Menu</h1>
      <div className="menu-grid">
        {menuItems.map((entry: any) => {
          const { title, description, price, itemImage} = entry.fields as any;

          const imageUrl = itemImage?.fields?.file?.url;
          const fullImageUrl = imageUrl ? `https:${imageUrl}` : '';

          return (
            <div
              className="menu-item"
              key={entry.sys.id}
            >
              {fullImageUrl && (
                <Image 
                  src={fullImageUrl} 
                  alt={title} 
                  width={500} 
                  height={500}
                  className="menu-image"
                /> 
              )}
              <div className="item-info">
                <h3 className="item-name">{title}</h3>
                <p className="item-price">${price}</p>
                <div className="item-about">
                  {documentToReactComponents(description)}
                </div>
              </div>
              <div className="item-button py-3">
                <Button 
                  text="Add to Cart" 
                  classname="button-primary" 
                  onClick={() => addToCart(entry)} 
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuPage;

