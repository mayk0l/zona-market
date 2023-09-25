import { Component, ViewChildren, ElementRef } from '@angular/core';
import { IonItem, AnimationController } from '@ionic/angular';
import type {QueryList} from '@angular/core';
import type {Animation} from '@ionic/angular';

@Component({
  selector: 'app-compfavorito',
  templateUrl: './compfavorito.component.html',
  styleUrls: ['./compfavorito.component.scss'],
})
export class CompfavoritoComponent  {

  @ViewChildren(IonItem, { read: ElementRef }) 
  cardElements!: QueryList<ElementRef<HTMLIonItemElement>>;

  private animation!: Animation;
  private animation1!: Animation;


  constructor(private animationCtrl: AnimationController) {}

  ngAfterViewInit() {
    const card = this.animationCtrl
      .create()
      .addElement(this.cardElements.first!.nativeElement)
      .duration(2000)
      .fromTo('transform', 'translateX(0px)', 'translateX(100%)')
      .fromTo('opacity', '1', '0.2')
      .onFinish(() =>{
        card.direction('reverse');
        card.play();
      });

    this.animation = this.animationCtrl.create().duration(2000).addAnimation([card]);

    const card1 = this.animationCtrl
      .create()
      .addElement(this.cardElements.first!.nativeElement)
      .duration(2000)
      .fromTo('transform', 'translateX(0px)', 'translateX(-100%)')
      .fromTo('opacity', '1', '0.2')
      .onFinish(() =>{
        card1.direction('reverse');
        card1.play();
  });

  this.animation = this.animationCtrl.create().duration(2000).addAnimation([card]);
  
  this.animation1 = this.animationCtrl.create().duration(2000).addAnimation([card1]);
  }

  play() {
    this.animation.play();
  }

  play1() {
    this.animation1.play();
  }

  icon: string = 'heart-outline';

  toggleIcon() {
    this.icon = (this.icon === 'heart-outline') ? 'heart' : 'heart-outline';
  }
}
