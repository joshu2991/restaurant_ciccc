import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from "next/image";
import "./MenuList.css";
import Button from '@/app/components/Button/Button';

interface MenuListProps {
  items: any[];
  onAddToCart: (item: any) => void;
}

export default function MenuList({ items, onAddToCart }: MenuListProps) {
  return (
    <div className="menu-list">
      {items.map((entry: any) => {
        const { title, description, price, itemImage } = entry.fields;
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
                className="menu-item-image"
              /> 
            )}
            <div className="menu-item-info">
              <p className="menu-item-price">${price}</p>
              <h3 className="menu-item-title">{title}</h3>              
              <div className="menu-item-about">
                {documentToReactComponents(description)}
              </div>
            </div>
            <div className="menu-item-button">
              <Button 
                text="Add to Cart" 
                classname="button-primary" 
                onClick={() => onAddToCart(entry)} 
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}