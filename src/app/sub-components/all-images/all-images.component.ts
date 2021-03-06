import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-images',
  templateUrl: './all-images.component.html',
  styleUrls: ['./all-images.component.css']
})
export class AllImagesComponent implements OnInit {

    allImages = ['assets/inspiration/villagers/9.jpg','assets/inspiration/villagers/8.jpg','assets/inspiration/villagers/7.jpg','assets/inspiration/villagers/6.jpg','assets/inspiration/villagers/5.jpg','assets/inspiration/villagers/4.jpg','assets/inspiration/villagers/3.jpg','assets/inspiration/villagers/2.jpg','assets/inspiration/villagers/10.jpg','assets/inspiration/villagers/1.jpg','assets/inspiration/villagers/0.jpg','assets/inspiration/pentu/7.jpg','assets/inspiration/pentu/6.jpg','assets/inspiration/pentu/5.jpg','assets/inspiration/pentu/4.jpg','assets/inspiration/pentu/3.jpg','assets/inspiration/pentu/2.jpg','assets/inspiration/pentu/1.jpg','assets/inspiration/pentu/0.jpg','assets/inspiration/olyan/8.jpg','assets/inspiration/olyan/7.jpg','assets/inspiration/olyan/6.jpg','assets/inspiration/olyan/5.jpg','assets/inspiration/olyan/4.jpg','assets/inspiration/olyan/3.jpg','assets/inspiration/olyan/2.jpg','assets/inspiration/olyan/1.jpg','assets/inspiration/olyan/0.jpg','assets/inspiration/environment/9.jpg','assets/inspiration/environment/8.jpg','assets/inspiration/environment/7.jpg','assets/inspiration/environment/6.jpg','assets/inspiration/environment/5.jpg','assets/inspiration/environment/4.jpg','assets/inspiration/environment/3.jpg','assets/inspiration/environment/2.jpg','assets/inspiration/environment/15.jpg','assets/inspiration/environment/14.jpg','assets/inspiration/environment/13.jpg','assets/inspiration/environment/12.jpg','assets/inspiration/environment/11.jpg','assets/inspiration/environment/10.jpg','assets/inspiration/environment/1.jpg','assets/inspiration/environment/0.jpg','assets/inspiration/en/7.jpg','assets/inspiration/en/6.jpg','assets/inspiration/en/5.jpg','assets/inspiration/en/4.jpg','assets/inspiration/en/3.jpg','assets/inspiration/en/2.jpg','assets/inspiration/en/1.jpg','assets/inspiration/en/0.jpg','assets/visual-development-title.png','assets/visual-development/vd9.png','assets/visual-development/vd8.png','assets/visual-development/vd7.png','assets/visual-development/vd6.png','assets/visual-development/vd5.png','assets/visual-development/vd4.png','assets/visual-development/vd3.png','assets/visual-development/vd2.png','assets/visual-development/vd10.png','assets/visual-development/vd1.png','assets/title-en.png','assets/shadows.png','assets/presentation.png','assets/perso-premier-plan.png','assets/olivier-contact.png','assets/navbar/visual-development.png','assets/navbar/story-treatment.png','assets/navbar/presentation.png','assets/navbar/inspiration.png','assets/navbar/home.png','assets/navbar/contact.png','assets/navbar/biography.png','assets/music-credits.png','assets/music-credits-email.png','assets/inspiration.png','assets/inspiration/villagers.png','assets/inspiration/pentu.png','assets/inspiration/olyan.png','assets/inspiration/environment.png','assets/inspiration/en.png','assets/here.png','assets/fire-animation/fire-strips3.png','assets/fire-animation/fire-strips2.png','assets/fire-animation/fire-strips.png','assets/fire-animation/explosions.png','assets/enter.png','assets/en-logo.png','assets/calvin-credits.png','assets/cable.png','assets/bird-shadow.png','assets/biography/title.png','assets/biography/ryan.png','assets/biography/olivier.png','assets/background/story-treatment.png','assets/background/story-treatment-fg.png','assets/background/presentation.png','assets/background/nda.png','assets/background/inspiration2.png','assets/background/inspiration.png','assets/background/home.png','assets/background/contact.png','assets/background/biography.png','assets/agree.png'];


  constructor() { }

  ngOnInit() {
      for(let img of this.allImages){
          let imgEl = document.createElement('img');
          imgEl.height = 0;
          imgEl.width = 0;
          imgEl.src = img;
          document.body.appendChild(imgEl);
          imgEl.onload = function(){
              document.body.removeChild(imgEl);
          }
      }
  }

}
