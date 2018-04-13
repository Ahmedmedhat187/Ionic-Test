import { Component } from '@angular/core';
import { NavController  , ModalController,Events  } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { FirstPage } from '../first/first';
import { ArraysPage } from '../arrays/arrays';
import { DirectivesPage } from '../directives/directives';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data1 : any;
  data2 : any;
  data3 : any;
  data4 : any;

  constructor(public navCtrl: NavController , public modalController:ModalController , public user:UserProvider, public events:Events) {

  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad FourPage');
    this.events.subscribe("events" , data =>{
      console.log("Home PAge : " ,data);
    });
  }



  pass(){
    this.navCtrl.push(FirstPage);
  }



  arrayss(){
    this.navCtrl.push(ArraysPage);
  }



  directives(){
    this.navCtrl.push(DirectivesPage);
  }

}
