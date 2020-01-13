import { Component, OnInit } from '@angular/core';
import Cropper from 'cropperjs';

@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.css']
})
export class CropperComponent implements OnInit {

  constructor() { }

  fileEN : any;
  fileID : any;
  croppedFile: any;
  cropper: any;

  ngOnInit() {
  }

  inputFileEn(ev){
    const reader = new FileReader();
    const that = this;
    reader.onload = function(){
      that.fileEN = reader.result;
      const selector : HTMLImageElement = document.querySelector('#imageEn');
      selector.src = that.fileEN;
      that.cropping();
    }
    reader.readAsDataURL(ev.target.files[0]);
  }

  inputFileId(ev){
    const reader = new FileReader();
    const that = this;
    reader.onload = function(){
      that.fileID = reader.result;
    }
    reader.readAsDataURL(ev.target.files[0]);
  }

  // crop(){
  //   this.cropper.crop();
  //   this.cropper.getCroppedCanvas({
  //     maxWidth: 4096,
  //     maxHeight: 4096
  //   })
  // }

  cropping(){
    const imageEn : HTMLImageElement  = document.querySelector('#imageEn');
    this.cropper = new Cropper(imageEn,{
      aspectRatio: 7 /11,
      // autoCrop: true,
      // preview: '#previewEn',
    });
    // const imageId : HTMLImageElement  = document.querySelector('#imageId');
    // this.cropper = new Cropper(imageId,{
    //   aspectRatio: 7 /11,
    //   autoCrop: true,
    //   preview: '#previewId',
    // });
    
  }

  show(){
    this.croppedFile = this.cropper.getCroppedCanvas().toDataURL();
  }

}
