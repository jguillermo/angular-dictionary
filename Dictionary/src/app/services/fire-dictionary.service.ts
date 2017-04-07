import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Subject} from "rxjs";

@Injectable()
export class FireDictionaryService {

  items: FirebaseListObservable<any[]>;
  sizeSubject: Subject<any>;

  constructor(private af: AngularFire) {
    this.sizeSubject = new Subject();
    this.items = this.af.database.list('/dictionary', {
      query: {
        orderByChild: 'wl',
        equalTo: this.sizeSubject
      }
    });
  }

  filterBy(q: string) {
    this.sizeSubject.next(q);
  }

}
