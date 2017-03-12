import { Component } from '@angular/core';
import {PublicTypePipe} from './friends-list.pipe';


@Component({
    selector : 'pm-products',
    templateUrl : 'app/friends/friends-list.component.html'
})
export class FriendListComponent{
    pageTitle : string= 'Friends List';

   friends:any = [
         {"name": "abc", "type": "private"},
         {"name": "xyz", "type": "public"},
         {"name": "test", "type": "private"},
         {"name": "Adom", "type": "private"},
         {"name": "Mahesh", "type": "public"},
         {"name": "Piyush", "type": "public"}
    ];

  


}


