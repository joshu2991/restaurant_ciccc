export interface itemMenuProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
    image: string;
    price: string;
    description: string;
}

export interface MenuProps {
    menuItems: itemMenuProps[];
}