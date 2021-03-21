import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-funding-component',
  templateUrl: './funding.component.html'
})

export class FundingComponent implements OnInit {

  public showAmountValidation = false;
  public showtransactionDone = false;
  public duplicateInvestment = false;  

  constructor(private route: ActivatedRoute, private router: Router) {  }

    ngOnInit() {  }

  public applyFunding(amount) {
   
    if (amount < 100 || amount > 10000) {     
      this.showAmountValidation = true;      
    }
    else {
      var aux = localStorage.getItem(this.route.snapshot.paramMap.get('id'));
      
      if (aux == null) {
        localStorage.setItem(this.route.snapshot.paramMap.get('id'), amount);
        this.showAmountValidation = false;
        this.showtransactionDone = true;
      } else {
        this.duplicateInvestment = true;
      }      
    }    
  }
 }


