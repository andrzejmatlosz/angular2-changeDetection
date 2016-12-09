import { Component, AfterViewChecked, NgZone, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { toggleClass } from './../toggleClass';

@Component({
    selector: 'component-10',
    template: '<div class="child-component level-three component-10">10</div>',
    styleUrls: [ 'app/child.components.css' ],
    changeDetection: ChangeDetectionStrategy.Default;
})
export class Component10Component implements AfterViewChecked {

    constructor(private zone: NgZone, 
                private el: ElementRef) {
    }

    ngAfterViewChecked () {
        toggleClass(this.el, this.zone);
    }

}