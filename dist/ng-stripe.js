(function(window, document, undefined) {
	'use strict';

	angular.module('ngStripe', []);
	angular.module('ngStripe')
	.factory('ngStripeService', function() {



		return {
			// Balance
			RetrieveBalance: RetrieveBalance,
			RetrieveBalanceTransaction: RetrieveBalanceTransaction,
			BalanceHistory: BalanceHistory,
			// Charges
			CreateCharge: CreateCharge,
			RetrieveCharge: RetrieveCharge,
			UpdateCharge: UpdateCharge,
			CaptureCharge: CaptureCharge,
			ListAllCharges: ListAllCharges,
			// Customers
			CreateCustomer: CreateCustomer,
			RetrieveCustomer: RetrieveCustomer,
			UpdateCustomer: UpdateCustomer,
			DeleteCustomer: DeleteCustomer,
			ListAllCustomers: ListAllCustomers,
			// Disputes
			RetrieveDispute: RetrieveDispute,
			UpdateDispute: UpdateDispute,
			CloseDispute: CloseDispute,
			ListAllDisputes: ListAllDisputes,
			// Events
			RetrieveEvent: RetrieveEvent,
			ListAllEvents: ListAllEvents,
			// File Uploads
			CreateFileUpload: CreateFileUpload,
			RetrieveFileUpload: RetrieveFileUpload,
			ListAllFileUploads: ListAllFileUploads,
			// Refunds
			CreateRefund: CreateRefund,
			RetrieveRefund: RetrieveRefund,
			UpdateRefund: UpdateRefund,
			ListAllRefunds: ListAllRefunds,
			// Tokens
			CreateCardToken: CreateCardToken,
			CreateBankAccountToken: CreateBankAccountToken,
			CreatePiiToken: CreatePiiToken,
			RetrieveToken: RetrieveToken,
			// Transfers
			CreateTransfer: CreateTransfer,
			RetrieveTransfer: RetrieveTransfer,
			UpdateTransfer: UpdateTransfer,
			ListAllTransfers: ListAllTransfers,
			// Transfer Reversals
			CreateReversal: CreateReversal,
			RetrieveReversal: RetrieveReversal,
			UpdateReversal: UpdateReversal,
			ListAllReversals: ListAllReversals
		}
	})

})(window, angular, undefined);