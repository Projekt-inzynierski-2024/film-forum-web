import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ButtonModule } from 'primeng/button'
import { UsersComponent } from '../users/users.component';
import { InputGroupModule } from 'primeng/inputgroup'
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ToastUtils } from '../../utils/ToastUtils';
import { LoginComponent } from '../login/login.component';

@NgModule({
  imports: [
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CardModule,
    CommonModule,
    MessagesModule,
    ToastModule,
  ],
  declarations: [
    HomeComponent,
    UsersComponent,
    LoginComponent
  ],
  exports: [HomeComponent],
  bootstrap: [HomeComponent],
  providers: [
    ToastUtils,
  ],
})
export class HomeModule { }
