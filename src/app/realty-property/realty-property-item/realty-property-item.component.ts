import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RealEstatePropertyModel } from '../../shared/models/realestate-property.model';

import {
  PropertyCategory, HousePropertyType, OtherPropertyType,
  LandPropertyType, CommercialPropertyType, Purpose, HeatingCategory,
  HeatingType, LandZone, Orientation, Access, EnergyPerformance
} from '../../shared/models/propertyabstract.model';

import { Country, Periferia, PeriferiakiEnotita, Dimos, GeoDataService } from '../../core/geodata.service';
import { REPService } from '../../core/realestate-property.service';
import { Blobservice } from '../../core/blob.service';
import { FirestoreProvider } from '../../core/firestore.service';

@Component({
  selector: 'app-realty-property-item',
  templateUrl: './realty-property-item.component.html',
  styleUrls: ['./realty-property-item.component.css']
})
export class RealtyPropertyItemComponent implements OnInit {

  @Input() estateproperty: RealEstatePropertyModel;
  estateform: FormGroup;
  responsibleFullName = 'Επιλέξτε';
  ownerFullName = 'Επιλέξτε';
  propesedByFullName = 'Επιλέξτε';
  propCategories = PropertyCategory;
  housePropertyType = HousePropertyType;
  otherPropertytype = OtherPropertyType;
  landPropertyType = LandPropertyType;
  commercialPropertyType = CommercialPropertyType;
  propPurpose = Purpose;
  heatingCategory = HeatingCategory;
  HeatingType = HeatingType;
  landZone = LandZone;
  orientation = Orientation;
  access = Access;
  energyPerformance = EnergyPerformance;
  images: Array<string>;
  countries: Array<Country>;
  periferies: Array<Periferia>;
  periferiakesEnotites: Array<PeriferiakiEnotita>;
  dimoi: Array<Dimos>;

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(public fb: FormBuilder,
    public repService: REPService,
    public blobService: Blobservice,
    public geoDataService: GeoDataService,
    public firestoreProvider: FirestoreProvider
  ) { }

  ngOnInit() {

    this.countries = this.geoDataService.getCountries();
    this.periferies = this.geoDataService.getPeriferies();
    this.periferiakesEnotites = this.geoDataService.getPeriferiakesEnoties().filter((i) => i.periferiaid === 0);
    this.dimoi = this.geoDataService.getDimous().filter((i) => i.periferiakienotiaid === 0);

    this.buildForm();
  }

  createFirestoreObject(): void{
    const ResponsibleId = this.estateproperty.ResponsibleId;
    const Responsible = this.estateproperty.Responsible;
    const OwnerId = this.estateproperty.OwnerId;
    const Owner = this.estateproperty.Owner; 
    const ProposedId = this.estateproperty.ProposedId; 
    const Proposed = this.estateproperty.Proposed;
    const cPropertyCategory = this.estateproperty.PropertyCategory;
    const cPurpose = this.estateproperty.Purpose;

    this.firestoreProvider.createIP(
      ResponsibleId,
      Responsible,
      OwnerId,
      Owner,
      ProposedId,
      Proposed
    );
  }

