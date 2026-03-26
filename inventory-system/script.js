// =========================
// Part 1: Base Class Product
// =========================

class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // Method to calculate total value of product stock
    getTotalValue() {
        return this.price * this.quantity;
    }

    // Method to return product details as a string
    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }

    // =========================
    // Part 3: Static Method
    // =========================
    static applyDiscount(products, discount) {
        // Loop through all products and reduce price
        products.forEach(product => {
            product.price = product.price * (1 - discount);
        });
    }
}

// =========================
// Part 2: Subclass PerishableProduct
// =========================

class PerishableProduct extends Product {
    constructor(name, price, quantity, expirationDate) {
        // Call parent constructor
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    // Override toString method
    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
    }
}

// =========================
// Part 4: Store Class
// =========================

class Store {
    constructor() {
        this.inventory = [];
    }

    // Add product to inventory
    addProduct(product) {
        this.inventory.push(product);
    }

    // Calculate total inventory value
    getInventoryValue() {
        let total = 0;

        this.inventory.forEach(product => {
            total += product.getTotalValue();
        });

        return total;
    }

    // Find product by name
    findProductByName(name) {
        for (let product of this.inventory) {
            if (product.name.toLowerCase() === name.toLowerCase()) {
                return product;
            }
        }
        return null;
    }
}

// =========================
// Part 5: Testing the System
// =========================

// Create store
const store = new Store();

// Create regular products
const apple = new Product("Apple", 2.50, 50);
const bread = new Product("Bread", 3.00, 30);
const rice = new Product("Rice", 10.00, 20);

// Create perishable products
const milk = new PerishableProduct("Milk", 1.50, 10, "2026-04-01");
const yogurt = new PerishableProduct("Yogurt", 2.00, 15, "2026-03-30");

// Add products to store
store.addProduct(apple);
store.addProduct(bread);
store.addProduct(rice);
store.addProduct(milk);
store.addProduct(yogurt);

// Print total inventory value BEFORE discount
console.log("Total Inventory Value BEFORE discount: $" + store.getInventoryValue().toFixed(2));

// Apply 15% discount
Product.applyDiscount(store.inventory, 0.15);

// Print total inventory value AFTER discount
console.log("Total Inventory Value AFTER discount: $" + store.getInventoryValue().toFixed(2));

// Find a product by name
const foundProduct = store.findProductByName("Milk");

if (foundProduct) {
    console.log("Product Found:");
    console.log(foundProduct.toString());
} else {
    console.log("Product not found.");
}// added comment for clarity
added comments to explain code
// calculating total inventory value
console.log("Store initialized");
