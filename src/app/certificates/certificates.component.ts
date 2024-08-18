import {
  Component,
  Inject,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificatesComponent implements OnInit {
  certificates = [
    {
      img : 'GSSoC2024.png' , 
    },
    {
      img: 'masai-school.png',
      link : 'https://certs.masaischool.com/certificate/masai-fw14-378',
    },
    {
      img: 'chhallange-hackthon.png',
    },
  ];

  @ViewChild('fullImg') fullImg: TemplateRef<any>;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  currentImg = 0;
  fullView(index: number) {
    this.currentImg = index;
    this.dialog.open(this.fullImg, {
      panelClass: 'custom-dialog-container',
      width: '950px',
      height: '650px',
    });
  }


  onClose(){
    this.currentImg = 0;
    this.dialog.closeAll();
  }
}
