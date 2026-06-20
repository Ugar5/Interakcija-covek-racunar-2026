import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toy',
  imports: [],
  templateUrl: './toy.html',
  styleUrl: './toy.css',
})
export class Toy {
    protected path = signal<string>('')
    constructor(private route :ActivatedRoute){
      this.route.params.subscribe(p=>{
        if(p['path']){
          this.path.set(p['path'])
        }
      })
    }
}
