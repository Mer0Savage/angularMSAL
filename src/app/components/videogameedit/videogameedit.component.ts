import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Videogame } from 'src/app/class/videogame';
import { VideogameService } from 'src/app/services/videogame.service';

@Component({
  selector: 'app-videogameedit',
  templateUrl: './videogameedit.component.html',
  styleUrls: ['./videogameedit.component.css']
})
export class VideogameeditComponent implements OnInit {

  selectedId: any;
  btnName:string="";
  companies:any;
  videogame:Videogame = new Videogame;
  
  constructor(
    private route: ActivatedRoute,
    public service: VideogameService,
    private router: Router
  ) {  }

  ngOnInit(): void {
    this.selectedId = this.route.snapshot.params["id"]
    this.service.getVideogameFromId(this.selectedId).subscribe({
      next: res => {console.log(res); this.videogame = res;},
      error: err => {console.log("Things failed.")}
    });

  }
  submitForm() {
    this.service.updateVideogame(this.videogame).subscribe({
      next: (res) => {console.debug(res); this.router.navigateByUrl("/videogamelist")},
      error: (err) => {console.error(err)}
    })
  }
    
  cancel()
  {
    this.router.navigate(["/"]);
  }
}

