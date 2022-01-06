import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PagesComponent implements OnInit {
  isShownHome: boolean = false ; // hidden by default
  isShownCollection: boolean = false ; // hidden by default
  isShownDistribution: boolean = false ; // hidden by default
  isShownConsumerDetails: boolean = false ; // hidden by default
  isShownTop10Reports: boolean = false ; // hidden by default
  isShownSystem: boolean = false ; // hidden by default
  Username = '';
  constructor(private navService: NavigationService) { }

  ngOnInit() {
    this.Username = sessionStorage.getItem('loggedUser');
    this.defaults();
  }

  toggleSideNav() {
    this.navService.setShowNav(true);
  }


  toggleSideHideNav() {
    this.navService.setShowNav(false);
  }

  defaults() {

    this.isShownHome = true;
    this.isShownCollection = false;
    this.isShownDistribution = false;
    this.isShownConsumerDetails = false;
    this.isShownTop10Reports = false;
    this.isShownSystem = false;

    
    }

  toggleShowHome() {

    this.isShownHome = true;
    this.isShownCollection = false;
    this.isShownDistribution = false;
    this.isShownConsumerDetails = false;
    this.isShownTop10Reports = false;
    this.isShownSystem = false;
    this.toggleSideHideNav();
    
    }

    toggleShowCollection() {

      
      this.isShownHome = false;
      this.isShownCollection = true;
      this.isShownDistribution = false;
      this.isShownConsumerDetails = false;
      this.isShownTop10Reports = false;
      this.isShownSystem = false;
      this.toggleSideHideNav();
      }

      toggleShowDistribution() {

        this.isShownHome = false;
        this.isShownCollection = false;
        this.isShownDistribution = true;
        this.isShownConsumerDetails = false;
        this.isShownTop10Reports = false;
        this.isShownSystem = false;
        this.toggleSideHideNav();
        
        }
        toggleShowConsumerDetails() {

          this.isShownHome = false;
          this.isShownCollection = false;
          this.isShownDistribution = false;
          this.isShownConsumerDetails = true;
          this.isShownTop10Reports = false;
          this.isShownSystem = false;
          this.toggleSideHideNav();
          
          }
          toggleShowTop10Reports() {

            this.isShownHome = false;
    this.isShownCollection = false;
    this.isShownDistribution = false;
    this.isShownConsumerDetails = false;
    this.isShownTop10Reports = true;
    this.isShownSystem = false;
    this.toggleSideHideNav();
            
            }
            toggleShowSystem() {

              this.isShownHome = false;
              this.isShownCollection = false;
              this.isShownDistribution = false;
              this.isShownConsumerDetails = false;
              this.isShownTop10Reports = false;
              this.isShownSystem = true;
              this.toggleSideHideNav();
              
              }
}


