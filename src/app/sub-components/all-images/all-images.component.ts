import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-images',
  templateUrl: './all-images.component.html',
  styleUrls: ['./all-images.component.css']
})
export class AllImagesComponent implements OnInit {

    allImages = ['nda.2d67b6f9935da7e682ee.png','assets/shadows.png','assets/cable.png','assets/agree.png','assets/background/nda.png',
        'home.3a216d8d0ce9a32beb89.png','assets/fire-animation/fire-strips3.png','assets/fire-animation/fire-strips2.png','assets/fire-animation/fire-strips.png','assets/fire-animation/explosions.png','assets/roads.png','assets/enter.png','assets/en-logo.png','assets/title-en.png',
        'presentation.a34f77015d9eda6d189d.png','assets/presentation.png','assets/navbar/visual-development.png','assets/navbar/story-treatment.png','assets/navbar/presentation.png','assets/navbar/inspiration.png','assets/navbar/home.png','assets/navbar/contact.png','assets/navbar/biography.png','assets/music-credits.png','assets/music-credits-email.png',
        'story-treatment.8f92bb7dbbecbb055d11.png','assets/bird-shadow.png','assets/perso-premier-plan.png','assets/here.png',
        'assets/visual-development-title.png','assets/visual-development/vd1.png','assets/pause-play.png','assets/paused.png','assets/visual-development/vd9.png','assets/visual-development/vd8.png','assets/visual-development/vd7.png','assets/visual-development/vd6.png','assets/visual-development/vd5.png','assets/visual-development/vd4.png','assets/visual-development/vd3.png','assets/visual-development/vd2.png','assets/visual-development/vd10.png',
        'biography.3dd41f3278bca9e9be84.png','contact.c45ebd00cc2216b93b11.png','inspiration.a5328626b92b324e89ba.png', 'inspiration2.699695075d67d78dfa81.png',
        'assets/inspiration/villagers/9.jpg','assets/inspiration/villagers/8.jpg','assets/inspiration/villagers/7.jpg','assets/inspiration/villagers/6.jpg', 'assets/inspiration/villagers/5.jpg','assets/inspiration/villagers/4.jpg','assets/inspiration/villagers/3.jpg','assets/inspiration/villagers/2.jpg','assets/inspiration/villagers/10.jpg', 'assets/inspiration/villagers/1.jpg','assets/inspiration/villagers/0.jpg','assets/inspiration/pentu/7.jpg','assets/inspiration/pentu/6.jpg','assets/inspiration/pentu/5.jpg', 'assets/inspiration/pentu/4.jpg','assets/inspiration/pentu/3.jpg','assets/inspiration/pentu/2.jpg','assets/inspiration/pentu/1.jpg','assets/inspiration/pentu/0.jpg','assets/inspiration/olyan/8.jpg', 'assets/inspiration/olyan/7.jpg','assets/inspiration/olyan/6.jpg','assets/inspiration/olyan/5.jpg','assets/inspiration/olyan/4.jpg','assets/inspiration/olyan/3.jpg','assets/inspiration/olyan/2.jpg','assets/inspiration/olyan/1.jpg', 'assets/inspiration/olyan/0.jpg','assets/inspiration/environment/9.jpg','assets/inspiration/environment/8.jpg','assets/inspiration/environment/7.jpg','assets/inspiration/environment/6.jpg','assets/inspiration/environment/5.jpg', 'assets/inspiration/environment/4.jpg','assets/inspiration/environment/3.jpg','assets/inspiration/environment/2.jpg','assets/inspiration/environment/15.jpg','assets/inspiration/environment/14.jpg','assets/inspiration/environment/13.jpg', 'assets/inspiration/environment/12.jpg','assets/inspiration/environment/11.jpg','assets/inspiration/environment/10.jpg','assets/inspiration/environment/1.jpg','assets/inspiration/environment/0.jpg','assets/inspiration/en/7.jpg', 'assets/inspiration/en/6.jpg','assets/inspiration/en/5.jpg','assets/inspiration/en/4.jpg','assets/inspiration/en/3.jpg', 'assets/inspiration/en/2.jpg','assets/inspiration/en/1.jpg','assets/inspiration/en/0.jpg',
        'assets/inspiration.png','assets/inspiration/villagers.png','assets/inspiration/pentu.png','assets/inspiration/olyan.png','assets/inspiration/environment.png','assets/inspiration/en.png','assets/calvin-credits.png','assets/biography/title.png','assets/biography/ryan.png','assets/biography/olivier.png','assets/background/story-treatment.png','assets/background/story-treatment-fg.png','assets/background/presentation.png','assets/background/inspiration2.png','assets/background/inspiration.png','assets/background/home.png','assets/background/contact.png','assets/background/biography.png','assets/contact-olivier-tossan.png','assets/contact-email.png','assets/contact-phone.png','assets/contact-LA.png','assets/explosion-animation.png','assets/pod.png','assets/pod-streak.png','assets/smoke.png','assets/biography/branch1.png', 'assets/biography/branch2.png', 'assets/biography/branch3.png', 'assets/biography/branch4.png', 'assets/biography/branch5.png', 'assets/biography/branch6.png', 'assets/biography/butterfly1.png', 'assets/biography/butterfly2.png',
        'assets/home-card.png',
        'assets/title-en.png',
        'assets/vd-card.png',
        'assets/vd-intro/EN-FACE-CLOSEUP.png',
        'assets/vd-intro/EN-FACE-FINAL-GLOW.png',
        'assets/vd-intro/EN-FACE-FINAL-SHADOW.png',
        'assets/vd-intro/EN-FACE-full.png',
        'assets/vd-intro/EN-FACE-small-no-shade.png',
        'assets/vd-intro/FINAL-SPLASH.jpg',
        'assets/vd-intro/FINAL-SPLASH.png',
        'assets/vd-intro/SCROLL.jpg',
        'assets/vd-intro/SHIP-BL.png',
        'assets/vd-intro/SHIP-L1.png',
        'assets/vd-intro/SHIP-L2.png',
        'assets/vd-intro/SHIP-L3.png',
        'assets/vd-intro/SPACE-BACK-CLOUDS.png',
        'assets/vd-intro/SPACE-BACKGROUND.jpg',
        'assets/vd-intro/SPACE-BIG-STAR.png',
        'assets/vd-intro/SPACE-EARTH.png',
        'assets/vd-intro/SPACE-FRONT-CLOUD.png',
        'assets/vd-intro/SPACE-MOON.png',
        'assets/vd-intro/SPACE-MOON2.png',
        'assets/vd-intro/SPACE-SHIP-BODY.png',
        'assets/vd-intro/SPACE-SHIP-TAIL.png',
        'assets/vd-intro/SPACE-SMALL-STAR.png',
        'assets/vd-intro/story.JPG',
        'assets/vd-intro/visual-development-title.png',
        'assets/visual-development/vd11.png',
        'assets/visual-development/vd12.png'
    ];


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
