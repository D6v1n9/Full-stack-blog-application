import Client from "pg"

const db = new Client({
    user:"postgres",
    host:"localhost",
    database:"blog",
    password:"pgadmin123",
    port: 5432
});

db.connect(); 