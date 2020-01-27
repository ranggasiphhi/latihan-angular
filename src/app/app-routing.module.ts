import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CropperComponent } from './cropper/cropper.component';
import { ModificationInputComponent } from './modification-input/modification-input.component';
import { FormTestingComponent } from './form-testing/form-testing.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'cropper', component: CropperComponent},
  { path: 'input-modif', component: ModificationInputComponent},
  { path: 'form-testing', component: FormTestingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
