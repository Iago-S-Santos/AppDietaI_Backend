import { 
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from 'fastify'
import { CreateNutricionController} from './controllers/CreateNutricionController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

  fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
    
    let responseText = "```json\n{\n  \"nome\": \"Iago\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 23,\n  \"altura\": 1.94,\n  \"peso\": 78,\n  \"objetivo\": \"Hipertrofia\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"7:00\",\n      \"nome\": \"Cafe da manha\",\n      \"alimentos\": [\n        \"3 ovos inteiros\",\n        \"2 fatias de pao integral\",\n        \"1 colher de sopa de pasta de amendoim\",\n        \"1 banana media\",\n        \"200ml de leite desnatado\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da manha\",\n      \"alimentos\": [\n        \"100g de iogurte grego\",\n        \"50g de frutas vermelhas\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoco\",\n      \"alimentos\": [\n        \"200g de frango grelhado\",\n        \"1 xicara de arroz integral\",\n        \"1 xicara de brócolis cozido no vapor\",\n        \"1 colher de sopa de azeite\"\n      ]\n    },\n    {\n      \"horario\": \"16:00\",\n      \"nome\": \"Lanche da tarde\",\n      \"alimentos\": [\n        \"1 scoop de whey protein\",\n        \"1 fruta (maca ou pera)\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe grelhado\",\n        \"1 xicara de batata doce cozida\",\n        \"1 xicara de salada verde\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Lanche antes de dormir\",\n      \"alimentos\": [\n        \"Caseina 30g\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey protein\",\n    \"Creatina\",\n    \"BCAA\",\n    \"Omega 3\"\n  ]\n}\n```"

    try{

        //Extrair o JSON
        let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim();

        let jsonObject = JSON.parse(jsonString)

        return reply.send({ data: jsonObject });

    }catch(err){
        console.log(err)
    }

    reply.send({ ok: true })
  })

fastify.post("/create", async (request: FastifyRequest, reply: FastifyReply) =>{
    return new CreateNutricionController().handle(request, reply)
})


}