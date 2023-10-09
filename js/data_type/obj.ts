let db: {
  id: number;
  title: string;
  info: {
    date: Date;
    message: string;
    isNew: boolean;
  };
};

db = {
  id: 1,
  title: "new",
  info: {
    date: new Date(),
    message: "messge",
    isNew: true,
  },
};
