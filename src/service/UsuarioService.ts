import { AppDataSource } from "../data-source";
import { Usuario } from "../entity/Usuario";
import { PublicUserInfo } from "../interface/PublicUserInfo";

const userRepository = AppDataSource.getRepository(Usuario);

export async function all(): Promise<Usuario[]> {
    return userRepository.find();
};

export async function findById(id: string): Promise<Usuario> {
    return userRepository.findOneBy({ celular: id });
};

export async function findPublicInfo(id: string): Promise<PublicUserInfo> {
    if (!id) return null;
    const user = await userRepository
        .createQueryBuilder("Usuario")
        .where("Usuario.celular = :id", { id: id })
        .getOne();
    if (!user) return null;

    const result: PublicUserInfo = {
        celular: user.celular,
        tipoDocumento: user.tipoDocumento,
        documento: user.documento,
        correoElectronico: user.correoElectronico,
        nombreCompleto: user.nombre + ' ' + user.apellido,
        fechaNacimiento: user.fechaNacimiento,
        fotoPerfil: user.fotoPerfil
    }
    return result;
};

export async function findUserById(id: string): Promise<Usuario> {
    if (!id) return null;
    return userRepository
        .createQueryBuilder("Usuario")
        .where("Usuario.celular = :id", { id: id })
        .getOne()

};

export async function save(usuario: Usuario) {
    await userRepository.save(usuario);
}