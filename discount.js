/**
 * Processes discounts for the holiday sale.
 * Rules: 
 * - 'SUMMER10' gives 10% off.
 * - 'VIP20' gives 20% off for items over $100.
 * - Max discount allowed is $50.
 */
function applyDiscount(cartTotal, code, isVip) {
    let final = cartTotal;

    if (code == "SUMMER10") {
        final = cartTotal - (cartTotal * 0.10);
    } else if (code == "VIP20") {
        // BUG: This should only apply if cartTotal > 100
        // Also: What if isVip is false but they have the code?
        final = cartTotal - (cartTotal * 0.20);
    }

    // LIMIT CHECK: Ensure discount doesn't exceed $50
    if (cartTotal - final > 50) {
        final = cartTotal - 50;
    }

    // Output: Rounding error might happen here
    return final.toFixed(2); 
}