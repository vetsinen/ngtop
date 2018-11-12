import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent} from "./photos/photos.component";
import { NotImplementedComponent} from "./not-implemented/not-implemented.component";

const routes: Routes = [
  {path:'files', component: NotImplementedComponent},
  {path:'sharing', component: NotImplementedComponent},
  {path:'photos', component: PhotosComponent},
  {path:'links', component: NotImplementedComponent},
  {path:'events', component: NotImplementedComponent},
  {path:'started', component: NotImplementedComponent},

  {path:'', component: PhotosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
