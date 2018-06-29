import { PropertyCategory, Purpose } from './../shared/models/propertyabstract.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

import { RealEstatePropertyModel } from '../shared/models/realestate-property.model';
import { InvolvepdPartyModel} from '../shared/models/involved-party.model';



@Injectable()
export class FirestoreProvider {
    propertyCategory = PropertyCategory;
    purpose = Purpose;

  constructor(public firestore: AngularFirestore) {
      
  }

  createIP(
    ResponsibleId: number,
    Responsible: InvolvepdPartyModel,
    OwnerId: number,
    Owner: InvolvepdPartyModel,
    ProposedId: number,
    Proposed: InvolvepdPartyModel,
    // _PropertyCategory = this.propertyCategory,
    //Purpose = this.purpose

  ): Promise<void> {
    const id = this.firestore.createId();

    return this.firestore.doc(`ipList/${id}`).set({
        id,
        ResponsibleId,
        Responsible,
        OwnerId,
        Owner,
      });
   }
}