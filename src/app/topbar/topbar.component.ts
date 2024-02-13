import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/auth.service';
import { UserDto } from '../users/dto/UserDto';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
  providers: [DialogService]
})
export class TopbarComponent implements OnInit {

  is_auth: boolean = false;
  user: UserDto | null = null;

  searchDialogRef: DynamicDialogRef | undefined;

  constructor(private authService: AuthService, private dialogService: DialogService) {
    this.user = authService.getAuthUser();
  }

  ngOnInit() {
    this.is_auth = this.authService.isAuth();
  }

  logout() {
    this.authService.logout();
  }

  openSearch() {
    this.searchDialogRef = this.dialogService.open(SearchComponent, {
      position: "top",
      keepInViewport: true,
      transitionOptions: "100ms ease",
      dismissableMask: true,
      showHeader: false,
      styleClass: 'h-screen m-0 xl:w-6 lg:w-9 md:w-12 sm:w-12 search-dialog',
    });
  }
}
