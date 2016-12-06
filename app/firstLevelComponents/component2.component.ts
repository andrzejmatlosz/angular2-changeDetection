import { Component, DoCheck, NgZone, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { toggleClass } from './../toggleClass';

@Component({
    selector: 'component-2',
    template: `
        <div class="child-component level-one component-2">
            2{{someProperty}}
            <component-5></component-5>
            <component-6></component-6>
        </div>
        `,
    styleUrls: [ 'app/child.components.css' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component2Component  implements DoCheck {
    
    public someProperty:string = 'a';

    constructor(private zone: NgZone, private el: ElementRef) {
        zone.runOutsideAngular(() => {
            setTimeout(() => {
                this.someProperty = 'b';
                console.log('property changed');
            }, 5000);
        });
    }

    ngDoCheck () {
        toggleClass(this.el, this.zone);
    }

}