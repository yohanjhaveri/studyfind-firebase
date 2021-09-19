import moment from "moment-timezone";
import { side } from "config";
import { refs } from "../refs";

export const mailing = {
  submit: ({ email }) => {
    const time = moment.utc().valueOf();

    return refs.mailing().add({ time, side, email });
  },
};
