import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SobrePage } from './sobre';

@NgModule({
  declarations: [
    SobrePage,
  ],
  imports: [
    IonicModule.forRoot(SobrePage),
  ],
  exports: [
    SobrePage
  ]
})
export class SobreModule {}
