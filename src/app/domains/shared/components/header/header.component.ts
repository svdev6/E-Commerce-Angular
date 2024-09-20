import {Component, inject} from '@angular/core';
import {CartService} from "@shared/services/cart.service";
import {CartComponent} from "@shared/components/cart/cart.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
	imports: [
		CartComponent,
		RouterLink,
		RouterLinkActive
	],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
	private cartService = inject(CartService)
	cartProducts = this.cartService.cartProducts

	toggleCart(){
		this.cartService.toggleShoppingCart()
	}


}
