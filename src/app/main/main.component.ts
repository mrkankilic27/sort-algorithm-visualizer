import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
// import { merge } from 'jquery';
import { firstValueFrom, Subscription } from 'rxjs';
import { SortSelectService } from '../services/sortSelect.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private loadservis: SortSelectService) { }

  divs: any[] = []
  used: number[] = []
  box: any = this.loadservis.bChange.subscribe(data => { this.box = data, this.getBox(data) })
  hiz: any = this.loadservis.sChange.subscribe(data => { this.hiz = data })
  algorithm: any = this.loadservis.Algorithm.subscribe(data => { this.algorithm = data })


  ngOnInit() {
  }

  sleep() {
    return new Promise(resolve => setTimeout(resolve, 1000 / this.hiz));
  }

  getBox(data: number) {
    this.divs.splice(0)
    for (let index = 0; index < data; index++) {
      let eleman = index
      this.divs.push(eleman)
    }

  }

  mix() {
    this.used.splice(0)
    let curIndex = this.divs.length - 1
    let random
    while (curIndex != -1) {
      random = Math.floor(Math.random() * this.divs.length);
      if (!this.used.includes(random)) {
        this.used.push(random)
        let temp = this.divs[curIndex]
        this.divs[curIndex] = this.divs[random]
        this.divs[random] = temp
        curIndex = curIndex - 1
      }
    }
    console.table(this.divs)
  }


  sort() {
    switch (this.algorithm) {

      case "binary":

        break

      case "bubble":
        this.bubble(this.divs)
        break;

      case "bucket":

        break

      case "counting":
        this.counting(this.divs)
        break

      case "heap":

        break

      case "insertion":
        this.insertion(this.divs)
        break;

      case "merge":

        break

      case "quick":
        this.quick(this.divs, 0, 150)
        break

      case "radix":
        this.radix(this.divs)
        break

      case "selection":
        this.selection(this.divs)
        break

      case "shell":
        this.shell(this.divs)
        break

      case "bogo":
        this.bogo()
        break;

      default:
        this.bubble(this.divs)
        break;
    }
  }

  async radix(arr: any[]) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]
      }
    }
    for (let i = 1; max / i > 1; i *= 10) {
      this.counting(arr)
    }
  }

  async counting(arr: any[]) {
    let max = Math.max.apply(Math, arr)
    let min = Math.min.apply(Math, arr)
    let range = max - (min - 1)
    var count = Array.from({ length: range }, (_, i) => 0);
    var output = Array.from({ length: arr.length }, (_, i) => 0);
    for (let i = 0; i < arr.length; i++) {
      count[arr[i] - min]++;
    }

    for (let i = 1; i < count.length; i++) {
      count[i] += count[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
      output[count[arr[i] - min] - 1] = arr[i];
      count[arr[i] - min]--;

    }

    for (let i = 0; i < arr.length; i++) {
      arr[i] = output[i];
      await this.sleep();
    }
  }

  async quick(arr: any[], low: any, high: any) {
    if (low < high) {
      let q = this.parcala(arr, low, high)
      this.quick(arr, low,  q)
      this.quick(arr, low + 1, high)
    }
  }

  async parcala(arr: any[], low: any, high: any) {
    let idk = arr[high], i = (low - 1)
    for (let j = low; j <= high; j++) {
      if (arr[i] < idk) {

        i++;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    let temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;
    return (i+1)
  }

  async bubble(arr: any[]) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 1; j < arr.length - i; j++) {
        if (arr[j - 1] > arr[j]) {
          let temp = arr[j - 1];
          arr[j - 1] = arr[j];
          arr[j] = temp;
          await this.sleep();
        }
      }
    }
  }

  async bogo() {
    for (let i = 0; i < this.divs.length; i++) {
      if (this.divs[i + 1] < this.divs[i]) {
        i = -1
        this.mix()
        await this.sleep()
      }
    }
  }

  async selection(arr: any[]) {
    for (let i = 0; i < arr.length; i++) {
      let min = i
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[min]) {
          min = j;
          let temp = arr[i];
          arr[i] = arr[min];
          arr[min] = temp;
          await this.sleep()
        }
      }
    }
  }

  async shell(arr: any[]) {
    let n = arr.length;
    for (let i = Math.floor(n / 2); i > 0; i = Math.floor(i / 2)) {
      for (let j = i; j < n; j += 1) {
        let temp = arr[j];
        let t;
        for (t = j; t >= i && arr[t - i] > temp; t -= i)
          arr[t] = arr[t - i];
        arr[t] = temp;
        await this.sleep()
      }
    }
  }

  async heap(arr:any[])
    {
        var N = arr.length;
 

        for (var i = Math.floor(N / 2) - 1; i >= 0; i--){
            this.heapify(arr, N, i);}

        for (var i = N - 1; i > 0; i--) {

            var temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            this.heapify(arr, i, 0);
        }
    }

    heapify(arr:any[], N:number, i:number)
    {
        var largest = i;
        var l = 2 * i + 1;
        var r = 2 * i + 2;
 
        if (l < N && arr[l] > arr[largest]){
            largest = l;}
 
        if (r < N && arr[r] > arr[largest]){
            largest = r;}
 
        if (largest != i) {
            var swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;

            this.heapify(arr, N, largest);
        }
    }

  async insertion(arr: any[]) {
    let i, key, j;
    for (i = 1; i < arr.length; i++) {
      key = arr[i];
      j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
        await this.sleep()
      }
      arr[j + 1] = key;
    }
  }
}