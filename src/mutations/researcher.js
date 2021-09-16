import moment from "moment-timezone";

const guessedTimezone = moment.tz.guess();

export class Researcher {
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
    this.ref.update({
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
    this.ref.delete();
  }
}
