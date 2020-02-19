import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class GetterService {
	constructor() {}

	async getImage(width, height) {
		let image = await fetch(`https://source.unsplash.com/random/${width}x${height}`);
		return image.url;
	}
}
