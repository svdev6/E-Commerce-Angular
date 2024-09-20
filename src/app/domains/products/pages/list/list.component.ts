import {Component, inject, Input, signal, SimpleChanges} from '@angular/core';
import {ProductComponent} from "@products/components/product/product.component";
import {Product} from "@shared/models/product.model";
import {ProductService} from "@shared/services/product.service";
import {CategoryService} from "@shared/services/category.service";
import {Category} from "@shared/models/category.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-list',
  standalone: true,
	imports: [ProductComponent, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {
	private productsService = inject(ProductService)
	private categoryService = inject(CategoryService)
	products = signal<Product[]>([])
	categories = signal<Category[]>([])
	@Input() categoryId?: string

	ngOnInit(){
		this.getCategories()
	}

	ngOnChanges(changes: SimpleChanges){
			this.getProducts()
	}

	private getProducts(){
		this.productsService.getProducts(this.categoryId)
			.subscribe({
				next: (products) => {
					this.products.set(products)
				},
				error: () => {
				}
			})
	}

	private getCategories(){
		this.categoryService.getAllCategories()
			.subscribe({
				next: (categories => {
					this.categories.set(categories)
				})
			})
	}

	fromChild(ev: string) {
		console.log('Estamos en el padre')
		console.log(ev)
	}

}
