import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective{

@HostBinding('class.open') isOpen: boolean = false;
 constructor(private eleRef: ElementRef){}
//@HostListener('click') toggle(){
 //   this.isOpen = !this.isOpen;}
 
 @HostListener('document:click', ['$event']) toggle(eventData: Event){
    this.isOpen =this.eleRef.nativeElement.contains(eventData.target)? !this.isOpen: false;
}
}
