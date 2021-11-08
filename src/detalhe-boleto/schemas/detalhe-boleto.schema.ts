import * as mongoose from 'mongoose';
export const DetalheBoletoSchema = new mongoose.Schema({
  authenticationCode: String,
  updatedAt: String,
  ourNumber: String,
  digitable: String,
  status: String,
  account: {
    number: String,
    branch: String,
  },
  document: String,
  amount: {
    currency: String,
    value: Number,
  },
  dueDate: String,
  emissionDate: String,
  type: String,
  payer: {
    document: String,
    name: String,
    tradeName: String,
    address: {
      addressLine: String,
      city: String,
      state: String,
      zipCode: String,
    },
  },
  recipientFinal: {
    document: String,
    name: String,
    tradeName: String,
    address: {
      addressLine: String,
      city: String,
      state: String,
      zipCode: String,
    },
  },
  recipientOrigin: {
    document: String,
    name: String,
    tradeName: String,
    address: {
      addressLine: String,
      city: String,
      state: String,
      zipCode: String,
    },
  },
  payments: [
    {
      id: String,
      amount: Number,
      paymentChannel: String,
      paidOutDate: String,
      statusCancelamento: Boolean,
      statusPagamento: Boolean,
      dataCancelamento: Date,
      dataPagamento: Date,
    },
  ],
});
