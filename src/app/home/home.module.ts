import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ButtonModule } from 'primeng/button'
import { UsersComponent } from '../users/users.component';
import { InputGroupModule } from 'primeng/inputgroup'
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [ButtonModule, InputGroupModule, InputGroupAddonModule, InputTextModule, FormsModule, HttpClientModule],
  declarations: [HomeComponent, UsersComponent],
  exports: [HomeComponent],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
