import { Component, OnInit } from '@angular/core';
import { ApiService } from 'mo-bamba-services';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [ ApiService ]
})
export class TestComponent implements OnInit {

  public Data : any;

  constructor(private api: ApiService) { }
  
    ngOnInit() {
      this.api.Get("http://5be5a16c48c1280013fc3da5.mockapi.io/api/Users").subscribe(result => {
        this.Data = JSON.stringify(result, null, 2);
      });
    }

}
