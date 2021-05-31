export const DUMMY_DAYS = [
    {
      id: 0,
      day: new Date().getTime() - (new Date().getTime() % 86400000),
      start: new Date("2022-May-5 08:00:00").getTime(),
      end: new Date("2022-May-5 08:00:00").getTime() + 1200000,
      category: "work",
      description: "I worked on a project.",
    },
    {
      id: 1,
      day: new Date("2022-May-1 00:00:00").getTime(),
      start: new Date("2022-May-1 15:00:00").getTime(),
      end: new Date("2022-May-1 15:00:00").getTime() + 1000000,
      category: "work",
      description: "I worked on an app.",
    },
    {
      id: 2,
      day: new Date("2022-May-1 00:00:00").getTime(),
      start: new Date("2022-May-1 20:00:00").getTime(),
      end: new Date("2022-May-1 20:00:00").getTime() + 50000,
      category: "entertainment",
      description: "I watched a TV show.",
    },
  ];