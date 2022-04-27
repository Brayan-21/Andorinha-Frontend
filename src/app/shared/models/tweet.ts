import { Deslike } from './deslike';
import { Like } from './like';
import { Usuario } from './usuario';

export class Tweet {

    id: number;
    conteudo: string;
    data: Date;
    usuario: Usuario;
    likes: Like[];
    deslikes: Deslike[];
}
