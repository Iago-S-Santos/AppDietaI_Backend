import { FastifyRequest, FastifyReply } from "fastify";
import { CreateNutritionServices } from '../services/CreateNutrititionServices'

export interface DataProps{ 
    name: string;
    weight: string;
    height: string;
    age: string;
    gender: string;
    objective: string;
    level: string;

}

class CreateNutricionController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { name, weight, height, age, gender, objective, level } = request.body as DataProps;
        console.log("ROTA FOI CHAMADA!!!!!!!")

        const createNutrition = new CreateNutritionServices();

        const nutrition = await createNutrition.execute({
            name,
            weight,
            height,
            age,
            objective,
            gender,
            level,
        });

        reply.send(nutrition);
    }
}


export { CreateNutricionController }