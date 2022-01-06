
import { HostListener,Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  
  langingpageForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error = '';
  loading = false;
  
  Username = '';
  public citylist: any[];
  public CityId: any;
  public CityName: string;

  cities = [
    {CityId: 1, CityName: 'Ranebennur'},
    {CityId: 2, CityName: 'Harihara'},
    {CityId: 3, CityName: 'Kundapur'},
   
];

  constructor( private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder, ) { }

  ngOnInit() {
    this.Username = sessionStorage.getItem('loggedUser');
  
    this.LoadCities();
   
    this.langingpageForm = this.formBuilder.group({
     SelectCity: ['', Validators.required]
      
});
    
  }

  

  get f() { return this.langingpageForm.controls; }

  LoadCities() {
   
          this.citylist =this.cities;// this data used to display in zone dropdown  directly nind fields 
         
        
        
        }

    
        OnCitySelection(event: any) {

          this.CityId = event.target.value;
         
          
      
      
          // console.log(event.target.value);
          //console.log(event.target.options[event.target.selectedIndex].text);
        }
      

        onSubmit() {
         
          this.loading = false;
          this.submitted = true;
          if (this.langingpageForm.invalid) {
           return;
           
          }
          if( this.CityId==1){
            setTimeout(() => {
              this.loading = false;
             
              this.router.navigate(['pages/']); 
             
            }, 1000)
          }
          else if( this.CityId==2){
            this.loading = false;
            alert('Dashboard for Harihara is in process');
          }
          else if( this.CityId==3){
            this.loading = false;
            alert('Dashboard for Kundapur is in process');
          }
           
          
        }
}
