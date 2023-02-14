import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Course-Project';
  featureLoaded =  'Recipes';

  // onNavigate(feature: string){
  //   this.featureLoaded = feature;
  // }
}
