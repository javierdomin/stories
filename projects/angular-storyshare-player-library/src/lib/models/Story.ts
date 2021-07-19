import { Type } from './Type.enum';

export interface Story {
    source: String;
    type: Type;
    duration: number;
    progression: number;
}
