import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticateService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';
import { FirebaseAuth } from 'angularfire2';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
	selector: 'app-Dibs',
	templateUrl: 'Dibs.page.html',
	styleUrls: ['Dibs.page.scss']
})

export class DibsPage {

	items;
	userDoc;
	profile;

	get_item(item_key) {
		return this.fireStore.collection('Items').doc(item_key).get();
	}

	getDibItems() {
		this.userDoc = this.fireStore.collection('UserProfile').doc(this.authService.userDetails().uid).get().subscribe(doc => {
			if(doc.exists){
				this.fireStore.collection('Apartment').doc(doc.data().Apartment).get().subscribe(apt => {
					if(apt.exists){
						for(let number=0; number < apt.data().Items.length; number++){
							this.get_item(apt.data().Items[number]).subscribe(item => {
								this.items.push(item.data());
							});
						};
					}
				})	
			}
		});
		return;
	}

	constructor(private http: HttpClient,
				private authService: AuthenticateService,
				private navCtrl: NavController,
				private fireStore: AngularFirestore) {
		this.items = [];
		this.getDibItems();
	}

}
