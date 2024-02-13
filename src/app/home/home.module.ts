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
import { InputSwitchModule } from 'primeng/inputswitch';
import { RouterModule } from '@angular/router';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { SearchComponent } from '../search/search.component';

@NgModule({
  imports: [
    RouterModule,
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
    InputSwitchModule,
    DynamicDialogModule,
  ],
  declarations: [
    HomeComponent,
    UsersComponent,
    LoginComponent,
    TopbarComponent,
    SearchComponent,
  ],
  exports: [HomeComponent],
  bootstrap: [HomeComponent],
  providers: [
    ToastUtils,
  ],
})
export class HomeModule { }
