import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Events } from 'ionic-angular';

/**
 * Generated class for the FourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-four',
  templateUrl: 'four.html',
})
export class FourPage {


  data5 : any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public events:Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FourPage');
  }



  next5(){
    this.events.publish("events" , this.data5);
  }


}
