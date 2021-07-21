import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Dr Nice', power: 'Big brain' },
      { id: 2, name: 'Narco', power: 'Super strength' },
      { id: 3, name: 'Bombasto', power: 'Unstoppable' },
      { id: 4, name: 'Celeritas', power: 'Super speed' },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return (
      heroes.reduce((a: number, cur: Hero): number => {
        return a > cur.id ? a : cur.id;
      }, 0) + 1
    );
  }
}
