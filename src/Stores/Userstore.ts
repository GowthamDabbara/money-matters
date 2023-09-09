import { makeObservable, observable, computed, action, flow } from "mobx";

interface ProfileDetailsProps 
    {
        id: number,
        name: string,
        email: string | null,
        country: string | null,
        date_of_birth: string | null,
        city: string | null,
        permanent_address: string | null,
        postal_code: number | null,
        present_address: string | null,
    }


class Userstore {
    admin: boolean;
	userID: number;
	profileDetails: ProfileDetailsProps;

	constructor() {
		console.log("count");
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
		makeObservable(this, {
            admin: observable,
			userID: observable,
			profileDetails: observable,
			setUserId: action.bound,
			setProfileDetails: action,
            setAdmin: action
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
}

export default Userstore;
