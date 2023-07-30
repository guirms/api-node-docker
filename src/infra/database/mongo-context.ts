import { MongoClient as Mongo, Db } from "mongodb";

export const MongoContext = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const url = 'mongodb://mongodb_container:27017';
    const username = 'root';
    const password = 'password';

    const client = new Mongo(url, { auth: { username, password } });
    const db = client.db('users-db');

    this.client = client;
    this.db = db;

    console.log('Connected to mongodb!');
  }
} 
