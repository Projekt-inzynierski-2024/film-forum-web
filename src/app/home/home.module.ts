import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ButtonModule } from 'primeng/button'

@NgModule({
  imports: [ButtonModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
