export interface CartItem {
    id: string;
    price: number;
    quantity: number;
    category: 'electronics' | 'clothing' | 'food';
}

/**
 * Need to implement tax calculation based on category.
 * Electronics: 15%, Clothing: 5%, Food: 0%
 */
export function calculateTotal(items: CartItem[]): number {
    let total = 0;
    for (const item of items) {
        total += item.price * item.quantity;
    }
    return total;
}