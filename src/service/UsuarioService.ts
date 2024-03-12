import { AppDataSource } from "../data-source";
import { Usuario } from "../entity/Usuario";

const userRepository = AppDataSource.getRepository(Usuario);

export async function all(): Promise<Usuario[]> {
    return userRepository.find();
};
