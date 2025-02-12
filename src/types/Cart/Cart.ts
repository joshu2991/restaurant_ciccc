export interface CartItem {
    sys: { id: string };
    fields: {
      title: string;
      price: number;
      itemImage?: {
        fields: {
          file: {
            url: string;
          };
        };
      };
    };
    quantity: number;
  }