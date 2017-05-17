import {Directive, HostBinding, HostListener, Input, Output, EventEmitter} from "@angular/core";

@Directive({
    selector: '[collapse-on-click]'
})
export class CollapseOnClick {

    @Input("collapsed")
    isCollapsed = false;

    @Output("collapsed")
    collapsedOutput = new EventEmitter();

    @HostBinding("class.collapsed")
    get Collapsed() {
        return this.isCollapsed;
    }

    @HostListener('click')
    toggle() {
        this.isCollapsed = !this.isCollapsed;
        this.collapsedOutput.emit(this.isCollapsed);
    }
}