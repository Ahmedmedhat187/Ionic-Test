import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DirectivesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-directives',
  templateUrl: 'directives.html',
})
export class DirectivesPage {


  value :boolean = true;
  data = ["name 1" , "name 2" ,"name 3" ,"name 4"];
  myName : any ="name 1";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectivesPage');
  }


  

}
