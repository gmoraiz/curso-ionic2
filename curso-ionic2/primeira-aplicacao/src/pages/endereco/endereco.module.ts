import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { EnderecoPage } from './endereco';

@NgModule({
  declarations: [
    EnderecoPage,
  ],
  imports: [
    IonicModule.forRoot(EnderecoPage),
  ],
  exports: [
    EnderecoPage
  ]
})
export class EnderecoModule {}
