
export class Payments {
  id?: string;
  amount?: number;
  paymentChannel?: string;
  paidOutDate?: string;
  statusCancelamento?: boolean = false;
  statusPagamento?: boolean = false;
  dataCancelamento?: Date;
  dataPagamento?: Date;
}
