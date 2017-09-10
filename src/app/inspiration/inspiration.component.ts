import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.css']
})
export class InspirationComponent implements AfterViewInit{

    modalActive = false;
    category = '';
    index = 0;
    indexMax = 0;
    instructions = true;
    @ViewChild('bg') bg;

    constructor() { }

    ngAfterViewInit() {
        setTimeout(this.startLightning.bind(this),2000);
    }

    startLightning(){
        let r = (Math.random() * 3);
        r -= r%1;
        this.toggleLightning(r);
        let n = ((Math.random() * 5) + 5) * 1000;
        setTimeout(this.startLightning.bind(this), n);
    }

    toggleLightning(n){
        if(n >= 0){
            this.bg.nativeElement.className = 'bg lightning';
            setTimeout(function(){
                this.bg.nativeElement.className = 'bg';
                setTimeout(this.toggleLightning.bind(this,n-1),150);
            }.bind(this),150);
        }
    }

    openModal(event){
        this.instructions = true;
        let category = event.target.className;
        this.category = category;
        this.modalActive = true;
        switch(category){
            case 'en':
            case 'pentu':
                this.indexMax = 7;
                break;
            case 'environment':
                this.indexMax = 15;
                break;
            case 'olyan':
                this.indexMax = 8;
                break;
            case 'villagers':
                this.indexMax = 10;
                break;
        }
    }

    increment(event){
        this.instructions = false;
        event.stopPropagation();
        if(this.index == this.indexMax){
            this.index = 0;
        }else{
            this.index++;
        }
    }

    exit(){
        this.modalActive = false;
        this.index = 0;
    }

}
