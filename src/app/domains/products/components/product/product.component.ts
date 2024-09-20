import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {CurrencyPipe, DatePipe, NgOptimizedImage, UpperCasePipe} from "@angular/common";
import {Product} from "@shared/models/product.model";
import {CartService} from "@shared/services/cart.service";
import {ReversePipe} from "@shared/pipes/reverse.pipe";
import {TimeAgoPipe} from "@shared/pipes/time-ago.pipe";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-product',
  standalone: true,
	imports: [
		NgOptimizedImage,
		DatePipe,
		UpperCasePipe,
		CurrencyPipe,
		ReversePipe,
		TimeAgoPipe,
		RouterLink
	],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
	@Input({required: true}) product!: Product
	private cartService = inject(CartService)

	// @Output() addToCart = new EventEmitter<string>()

	addToCartHandler(product: Product) {
		// console.log('Click desde el child')
		// this.addToCart.emit('Hola, este es el emit desde el child')
		this.cartService.addProductToCart(product)
	}
}
