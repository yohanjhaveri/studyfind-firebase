import moment from "moment-timezone";

const guessedTimezone = moment.tz.guess();

export class Participant {
  constructor(ref) {
    this.ref = ref;
  }

  create() {
    this.ref.set({
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
    this.ref.update({
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
    this.ref.delete();
  }
}
