import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class FireDictionaryService {

  items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
  }

  getList(q: string) {
    this.items = this.af.database.list('/dictionary', {
      query: {
        limitToLast: 5
      }
    });
    return this.items;
  }

}
