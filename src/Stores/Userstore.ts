import { makeObservable, observable, computed, action, flow } from "mobx";

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

class Userstore {
    admin: boolean;
	userID: number;
	profileDetails: ProfileDetailsProps;
    creditDebitTotals: CreditDebitTotalsProps;

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
		makeObservable(this, {
            admin: observable,
			userID: observable,
			profileDetails: observable,
            creditDebitTotals: observable,
			setUserId: action,
			setProfileDetails: action,
            setAdmin: action,
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
    }
}

export default Userstore;
