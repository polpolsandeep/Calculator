import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  input:string='';
  result:string='';

  pressNum(num:string){
    // Do not allow this key . in more then once
    if(num=="."){
      if(this.input!=""){
        const lastNum=this.getLastOperend();
        console.log(lastNum.lastIndexOf("."));
        if(lastNum.lastIndexOf(".")>=0) return;
      }
    }
    // Do Not Allow 0 Beginning Because JS Does not Allow
    if(num=="0"){
      if(this.input==""){
        return;
      }
      const Prevkey = this.input[this.input.length-1];
      if(Prevkey==="/"||Prevkey==="*"||Prevkey==="-"||Prevkey==="+"){
        return;
      }
    }
    this.input=this.input+num
    this.calcAnswer();
  }
  getLastOperend(){
let pos:number;
console.log(this.input);
pos=this.input.toString().lastIndexOf("+")
if(this.input.toString().lastIndexOf("-")>pos)
pos=this.input.lastIndexOf("-")
if(this.input.toString().lastIndexOf("*")>pos)
pos=this.input.lastIndexOf("*")
if(this.input.toString().lastIndexOf("/")>pos)
pos=this.input.lastIndexOf("/")
console.log('Last'+this.input.substr(pos+1))
return this.input.substr(pos+1)
  }
pressOperator(op:string){
  // Do Not Allow Operator More Then One
  const lastKey = this.input[this.input.length-1];
  if(lastKey==="/"||lastKey==="*"||lastKey==="-"||lastKey==="+"){
    return;
  }
  this.input=this.input+op
  this.calcAnswer()
}
clear(){
  if(this.input!=""){
    this.input=this.input.substr(0,this.input.length-1)
  }
}
allClear(){
  this.input="";
  this.result="";
}
calcAnswer(){
  let formula = this.input;
  let lastKey = formula[formula.length-1];
  if(lastKey==='.'){
    formula = formula.substr(0,formula.length-1)
  }
  lastKey=formula = formula[formula.length-1];
  if(lastKey==="/"||lastKey==="*"||lastKey==="-"||lastKey==="+"||lastKey==="."){
    formula= formula.substr(0,formula.length-1)
  }
  console.log("formula"+formula);
  this.result=eval(formula);
}
getAnswer(){
  this.calcAnswer();
  this.input=this.result;
  if(this.input="0")
  this.input="";
}
}
