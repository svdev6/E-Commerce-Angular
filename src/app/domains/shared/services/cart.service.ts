import {computed, Injectable, signal} from '@angular/core';
import {Product} from "@shared/models/product.model";

@Injectable({
	providedIn: 'root'
})

export class CartService {
	showShoppingCart = signal(false);
	cartTotalPrice = computed(() => {
		const products = this.cartProducts()
		return products.reduce((total, prod) => total + prod.price, 0)
	})
	cartProducts = signal<Product[]>([])


	toggleShoppingCart() {
		this.showShoppingCart.update(prevState => !prevState);
	}

	addProductToCart(product: Product){
		// Check if the product already was added to the cart
		const theProductWasAdded = this.cartProducts().some(cartProduct => cartProduct.id === product.id)
		if(theProductWasAdded) return

		this.cartProducts.update(cartProducts => [...cartProducts, product])
	}

}
