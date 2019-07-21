import { Component } from '@angular/core';
import { DibItemComponent } from '../components/components.module';

@Component({
  selector: 'app-Dibs',
  templateUrl: 'Dibs.page.html',
  styleUrls: ['Dibs.page.scss']
})

export class DibsPage {

	constructor() {
        this.items = [
            { title: 'Notatka 1', description: 'Opis notatki 1' },
            { title: 'Notatka 1', description: 'Opis notatki 1' },
            { title: 'Notatka 2', description: 'Opis notatki 2' },
            { title: 'Notatka 3', description: 'Opis notatki 3' }
        ];
        this.items = [
            { title: 'Notatka 1', description: 'Opis notatki 1' },
            { title: 'Notatka 1', description: 'Opis notatki 1' },
            { title: 'Notatka 2', description: 'Opis notatki 2' },
            { title: 'Notatka 3', description: 'Opis notatki 3' }
        ];
	}
	
}
