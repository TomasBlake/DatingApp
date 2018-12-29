import { Injectable } from '@angular/core';
import alertify from 'alertifyjs/build/alertify.min.js';
// declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

confirm (message: string, okCallback: () => any) { // okCallback funkci poskytneme ve chvíli volání
  alertify.confirm(message, function(e) {
    if (e) {
      okCallback();
    } else {

    }
  });
}

success (message: string) {
  alertify.success(message);
}

error (message: string) {
  alertify.error(message);
}

warning (message: string) {
  alertify.warning(message);
}

message (message: string) {
  alertify.message(message);
}
}
