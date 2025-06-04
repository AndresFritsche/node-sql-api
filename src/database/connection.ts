import mssql from "mssql";

const dbSettings = {
  user: "sa",
  password: "S7SD9FA0A5S!",
  server: "localhost",
  database: "apify",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

export const getConnection = async () => {
  try {
    const pool = await mssql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }
};
