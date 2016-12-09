import { Component, AfterViewChecked, NgZone, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { toggleClass } from './../toggleClass';
import { SharedDataService } from './../core/sharedData.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'component-10',
    template: '<div class="child-component level-three component-10">10-{{lastData}}</div>',
    styleUrls: [ 'app/child.components.css' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component10Component implements AfterViewChecked {
    
    private lastData: string;

    constructor(private zone: NgZone, private el: ElementRef, 
                private sharedDataService: SharedDataService,
                private cd: ChangeDetectorRef) {
        this.sharedDataService.getStream().subscribe(
            (data) => {
                this.lastData = data;
                console.log('retrieve data in component 10: ' + data); 
                this.cd.markForCheck();
            }
        )
    }

    ngAfterViewChecked () {
        toggleClass(this.el, this.zone);
    }

}