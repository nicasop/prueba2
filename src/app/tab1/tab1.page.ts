import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { BarcodeDataService } from '../services/barcode-data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( private barcodeScanner: BarcodeScanner, private bar:BarcodeDataService ) {}

  Scan(){
  }

}
