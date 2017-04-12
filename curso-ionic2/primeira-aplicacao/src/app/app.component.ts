import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SobrePage } from '../pages/sobre/sobre';
import { EnderecoPage } from '../pages/endereco/endereco';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  pages : Array<{component: any, title: string, icon: string}>; // pages √© um tipo Array com type generic.
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
    // definindo os itens do menu.
    this.pages = [
      {component: HomePage, title: 'Home', icon: 'home'},
      {component: SobrePage, title: 'Sobre', icon: 'at'},
      {component: EnderecoPage, title: 'EndereÁo', icon: 'address'}
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  // metodo que ser√° utilizado pela view para abrir a p√°gina que foi selecionado respectivamente.
  openPage(page: any): void{
    this.rootPage = page.component;
    this.menuCtrl.close(); //Pegamos o menu importado pelo parametro do construtor e damos um close nele quando abrirmos outra p·gina.
  }

}
