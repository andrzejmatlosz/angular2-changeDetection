import { Component, AfterViewChecked, NgZone, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { toggleClass } from './../toggleClass';

@Component({
    selector: 'component-1',
    template: `
        <div class="child-component level-one component-1">
            1
            <component-3></component-3>
            <component-4></component-4>
        </div>
        `,
    styleUrls: [ 'app/child.components.css' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component1Component  implements AfterViewChecked {

    constructor(private zone: NgZone, private el: ElementRef) {}

    ngAfterViewChecked () {
        toggleClass(this.el, this.zone);
    }
}