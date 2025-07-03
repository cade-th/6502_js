export class Error_t{
	constructor(enumerator) {
		this.type = enumerator;  // Type as the passed enumerator
		this.ok = false;         // Default value
		this.data = null;        // Default data (could be anything later)
	}

	setOk(isOk) {
	    this.ok = isOk;
	}

	setData(data) {
	    this.data = data;
	}
}
