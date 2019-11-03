import { Component, OnInit, Input } from '@angular/core';
export const COLOR_CLICKED = "primary"
export const COLOR_NOT_CLICKED = "light"
export const AVATAR_NOT_CLICKED = "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
export const AVATAR_CLICKED = "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7740?d=identicon&f=y"

@Component({
	selector: 'dib-item',
	templateUrl: './dib-item.component.html',
	styleUrls: ['./dib-item.component.scss'],
})
export class DibItemComponent implements OnInit {

	color: string;

	clicked: boolean;
	icon: string;
	@Input() title: string;
	@Input() description: string;

	change_color() {
		if(this.clicked == false)
		{
			this.clicked = true;
			this.icon = AVATAR_CLICKED;
			this.color = COLOR_CLICKED;
		}
		else{
			this.clicked = false;
			this.icon = AVATAR_NOT_CLICKED;
			this.color = COLOR_NOT_CLICKED;
		}
	};

	constructor() {
		this.icon = AVATAR_NOT_CLICKED;
		this.clicked = false;
		this.color = COLOR_NOT_CLICKED;
      };

	ngOnInit() {};

}
