import moment from "moment-timezone";

import { generateRefs } from "../refs";

const guessedTimezone = moment.tz.guess();

const defaultResearcher = {
  organization: "",
  background: "",
  phone: "",
  timezone: {
    region: guessedTimezone,
    autodetect: true,
  },
  notifications: {
    local: true,
    email: false,
    phone: false,
  },
};

const researchersRef = {};

const researcher = {
  create: () => {
    return researchersRef.set(defaultResearcher);
  },

  update: (researcherID, updatedData) => {
    return researchersRef.doc(researcherID).update(updatedData);
  },

  delete: (researcherID) => {
    return researchersRef.doc(researcherID).delete();
  },
};

export class Researcher {
  constructor(authenticate) {
    const { researcher, researchers } = generateRefs();

    this.researchersRef = researchers();
    this.researcherRef = researcher(authenticate.getUserID());
  }

  create() {
    return this.researchersRef.set(defaultResearcher);
  }

  update(data) {
    return this.researcherRef.update(data);
  }

  delete() {
    return this.researcherRef.delete();
  }
}
