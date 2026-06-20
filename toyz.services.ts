import axios from "axios";
import { ToyzModel } from "../models/toyz.model";

export class ToyService{
    static async getToy(search :string = ''){
        return axios.get<ToyzModel[]>(`https://toy.pequla.com/api/toy?search=${search}`)
    }
}