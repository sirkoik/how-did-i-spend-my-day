// get a dayKey for a given date. Used to lookup specific days in the list.
// Returns a timestamp based on 00:00:00

export const dayKeyFromRoute = (date) => new Date(date + " 00:00:00").getTime();

export const dayKeyFromTS = (date) => {
  const dateTS = new Date(date).getTime();
  return dateTS - (dateTS % (86400 * 1000));
};

export const dayKey = () => {
  const dateTS = new Date().getTime();
  return dateTS - (dateTS % (86400 * 1000));
};

// @hhmm HH:MM
// @return timestamp
// useful for converting <input type="time"> to a timestamp.
export const dayKeyFromHHMM = (hhmm) => {
    const d = new Date();
    hhmm = hhmm.split(':');
    return new Date(d.getFullYear(), d.getMonth(), d.getDate(), hhmm[0], hhmm[1]).getTime();
}

export const getToday = () => {
  return new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric",
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
  });
};
