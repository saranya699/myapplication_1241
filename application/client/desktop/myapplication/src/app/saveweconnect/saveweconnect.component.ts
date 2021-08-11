import { Component, OnInit } from '@angular/core';
import { SaveweconnectService } from './saveweconnect.service';

@Component({
  selector: 'app-saveweconnect',
  templateUrl: './saveweconnect.component.html',
  styleUrls: ['./saveweconnect.component.scss'],
})

export class SaveweconnectComponent implements OnInit {

    constructor (
        private saveweconnectService: SaveweconnectService,
    ) { }

    ngOnInit() {
    }
}