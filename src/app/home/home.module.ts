import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button'
import { InputGroupModule } from 'primeng/inputgroup'
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CoolStorageModule } from '@angular-cool/storage';
import { HomeComponent } from './home.component';
import { UsersComponent } from '../users/users.component';
import { LoginComponent } from '../login/login.component';
import { ToastUtils } from '../../utils/ToastUtils';
import { TopbarComponent } from '../topbar/topbar.component';

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
    MessageModule,
    ProgressSpinnerModule,
    CoolStorageModule.forRoot(),
  ],
  declarations: [
    HomeComponent,
    UsersComponent,
    LoginComponent,
    TopbarComponent
  ],
  exports: [HomeComponent],
  bootstrap: [HomeComponent],
  providers: [
    ToastUtils,
  ],
})
export class HomeModule { }
