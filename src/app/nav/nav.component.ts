import { ModalService } from './../services/modal.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

openModal($event: Event) {
  
  //$event.preventDefault();

  this.modal.toggleModal();
  console.log(this.modal.idModalVisible());
}
  constructor(public modal: ModalService){

  }

}
