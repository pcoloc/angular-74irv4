import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private toast: ToastrService) {}

  test() {
    this.toast.success("I'm a toast!", 'Success!');
  }
}
