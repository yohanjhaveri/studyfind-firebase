import moment from "moment-timezone";

const guessedTimezone = moment.tz.guess();

export class Researcher {
  constructor(uid, firestore) {
    this.uid = uid;
    this.firestore = firestore;
    this.researcherRef = firestore.collection("researchers").doc(uid);
  }

  create() {
    this.researcherRef.set({
      organization: "",
      background: "",
      timezone: {
        region: guessedTimezone,
        autodetect: true,
      },
      notifications: {
        local: true,
        email: false,
        phone: false,
      },
    });
  }

  update({
    organization,
    background,
    timezone: { region, autodetect },
    notifications: { local, email, phone },
  }) {
    this.researcherRef.update({
      organization,
      background,
      timezone: {
        region,
        autodetect,
      },
      notifications: {
        local,
        email,
        phone,
      },
    });
  }

  delete() {
    this.researcherRef.delete();
  }
}