  buildForm(): void {
    this.estateform = this.fb.group({
      RealEstatePropertyId: [this.estateproperty.RealEstatePropertyId],

      // Responsible
      ResponsibleId: [this.estateproperty.ResponsibleId, Validators.required],
      Responsible: [this.estateproperty.Responsible, Validators.required],

      // Owner
      OwnerId: [this.estateproperty.OwnerId, Validators.required],
      Owner: [this.estateproperty.Owner, Validators.required],

      // Proposed
      ProposedId: [this.estateproperty.ProposedId],
      Proposed: [this.estateproperty.Proposed],

      PropertyCategory: [this.estateproperty.PropertyCategory, Validators.required],
      Purpose: [this.estateproperty.Purpose, Validators.required],

      // Type
      HousePropertyType: [this.estateproperty.HousePropertyType],
      CommercialPropertyType: [this.estateproperty.CommercialPropertyType],
      OtherPropertyType: [this.estateproperty.OtherPropertyType],
      LandPropertyType: [this.estateproperty.LandPropertyType],

      SiteCode: [this.estateproperty.SiteCode],
      Title: [this.estateproperty.Title],
      PriceRental: [this.estateproperty.PriceRental],
      PriceSale: [this.estateproperty.PriceSale],
      SqFeeterior: [this.estateproperty.SqFeetInterior],
      SqfFeetLand: [this.estateproperty.SqfFeetLand],
      Year: [this.estateproperty.Year],

      // Rooms
      Rooms: [this.estateproperty.Rooms],
      NoOfKitchen: [this.estateproperty.NoOfKitchen],
      FullBedrooms: [this.estateproperty.FullBedrooms],
      HalfBedrooms: [this.estateproperty.HalfBedrooms],
      Bathrooms: [this.estateproperty.Bathrooms],
      WC: [this.estateproperty.WC],

      // Characteristics
      Access: [this.estateproperty.Access],
      Levels: [this.estateproperty.Levels],
      Floor: [this.estateproperty.Floor],
      Orientation: [this.estateproperty.Orientation],
      Renovated: [this.estateproperty.Renovated],
      NewConstruction: [this.estateproperty.NewConstruction],
      SemiOutdoorSpaces: [this.estateproperty.SemiOutdoorSpaces],
      LegalSemiOutdoorSpaces: [this.estateproperty.LegalSemiOutdoorSpaces],
      EnergyPerformanceCertificates: [this.estateproperty.EnergyPerformanceCertificates],
      Mortgage: [this.estateproperty.Mortgage],
      HolidayHome: [this.estateproperty.HolidayHome],
      StoneHome: [this.estateproperty.StoneHome],
      NeoClassicalHouse: [this.estateproperty.NeoClassicalHouse],
      TraditionalHouse: [this.estateproperty.TraditionalHouse],
      ListedBuildings: [this.estateproperty.ListedBuildings],
      LuxuryHouse: [this.estateproperty.LuxuryHouse],
      Penthouse: [this.estateproperty.Penthouse],
      Sight: [this.estateproperty.Sight],
      FrontView: [this.estateproperty.FrontView],
      Investment: [this.estateproperty.Investment],
      Terraces: [this.estateproperty.Terraces],
      InternalStairs: [this.estateproperty.InternalStairs],
      Corner: [this.estateproperty.Corner],
      IndoorBBQ: [this.estateproperty.IndoorBBQ],
      Elevator: [this.estateproperty.Elevator],
      SatteliteTV: [this.estateproperty.SatteliteTV],
      DoubleWindows: [this.estateproperty.DoubleWindows],
      TripleWindows: [this.estateproperty.TripleWindows],
      Internet: [this.estateproperty.Internet],
      AnimalFriendly: [this.estateproperty.AnimalFriendly],
      StudentsHousing: [this.estateproperty.StudentsHousing],
      WithoutCharges: [this.estateproperty.WithoutCharges],
      Furnished: [this.estateproperty.Furnished],

      // Parking
      Parkings: [this.estateproperty.Parkings],
      ClosedParking: [this.estateproperty.ClosedParking],
      HeatedParking: [this.estateproperty.HeatedParking],

      // Additional Rooms
      Basement: [this.estateproperty.Basement],
      FitnessRoom: [this.estateproperty.FitnessRoom],
      HomeTheatre: [this.estateproperty.HomeTheatre],
      Library: [this.estateproperty.Library],
      Spa: [this.estateproperty.Spa],
      WineCellar: [this.estateproperty.WineCellar],
      GuestSuite: [this.estateproperty.GuestSuite],
      HomeOffice: [this.estateproperty.HomeOffice],
      Attic: [this.estateproperty.Attic],

      // Heating
      HeatingCategory: [this.estateproperty.HeatingCategory, Validators.required],
      HeatingType: [this.estateproperty.HeatingType],
      AC: [this.estateproperty.AC],
      SolarHeating: [this.estateproperty.SolarHeating],
      FloorHeating: [this.estateproperty.FloorHeating],
      Boiler: [this.estateproperty.Boiler],
      FirePlaces: [this.estateproperty.FirePlaces],

      // Security
      SafetyDoor: [this.estateproperty.SafetyDoor],
      Alarm: [this.estateproperty.Alarm],
      SafetyDepositBox: [this.estateproperty.SafetyDepositBox],
      VideoDoorPhone: [this.estateproperty.VideoDoorPhone],

      // Surrounding Area
      SportField: [this.estateproperty.SportField],
      Grass: [this.estateproperty.Grass],
      Trees: [this.estateproperty.Trees],
      OutdoorPool: [this.estateproperty.OutdoorPool],
      OutdoorPoolHeated: [this.estateproperty.OutdoorPoolHeated],
      IndoorPool: [this.estateproperty.IndoorPool],
      IndoorPoolHeated: [this.estateproperty.IndoorPoolHeated],
      Garden: [this.estateproperty.Garden],
      OutdoorBBQ: [this.estateproperty.OutdoorBBQ],
      ElectronicGates: [this.estateproperty.ElectronicGates],
      AutomaticWatering: [this.estateproperty.AutomaticWatering],

      // For Rental
      RentStart: [this.estateproperty.RentStart],
      RentEnd: [this.estateproperty.RentEnd],
      RentDamageDeposit: [this.estateproperty.RentDamageDeposit],

      // Distances from key pos
      DistanceFromVillage: [this.estateproperty.DistanceFromVillage],
      DistanceFromCity: [this.estateproperty.DistanceFromCity],
      DistanceFromSea: [this.estateproperty.DistanceFromSea],
      DistanceFromAirport: [this.estateproperty.DistanceFromCity],
      NearMetro: [this.estateproperty.DistanceFromSea],

      // Location - Map
      GeoLat: [this.estateproperty.GeoLat],
      GeoLong: [this.estateproperty.GeoLong],
      LandZone: [this.estateproperty.LandZone],
      YoutubeURL: [this.estateproperty.YoutubeURL],
      UploadMapToRealEstatePortals: [this.estateproperty.UploadMapToRealEstatePortals],

      // Land//
      BuiltSurfaceRatio: [this.estateproperty.BuiltSurfaceRatio], // συντελεστής δόμησης
      BuildingDensityFactor: [this.estateproperty.BuildingDensityFactor], // Συντελεστής κάλυψης
      BuildingFacade: [this.estateproperty.BuildingFacade], // Μήκος πρόσοψης
      Inclination: [this.estateproperty.Inclination],
      UrbanPlanningZone: [this.estateproperty.UrbanPlanningZone], // Εντός σχεδίου πόλεως
      RuralDevelopment: [this.estateproperty.RuralDevelopment], // Κατάλληλο για αγροτική χρήση
      Antiparoxi: [this.estateproperty.Antiparoxi],
    });
  }

}
