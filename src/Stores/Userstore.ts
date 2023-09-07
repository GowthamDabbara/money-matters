import { makeObservable, observable, computed, action, flow } from "mobx";

class Userstore {
    admin: boolean;
	userID: number;
	profileDetails: object;

	constructor() {
		console.log("count");
        this.admin = false;
		this.userID = 9;
		this.profileDetails = {};
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
		console.log(userID, "inside userstore DB");
		this.userID = userID;
	}
	setProfileDetails(details: object) {
		this.profileDetails = details;
	}
}

export default Userstore;
