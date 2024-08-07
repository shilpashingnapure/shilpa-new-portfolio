import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent implements OnInit {

  safeUrl : SafeResourceUrl;
  constructor(public dialogRef : MatDialogRef<DialogContentComponent> , @Inject(MAT_DIALOG_DATA) public data : { link : string } , private sanitize : DomSanitizer) {
    this.safeUrl = this.sanitize.bypassSecurityTrustResourceUrl(this.data.link);
   }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

}
