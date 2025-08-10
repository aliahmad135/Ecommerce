// Test product data for ProductCard demo
// This file contains sample product data used in the ProductCardDemo component

export const testProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 179.99,
    originalPrice: 249.99,
    image:
      "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Audio",
    rating: 5,
    reviewCount: 2847,
    stock: 24,
    isWishlisted: false,
    variants: [
      { id: "white", name: "White", price: 179.99, stock: 24 },
      { id: "black", name: "Space Black", price: 189.99, stock: 12 },
      { id: "silver", name: "Silver", price: 179.99, stock: 8 },
    ],
    variantType: "Color",
  },
  {
    id: 2,
    name: "Smart Fitness Tracker",
    price: 149.99,
    originalPrice: 199.99,
    image:
      "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Wearables",
    rating: 4,
    reviewCount: 1523,
    stock: 0,
    isWishlisted: true,
    variants: [
      {
        id: "black-sport",
        name: "Black Sport Band",
        price: 149.99,
        stock: 0,
      },
      { id: "blue-silicone", name: "Blue Silicone", price: 159.99, stock: 0 },
      { id: "green-nylon", name: "Green Nylon", price: 149.99, stock: 0 },
    ],
    variantType: "Band Style",
  },
  {
    id: 3,
    name: "Cotton Blend Hoodie",
    price: 34.99,
    originalPrice: 49.99,
    image:
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Apparel",
    rating: 4,
    reviewCount: 856,
    stock: 18,
    isWishlisted: false,
    variants: [
      { id: "xs", name: "XS", price: 34.99, stock: 4 },
      { id: "s", name: "S", price: 34.99, stock: 8 },
      { id: "m", name: "M", price: 34.99, stock: 6 },
      { id: "l", name: "L", price: 36.99, stock: 0 },
      { id: "xl", name: "XL", price: 36.99, stock: 2 },
    ],
    variantType: "Size",
  },
  {
    id: 4,
    name: "Professional DSLR Camera",
    price: 1299.99,
    image:
      "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Photography",
    rating: 5,
    reviewCount: 234,
    stock: 2,
    isWishlisted: false,
    variants: [],
  },
  {
    id: 5,
    name: "Forest Scenery",
    price: 109.99,
    originalPrice: 139.99,
    image:
      "https://images.pexels.com/photos/4842520/pexels-photo-4842520.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Office",
    rating: 5,
    reviewCount: 987,
    stock: 15,
    isWishlisted: false,
    variants: [
      { id: "white-base", name: "White Base", price: 109.99, stock: 15 },
      { id: "black-base", name: "Black Base", price: 119.99, stock: 9 },
    ],
    variantType: "Base Color",
  },
  {
    id: 6,
    name: "Gourmet Coffee Beans",
    price: 18.99,
    image:
      "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Food & Drink",
    rating: 4,
    reviewCount: 445,
    stock: 0,
    isWishlisted: false,
    variants: [
      { id: "light", name: "Light Roast", price: 18.99, stock: 0 },
      { id: "medium", name: "Medium Roast", price: 18.99, stock: 0 },
      { id: "dark", name: "Dark Roast", price: 20.99, stock: 0 },
      { id: "espresso", name: "Espresso Blend", price: 22.99, stock: 0 },
    ],
    variantType: "Roast Level",
  },
  {
    id: 7,
    name: "RGB Gaming Keyboard",
    price: 159.99,
    originalPrice: 199.99,
    image:
      "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Tech",
    rating: 5,
    reviewCount: 1247,
    stock: 8,
    isWishlisted: false,
    variants: [
      { id: "brown", name: "Brown Switches", price: 159.99, stock: 8 },
      { id: "blue", name: "Blue Switches", price: 159.99, stock: 5 },
      { id: "red", name: "Red Switches", price: 169.99, stock: 3 },
    ],
    variantType: "Switch Type",
  },
  {
    id: 8,
    name: "Ergonomic Wireless Mouse",
    price: 89.99,
    image:
      "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Tech",
    rating: 4,
    reviewCount: 692,
    stock: 22,
    isWishlisted: false,
    variants: [],
  },
];

export default testProducts;
