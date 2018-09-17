import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { TextBoxComponent } from './utils/text-box/text-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  constructor(private r: ComponentFactoryResolver) {}
  add() {
    const factory = this.r.resolveComponentFactory(TextBoxComponent);
    this.vc.createComponent(factory);


  }
}
