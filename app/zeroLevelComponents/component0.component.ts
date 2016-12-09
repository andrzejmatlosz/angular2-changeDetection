import { 
    Component, 
    AfterViewChecked, 
    NgZone, 
    ElementRef, 
    ChangeDetectionStrategy, 
    ChangeDetectorRef,
    OnChanges,
    Input
} from '@angular/core';
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
    changeDetection: ChangeDetectionStrategy.Default
})
export class Component0Component implements AfterViewChecked, OnChanges {
    
    @Input() enableChangeDetector: boolean;

    constructor(private zone: NgZone, private el: ElementRef, private changeDetectorRef: ChangeDetectorRef) {
        changeDetectorRef.detach();
    }

    ngOnChanges () {
        if (this.enableChangeDetector) {
            this.changeDetectorRef.reattach();
        } else {
            this.changeDetectorRef.detach();
        }
    }

    ngAfterViewChecked () {
        toggleClass(this.el, this.zone);
    }

}