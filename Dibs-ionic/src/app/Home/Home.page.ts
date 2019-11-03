import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticateService } from '../services/authentication.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-Home',
	templateUrl: 'Home.page.html',
	styleUrls: ['Home.page.scss']
})

export class HomePage {

	public userdata;
	public username;
	public apartment;
	public firebasedata;

	public userEmail;

	get_user_apartment() {
		if(this.authService.userDetails()) {
			this.fireStore.collection('UserProfile').doc(this.authService.userDetails().uid).get().subscribe(doc => {
				this.fireStore.collection('Apartment').doc(doc.data().Apartment).get().subscribe(apt => {
					if(apt.exists){
						this.apartment = apt.data().Name;
					}
				});
			});
		}
	}

	get_user_data() {
		if(this.authService.userDetails()) {
			this.fireStore.collection('UserProfile').doc(this.authService.userDetails().uid).get().subscribe(doc => {
				if(doc.exists){
					this.username = doc.data().UserName;
				}
			});
		}
	}

	getUser() {
		this.username = "NotFound"
		this.apartment = "NotFound"
		if(this.authService.userDetails()){
			this.userEmail = this.authService.userDetails().email;
			this.firebasedata = this.authService.userDetails();

			this.get_user_apartment();
			this.get_user_data();
		}
	}

	constructor(public authService: AuthenticateService, public navCtrl: NavController, private fireStore: AngularFirestore) {
		this.userdata = "";
		this.getUser();
	}

	OnInit(){
		if(this.authService.userDetails()){
			this.userEmail = this.authService.userDetails().email;
			this.userdata = this.authService.userDetails().uid;
			this.getUser();
		}
		else{
			this.navCtrl.navigateBack('');
		}
	}

	logout(){
		this.authService.logoutUser()
		.then(res => {
			this.navCtrl.navigateBack('');
		})
		.catch(error => {
			console.log(error);
		})
	}

}