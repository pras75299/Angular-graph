import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
 
})
export class HeaderComponent implements OnInit {

  userImage = "assets/images/user.png"
    // Feedback
    // openDialog(templateRef: TemplateRef<any>) {
    //   this.dialog.open(templateRef,{ width: '700px', panelClass: "feedbackModal"});
    // }

    modalRef: BsModalRef;
    openDialog(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }


  // Rating
  max = 5
  rate = 1;
  isReadonly = false;
  msg:string='Poor';

handleRate(event) { 
  if(this.rate == 1){
    this.msg = "Poor "
  }
  else if(this.rate == 2){
    this.msg = "Below Average "
  }
  else if(this.rate == 3){
    this.msg = "Average "
  }
  else if(this.rate == 4){
    this.msg = "Good "
  }
  else if(this.rate == 5){
    this.msg = "Excellent "
  }
 
} 


  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

}

