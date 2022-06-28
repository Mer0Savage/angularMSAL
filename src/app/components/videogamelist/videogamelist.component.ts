import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { EventMessage, EventType } from '@azure/msal-browser';
import { filter, Subject } from 'rxjs';
import { Videogame } from 'src/app/class/videogame';
import { VideogameService } from 'src/app/services/videogame.service';

@Component({
  selector: 'app-videogamelist',
  templateUrl: './videogamelist.component.html',
  styleUrls: ['./videogamelist.component.css']
})
export class VideogamelistComponent implements OnInit {

  constructor(
    private service: VideogameService,
    private router: Router,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService
  ) { }
  dtOptions: DataTables.Settings = {};
  videogames: Videogame[] = [];
  dtTrigger: Subject<any> = new Subject;

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    }
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
    //this.id="";
  }
  ngAfterViewInit(): void {

    this.loadVideogameList();

  }
  loadVideogameList()
  {
    this.service.getVideogameList().subscribe({
      next: (data) => {this.videogames = data as any;console.log(this.videogames);},
      error: (err) => {console.error(err)}
    })
      // Calling the DT trigger to manually render the table
    this.dtTrigger;
  }
  editbuttonclicked(data:any)
  {
    if (data!=undefined && data!=null) {
      this.router.navigate(["/videogame-edit",data]);
    }
  }
  deletebuttonclicked(data:any)
  {
    if (data!=undefined && data!=null) {
      this.service.deleteVideogame(data);
      window.location.reload();
    }
  }

}
