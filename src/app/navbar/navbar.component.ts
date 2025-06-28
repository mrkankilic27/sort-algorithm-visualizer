import { Component, OnInit } from '@angular/core';
import { SortSelectService } from '../services/sortSelect.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loadservis: SortSelectService) { }

  ngOnInit() {
    this.hizBelirle()
    this.boxBelirle()
  }

  chooseAlgorithm(algo:string){
    let sub=document.getElementById("navbarDropdown") as HTMLElement
    let text=document.getElementById(algo)?.textContent
    if(text&&sub)sub.innerText=text.toString()
    this.loadservis.algoChange(algo)
  }

  hizBelirle() {
    let hiz = document.getElementById("speed") as HTMLInputElement
    let hizValue = document.getElementById("hizValue") as HTMLElement
    let speed = hiz?.value
    hizValue.innerText = speed
    this.loadservis.speedChange(speed)
  }

  boxBelirle() {
    let box = document.getElementById("boxCount") as HTMLInputElement
    let hizValue = document.getElementById("boxValue") as HTMLElement
    let boxy = box?.value
    hizValue.innerText = boxy
    this.loadservis.boxChange(boxy)
  }

}
