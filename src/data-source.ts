import "reflect-metadata"
import { DataSource } from "typeorm"
import { Usuario } from "./entity/Usuario"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "automanage.c2xk7ezgbanl.us-east-2.rds.amazonaws.com",
    port: 5432,
    username: "automanage",
    password: "automanage",
    database: "postgres",
    schema: "hogar_pro",
    synchronize: false,
    logging: true,
    entities: [Usuario],
    migrations: [],
    subscribers: [],
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    }
})
