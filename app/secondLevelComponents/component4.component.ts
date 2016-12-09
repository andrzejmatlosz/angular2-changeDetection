import { Component, AfterViewChecked, NgZone, ElementRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { toggleClass } from './../toggleClass';

@Component({
    selector: 'component-4',
    template: `
        <div class="child-component level-two component-4">
            4
            <component-8></component-8>
        </div>`,
    styleUrls: [ 'app/child.components.css' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component4Component implements AfterViewChecked {
    
    constructor(private zone: NgZone, private el: ElementRef) {}

    ngAfterViewChecked () {
        toggleClass(this.el, this.zone);
    }

}