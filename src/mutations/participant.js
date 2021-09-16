import moment from "moment-timezone";

const guessedTimezone = moment.tz.guess();

export class Participant {
  constructor(uid, firestore) {
    this.uid = uid;
    this.firestore = firestore;
    this.participantRef = firestore.collection("participants").doc(uid);
  }

  create() {
    this.participantRef.set({
      organization: "",
      background: "",
      timezone: {
        region: guessedTimezone,
        autodetect: true,
      },
      location: {
        address: "",
        coordinates: {
          latitude: 0,
          longitude: 0,
        },
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
    location: {
      address,
      coordinates: { latitude, longitude },
    },
    notifications: { local, email, phone },
  }) {
    this.participantRef.update({
      organization,
      background,
      timezone: {
        region,
        autodetect,
      },
      location: {
        address,
        coordinates: { latitude, longitude },
      },
      notifications: {
        local,
        email,
        phone,
      },
    });
  }

  delete() {
    this.participantRef.delete();
  }
}
