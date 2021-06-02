import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// import * as fs from 'fs';

import {DatePipe} from '@angular/common';
// import * as data from ' runningNumber.JSON';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'csvFileREader';
  userid : string = "";
  sessionid : string = "";
  eyeclear : string = "";
  date : any;
  time : string = "";
  runningNumber: any;
  result: string = "* Name : ";
  resultDisplay: any;
  ngOnInit() {

    this.http.post(`http://localhost:3000/`, {}).subscribe(data => {
      // console.log(data);
      this.runningNumber = data;
      // console.log(this.runningNumber[0].number);
      this.runningNumber = this.runningNumber[0].number;
      console.log(this.runningNumber);
    });

  }
  // public getMatchingAnswer(runningNumber: number){
  //   this.http.post(`http://localhost:3000/getMatchingAnswer`, {"number":runningNumber}).subscribe(result => {
  //     console.log(this.runningNumber);
  //     console.log(result);
  //   });

  // }
  // update


// runningNumber: any = (data as any).default;

  constructor(public  http: HttpClient) {
    // this.getJSON().subscribe(data => {
    //   console.log(data);
    };


  // public getJSON(): Observable<any> {
  //   return this.http.get("assets/rn.json");
  // }

  public getLatestID() {
    this.http.post(`http://localhost:3000/`, {}).subscribe( data => {
      // debugger;
      let arr =  [];

      arr = JSON.parse(JSON.stringify(data));
      this.runningNumber = ( arr.length != 0 && arr[0].number != undefined ) ? arr[0].number : 1;
      // this.runningNumber = arr[0].number;

      console.log("DATA-RUNNINGNUMBER :  ", this.runningNumber);


    });
  }

  // async postData(url = '', data = {}) {
  //   // Default options are marked with *
  //   const response = await fetch(url, {
  //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //     mode: 'no-cors', // no-cors, *cors, same-origin
  //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: 'same-origin', // include, *same-origin, omit
  //     headers: {
  //       'Content-Type': 'application/json'
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     redirect: 'follow', // manual, *follow, error
  //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //     body: JSON.stringify(data) // body data type must match "Content-Type" header
  //   });
  //   return response; // parses JSON response into native JavaScript objects
  // }



  public onSubmit() {
    this.getLatestID();
    console.log("USERID : " +  this.userid);
    console.log("sessionID : " +  this.sessionid);
    this.date = new Date();
    console.log(this.date);
    console.log(this.eyeclear);
    // this.getLatestID();
    //
    // this.postData('http://localhost:3000/getMatchingAnswer', { number: this.runningNumber})
    //   .then(data => {
    //     console.log(data); // JSON data parsed by `data.json()` call
    //   });


    this.http.post(`http://localhost:3000/getMatchingAnswer`, {number: this.runningNumber}).subscribe(data => {
      // debugger;
      console.log(data);

      // console.log(JSON.parse(data))
      console.log(this.userid);
      let jsonTest = JSON.parse(JSON.stringify(data));
      console.log(jsonTest);
      console.log(jsonTest["content"]);

      // this.result = this.result.replace(" .", (this.userid ));
      // console.log(this.result);
      this.resultDisplay = String(this.result + this.userid +  " ." +  JSON.stringify(jsonTest["content"]).replace('"', '').replace('"' , '' ));

    });
    // this.getMatchingAnswer(this.runningNumber);
    console.log("this is post ")
    this.runningNumber++;
    console.log(this.runningNumber);
    console.log(this.getLatestID());

  //   this.getJSON().subscribe(data => {
  //   console.log(data.id);
  //   this.runningNumber = (data.id);
  //   this.runningNumber++;
  //     console.log(this.runningNumber);
  //     console.log("UpdatedRunningNumber : ", this.runningNumber)
  // });

  // console.log("USERID : "USERID +  this.)
    // console.log("USERID : " +  this.userid)

  }

}



export class SelectFromJSON {

  public selectFunction(){


  }

}

