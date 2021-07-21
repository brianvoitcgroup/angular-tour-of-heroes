import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.sass'],
})
export class HeroFormComponent implements OnInit {
  powers = [
    'Big brain',
    'Shoot lightning',
    'Super speed',
    'Super strength',
    'Unstoppable',
  ];

  @Input() model!: Hero;
  //  = new Hero(0, 'placeholder', 'placeholder');
  // @Output() modelChange: EventEmitter<Hero> = new EventEmitter<Hero>();
  @Output() notifyAdd = new EventEmitter();
  @Output() notifySave = new EventEmitter();

  @Input() isDetail: boolean = false;

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  constructor() {}

  ngOnInit(): void {}
}
