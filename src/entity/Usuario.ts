import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm"
import { IsEmail } from "class-validator"


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

}
