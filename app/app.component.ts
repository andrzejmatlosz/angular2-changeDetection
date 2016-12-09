import { Component } from '@angular/core';
import { SharedDataService } from './core/sharedData.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [ 'app/app.component.css' ],
    providers: [ SharedDataService ]
})
export class AppComponent {

    private counter: number = -1;

    constructor(private sharedDataService: SharedDataService) { 
    }

    addSomeDataToStream() {
        this.counter++;
        this.sharedDataService.addData(this.counter.toString());
    }
}