import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.css']
})
export class InspirationComponent implements OnInit {

    modalActive = false;
    category = '';
    index = 0;
    indexMax = 0;

    constructor() { }

    ngOnInit() {
    }

    openModal(event){
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

    decrement(event){
        event.stopPropagation();
        if(this.index == 1){
            this.index = this.indexMax;
        }else{
            this.index--;
        }
    }

    increment(event){
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
