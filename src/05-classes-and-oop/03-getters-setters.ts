class Product {
    private _price: number;

    constructor(price: number) {
        this._price = price;
    }

    // Getter
    get price(): number {
        return this._price;
    }

    // Setter
    set price(value: number) {
        if (value > 0) {
            this._price = value;
        } else {
            console.log('Price must be a positive number.');
        }
    }
}

const product = new Product(100);
console.log(product.price);  // Output: 100

product.price = 150;         // Setting new price
console.log(product.price);  // Output: 150

product.price = -50;         // Invalid price, will trigger the setter logic
