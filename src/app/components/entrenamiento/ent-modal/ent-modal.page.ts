import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ent-modal',
  templateUrl: './ent-modal.page.html',
  styleUrls: ['./ent-modal.page.scss'],
})
export class EntModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
