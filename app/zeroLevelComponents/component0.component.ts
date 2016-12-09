import { Component, AfterViewChecked, NgZone, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { toggleClass } from './../toggleClass';

@Component({
    selector: 'component-0',
    template: `
        <div class="child-component level-zero component-0">
            0
            <component-1></component-1>
            <component-2></component-2>
        </div>`,
    styleUrls: [ 'app/child.components.css' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component0Component implements AfterViewChecked {
    
    constructor(private zone: NgZone, private el: ElementRef) {}

    ngAfterViewChecked () {
        toggleClass(this.el, this.zone);
    }

}