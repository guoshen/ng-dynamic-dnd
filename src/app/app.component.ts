<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { TextBoxComponent } from './utils/text-box/text-box.component';
>>>>>>> 1abe92fdfb31753b860c9966f1067d2da71f284e

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'ng-dynamic-dnd';
=======
  title = 'app';
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  constructor(private r: ComponentFactoryResolver) {}
  add() {
    const factory = this.r.resolveComponentFactory(TextBoxComponent);
    this.vc.createComponent(factory);


  }
>>>>>>> 1abe92fdfb31753b860c9966f1067d2da71f284e
}
