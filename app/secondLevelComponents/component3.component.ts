import { Component, AfterViewChecked, NgZone, ElementRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { toggleClass } from './../toggleClass';

@Component({
    selector: 'component-3',
    template: `
        <div class="child-component level-two component-3">
            3
            <component-7></component-7>
        </div>`,
    styleUrls: [ 'app/child.components.css' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component3Component implements AfterViewChecked {

    constructor(private zone: NgZone, private el: ElementRef) {}

    ngAfterViewChecked () {
        toggleClass(this.el, this.zone);
    }

}