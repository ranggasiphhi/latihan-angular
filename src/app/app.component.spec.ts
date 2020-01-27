import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormTestingComponent } from './form-testing/form-testing.component';
import { Routes, RouterModule } from '@angular/router';
import { CropperComponent } from './cropper/cropper.component';
import { ModificationInputComponent } from './modification-input/modification-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'cropper', component: CropperComponent},
    { path: 'input-modif', component: ModificationInputComponent},
    { path: 'form-testing', component: FormTestingComponent}
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        CropperComponent,
        ModificationInputComponent,
        FormTestingComponent
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
