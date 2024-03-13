import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm"
import { IsEmail } from "class-validator"
import { MedioPago } from "./MedioPago"
import { Servicio } from "./Servicio"
import { LaborTrabajador } from "./LaborTrabajador"


@Entity("usuarios")
export class Usuario {

    @PrimaryColumn()
    celular: string

    @Column({ name: "tipo_documento" })
    tipoDocumento: string

    @Column()
    documento: string

    @Column()
    nombre: string

    @Column()
    apellido: string

    @Column({ name: "correo_electronico" })
    @IsEmail()
    correoElectronico: string

    @Column({ name: "passhash" })
    password: string

    @Column({ type: 'timestamp', name: "fecha_nacimiento" })
    fechaNacimiento: Date

    @Column({ name: "foto_perfil" })
    fotoPerfil: string

    @Column({ name: "foto_documento" })
    fotoDocumento: string

    @Column({ name: "foto_recibo" })
    fotoRecibo: string

    @Column()
    direccion: string


    @Column()
    estado: string

    @OneToMany(() => MedioPago, (medio) => medio.usuario)
    mediosPago: MedioPago[]

    @OneToMany(() => Servicio, (servicio) => servicio.trabajador)
    serviciosPrestados: Servicio[]

    @OneToMany(() => Servicio, (servicio) => servicio.cliente)
    serviciosAdquiridos: Servicio[]

    @OneToMany(() => LaborTrabajador, (labor) => labor.usuario, {
        eager: true,
    })
    laborTrabajador: LaborTrabajador[]
}
