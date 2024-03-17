import "reflect-metadata"
import { DataSource } from "typeorm"
import { Usuario } from "./entity/Usuario"
import { Labor } from "./entity/Labor"
import { LaborTrabajador } from "./entity/LaborTrabajador"
import { MedioPago } from "./entity/MedioPago"
import { Pago } from "./entity/Pago"
import { Servicio } from "./entity/Servicio"


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
    entities: [Usuario, Labor, LaborTrabajador, MedioPago, Pago, Servicio],
    migrations: [],
    subscribers: [],
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    }
})
