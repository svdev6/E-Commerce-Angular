import {Component, inject, Input, signal} from '@angular/core';
import {ProductService} from "@shared/services/product.service";
import {Product} from "@shared/models/product.model";
import {CurrencyPipe, UpperCasePipe} from "@angular/common";
import {CartService} from "@shared/services/cart.service";

@Component({
  selector: 'app-product-detail',
  standalone: true,
	imports: [
		CurrencyPipe,
		UpperCasePipe
	],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export default class ProductDetailComponent {
	@Input() id?: string
	private productService = inject(ProductService)
	private cartService = inject(CartService)
	product = signal<Product | null>(null)
	highlightImage = signal<string>('')

	ngOnInit(){
		if(this.id){
			this.productService.getProductById(this.id)
				.subscribe({
					next: (product) => {
						this.product.set(product)
						this.setHighlightImage(product.images.at(0) ?? '')
					}
				})
		}
	}

	addProductToCart(){
		const product = this.product()
		if(product){
			this.cartService.addProductToCart(product)
		}
	}

	setHighlightImage(url: string){
		this.highlightImage.set(url)
	}

}
