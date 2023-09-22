import { makeObservable, observable, computed, action, flow } from "mobx";
import { interceptChange } from "mobx/dist/internal";

interface ProfileDetailsProps {
    id: number | null,
    name: string,
    email: string | null,
    country: string | null,
    date_of_birth: string | null,
    city: string | null,
    permanent_address: string | null,
    postal_code: number | null,
    present_address: string | null,
}

interface ValueTotals {
    type: string;
    sum: number;
}
interface CreditDebitTotalsProps {
    totals_credit_debit_transactions: ValueTotals[]
}

interface TransactionProps {
    id: number,
    transaction_name: string,
    type: string,
    category: string,
    amount: number,
    date: string,
    user_id: number
}

interface AllTransactionsProps {
    transactions: TransactionProps[]
}

class Userstore {
    admin: boolean;
	userID: number;
	profileDetails: ProfileDetailsProps;
    creditDebitTotals: CreditDebitTotalsProps;
    transactions: AllTransactionsProps;
    gotCreditDebitTotals: boolean;
    gotTransactions: boolean;

	constructor() {
        this.admin = false;
		this.userID = 9;
		this.profileDetails = {
            "id": 0,
            "name": "",
            "email": "",
            "country": null,
            "date_of_birth": "",
            "city": null,
            "permanent_address": null,
            "postal_code": null,
            "present_address": null
        };
        this.creditDebitTotals = {
            "totals_credit_debit_transactions": [
                {
                    "type": "debit",
                    "sum": 0
                },
                {
                    "type": "credit",
                    "sum": 0
                }
            ]
        }
        this.transactions = {
            "transactions": [
                {
                    "id": -1,
                    "transaction_name": "",
                    "type": "",
                    "category": "",
                    "amount": -1,
                    "date": "",
                    "user_id": -1
                }
            ]
        }
        this.gotCreditDebitTotals = false;
        this.gotTransactions = false;
		makeObservable(this, {
            admin: observable,
			userID: observable,
			profileDetails: observable,
            creditDebitTotals: observable,
            gotCreditDebitTotals: observable,
            transactions: observable,
			setUserId: action,
			setProfileDetails: action,
            setAdmin: action,
            setTransactions: action,
            setCreditDebitTotals: action,
		});
	}

    setAdmin(admin: boolean) {
        this.admin = admin
    }

	setUserId(userID: number) {
		this.userID = userID;
	}
	setProfileDetails(details: ProfileDetailsProps) {
		this.profileDetails = details;
	}
    setCreditDebitTotals(totals: CreditDebitTotalsProps) {
        this.creditDebitTotals = totals;
        this.gotCreditDebitTotals = true;
    }
    setTransactions(transactions: AllTransactionsProps) {
        this.transactions = transactions;
        this.gotTransactions = true;
        console.log(this.transactions, "store")
    }
}

export default Userstore;
