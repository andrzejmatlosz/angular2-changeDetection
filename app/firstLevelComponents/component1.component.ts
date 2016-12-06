import { Component, AfterViewChecked, NgZone, ElementRef } from '@angular/core';
import { toggleClass } from './../toggleClass';

@Component({
    selector: 'component-1',
    template: `
        <div class="child-component level-one component-1">
            1<br/>
            <button (click)="changeComponent3()">3</button>
            <button (click)="changeComponent4()">4</button>
            <component-3 [innerInputProperty]="component3InputProperty"></component-3>
            <component-4 [innerInputProperty]="component4InputProperty"></component-4>
        </div>
        `,
    styleUrls: [ 'app/child.components.css' ]
})
export class Component1Component  implements AfterViewChecked {
    
    public component3InputProperty = 'a';
    public component4InputProperty = 'a';

    constructor(private zone: NgZone, private el: ElementRef) {}

    ngAfterViewChecked () {
        toggleClass(this.el, this.zone);
    }

    changeComponent3() {
        if (this.component3InputProperty === 'a') {
            this.component3InputProperty = 'b';
        } else {
            this.component3InputProperty = 'a';
        }
    }

    changeComponent4() {
        if (this.component4InputProperty === 'a') {
            this.component4InputProperty = 'b';
        } else {
            this.component4InputProperty = 'a';
        }
    }
}