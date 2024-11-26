@ -0,0 +1,19 @@
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  private userSource = new BehaviorSubject<any>(null);
  user$ = this.userSource.asObservable();

  setUser(user: any) {
    this.userSource.next(user);
  }

  clearUser() {
    this.userSource.next(null);
  }
}
