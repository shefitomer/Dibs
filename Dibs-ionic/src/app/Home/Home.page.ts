import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Home',
  templateUrl: 'Home.page.html',
  styleUrls: ['Home.page.scss']
})
export class HomePage {

  constructor(private http: HttpClient) {
  	this.http.get('/getUsers').subscribe((data) => {
    	console.log(data);
	});
  }

}
