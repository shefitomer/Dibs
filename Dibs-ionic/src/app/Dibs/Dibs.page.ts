import { Component } from '@angular/core';
import { COLOR_CLICKED, COLOR_NOT_CLICKED } from "../app.module";

@Component({
  selector: 'app-Dibs',
  templateUrl: 'Dibs.page.html',
  styleUrls: ['Dibs.page.scss']
})

export class DibsPage {

	public color = COLOR_NOT_CLICKED
	private clicked = false;
	public icon = "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7740?d=identicon&f=y"

	constructor() {}

	change_color() {
		if(this.clicked == false)
		{
			this.clicked = true
			this.icon = "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
			this.color = COLOR_CLICKED
			console.log(COLOR_CLICKED)
		}
		else{
			this.clicked = false
			this.icon = "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7740?d=identicon&f=y"
			this.color = COLOR_NOT_CLICKED
			console.log(COLOR_NOT_CLICKED)
		}
	}

}
