import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private visible = false;

  public idModalVisible(){
    return this.visible;
  }
  public toggleModal(){
    this.visible = !this.visible;
  }
  constructor() { }
}
