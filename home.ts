import { Component, signal } from '@angular/core';
import { ToyService } from '../../services/toyz.services';
import { ToyzModel } from '../../models/toyz.model';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [RouterLink,FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
      protected toys = signal<ToyzModel[]>([])
      protected search = ""
      protected previusSearch = "N/A"
      constructor(){
       this.loadToys()
      }
     protected loadToys(){
      console.log(this.search)

        if(this.previusSearch == '' && this.search == '')
          return

        ToyService.getToy(this.search)
          .then(rsp => this.toys.set(rsp.data))
}
}
