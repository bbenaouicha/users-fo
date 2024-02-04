import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor() { }
  showSnackbar(message: string, duration: number = 3000) {
    const snackbar = document.createElement('div');
    snackbar.classList.add('alert', 'alert-success', 'position-fixed', 'bottom-0', 'end-0');
    snackbar.innerText = message;
    snackbar.style.marginRight = '20px';
    document.body.appendChild(snackbar);

    setTimeout(() => {
      snackbar.remove();
    }, duration);
  }
}
