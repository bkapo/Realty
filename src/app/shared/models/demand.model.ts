import { PropertyModel } from './propertyabstract.model';
import { InvolvepdPartyModel } from './involved-party.model';

export class DemandModel extends PropertyModel {
    DemandId: number;

    // Customer
    CustomerId: number;
    Customer: InvolvepdPartyModel;

    UserId: string;
    CreatedDate: Date;
    ModifiedDate: Date;
    Comments: string;

    PriceFrom: number;
    PriceTo: number;
    SqFeetInteriorFrom: number;
    SqFeetInteriorTo: number;
    SqfFeetLandFrom: number;
    SqfFeetLandTo: number;
    YearFrom: number;
    YearTo: number;
}
