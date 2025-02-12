'use client';
import { useCart } from '@/app/context/CartContext';
import Image from 'next/image';
import Button from '@/app/components/Button/Button';
import { useRouter } from 'next/navigation';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const router = useRouter();

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.sys.id} className="flex items-center border-b py-4">
          {item.fields.itemImage && (
            <Image
              src={`https:${item.fields.itemImage.fields.file.url}`}
              alt={item.fields.title}
              width={100}
              height={100}
              className="object-cover"
            />
          )}
          <div className="ml-4 flex-grow">
            <h3 className="font-bold">{item.fields.title}</h3>
            <p>${item.fields.price}</p>
            <div className="flex items-center mt-2">
              <button
                onClick={() => updateQuantity(item.sys.id, Math.max(0, item.quantity - 1))}
                className="px-2 py-1 border rounded"
              >
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.sys.id, item.quantity + 1)}
                className="px-2 py-1 border rounded"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.sys.id)}
                className="ml-4 text-red-500"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <p className="text-xl font-bold">Total: ${getCartTotal().toFixed(2)}</p>
        <Button
          text="Proceed to Checkout"
          classname="button-primary mt-4"
          onClick={() => router.push('/checkout')}
        />
      </div>
    </div>
  );
};

export default CartPage;