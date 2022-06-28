import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Videogame } from 'src/app/class/videogame';
import { VideogameService } from 'src/app/services/videogame.service';

@Component({
  selector: 'app-videogamecreate',
  templateUrl: './videogamecreate.component.html',
  styleUrls: ['./videogamecreate.component.css']
})
export class VideogamecreateComponent implements OnInit {

  selectedId: any;
  btnName:string="";
  companies:any;
  videogame:Videogame = new Videogame;

  constructor(
    private route: ActivatedRoute,
    public service: VideogameService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitForm() {
    this.service.addVideogame(this.videogame).subscribe({
      next: (res) => {console.debug(res); this.router.navigateByUrl("/videogamelist")},
      error: (err) => {console.error(err)}
    })
  }

}
