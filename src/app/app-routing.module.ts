import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CropperComponent } from './cropper/cropper.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'cropper', component: CropperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
