import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConnectionService} from './../../providers/connection-service';
/**
 * Generated class for the Endereco page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-endereco',
  templateUrl: 'endereco.html',
})
export class EnderecoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private conn : ConnectionService) {
  }

  //Met¨®do que ser¨¢ utilizado pela view ap¨®s o click para fazer conex?o com o provider connection-service
  buscarCEP() : void {
    this.conn.getCep("11365350")
      .then((res) => {
        let json = res.json();
        console.log(json);
      }).catch((err) => {
        console.log(err);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Endereco');
  }

}
