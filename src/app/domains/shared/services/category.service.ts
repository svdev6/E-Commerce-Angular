import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "@shared/models/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

	private api = inject(HttpClient)

  constructor() { }

	getAllCategories(){
		return this.api.get<Category[]>('https://api.escuelajs.co/api/v1/categories')
	}

}
