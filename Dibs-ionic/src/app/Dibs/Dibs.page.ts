import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Dibs',
  templateUrl: 'Dibs.page.html',
  styleUrls: ['Dibs.page.scss']
})

export class DibsPage {

	private items;

	constructor(private http: HttpClient) {
		//this.http.get('/getUsers').subscribe((data) => {
	    //	console.log(data);
	    //});
        this.items = [
            { title: 'Notatka 1', description: 'Opis notatki 1' },
            { title: 'Notatka 1', description: 'Opis notatki 1' },
            { title: 'Notatka 2', description: 'Opis notatki 2' },
            { title: 'Notatka 3', description: 'Opis notatki 3' }
        ];
	}
	
}
