import { Document } from 'mongoose';
import { Payments } from './payments.entity';
import { Account } from './account.entity';
import { Amount } from './amount.entity';
import { Payer } from './payer.entity';
import { RecipientFinal } from './recipient-final.entity';
import { RecipientOrigin } from './recipient-origin.entity';

export class DetalheBoleto extends Document {
    authenticationCode?: string;
    updatedAt?: string;
    ourNumber?: string;
    digitable?: string;
    status?: string;
    account?: Account;
    document?: string;
    amount?: Amount;
    dueDate?: string;
    emissionDate?: string;
    type?: string;
    payer?: Payer;
    recipientFinal?: RecipientFinal;
    recipientOrigin?: RecipientOrigin;
    payments?: [Payments?];
}