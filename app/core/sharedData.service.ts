import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedDataService {
    private sharedDataStream: Subject<string> = new Subject<string>();

    getStream() {
        return this.sharedDataStream.asObservable();
    }

    addData(value: string) {
        this.sharedDataStream.next(value);
    }
}