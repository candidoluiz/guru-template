import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {cardToggle, cardClose} from './card-animation';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [cardToggle, cardClose],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
  @Input() headerContent: string;
  @Input() title: string;
  @Input() semRodape: boolean;
  @Input() blockClass: string;
  @Input() cardClass: string;
  @Input() classHeader = false;
  @Input() tituloAlinhado=false
  cardToggle = 'expanded';
  cardClose = 'open';
  fullCard: string;
  fullCardIcon: string;
  loadCard = false;
  isCardToggled = false;
  cardLoad: string;
  constructor() { }

  ngOnInit() {
  }

  titleAlign(){
    return this.tituloAlinhado? 'margin: auto;' : '';
  }

  toggleCard(event) {
    this.cardToggle = this.cardToggle === 'collapsed' ? 'expanded' : 'collapsed';
  }

  closeCard(event) {
    this.cardClose = this.cardClose === 'closed' ? 'open' : 'closed';
  }

  fullScreen(event) {
    this.fullCard = this.fullCard === 'full-card' ? '' : 'full-card';
    this.fullCardIcon = this.fullCardIcon === 'icofont-resize' ? '' : 'icofont-resize';
  }

  appCardRefresh(val) {
    this.loadCard = true;
    this.cardLoad = 'card-load';
    setTimeout( () => {
      this.cardLoad = '';
      this.loadCard = false;
    }, 3000);
  }
}
