import { Component } from '@angular/core';
import { GetterService } from './services/getter.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'TestAng';
	url = null;

	constructor(private getter: GetterService) {}

	async getImage() {
		let width = document.getElementById('width') as HTMLInputElement;
		let height = document.getElementById('height') as HTMLInputElement;
		let widthVal = width.value || 1920;
		let heightVal = height.value || 1080;
		this.url = await this.getter.getImage(widthVal, heightVal);
	}
}
