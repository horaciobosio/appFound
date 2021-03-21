import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
 
export class HomeComponent {

  public fundings: Funding[];
  public duplicateInvestment = false;
  public withDrawInvestment = false;
   public amountinvested;

  constructor(private route: ActivatedRoute, private router: Router,http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Funding[]>(baseUrl + 'Funding').subscribe(result => {
      this.fundings = result;
      
    }, error => console.error(error));    
  }

  public applyFunding(funding) {

    var aux = localStorage.getItem(funding);
    this.withDrawInvestment = false;

    if (aux == null) {
      this.router.navigate(['/funding', { id: funding }]);
    }
    else {
      this.duplicateInvestment = true;
      this.amountinvested = aux;
    }    
  }

  public withDrawFunding(funding) {

    var aux = localStorage.getItem(funding);

    if (aux != null) {
      localStorage.removeItem(funding);
      this.amountinvested = aux;
      this.withDrawInvestment = true;
      this.duplicateInvestment = false;
    }
    
  } 
}

interface Funding {
  id: number;
  StartDate: string;
  EndDate: string;
  Amount: number;
  Summary: string;
  Status: string; 
}
