import pymongo
import os
from bson import ObjectId  # Import ObjectId
from dotenv import load_dotenv
load_dotenv('/Users/mariana/Documents/Dev/GitHub/API-news/.env')

myclient = pymongo.MongoClient(f'mongodb+srv://{os.getenv("MONGO_USER")}:{os.getenv("PASSWORD")}@test.disdl6x.mongodb.net/?retryWrites=true&w=majority')
mydb = myclient['WorldNews']
mycollection = mydb['News']
emotions= ["Happiness", "Sadness", "Anger", "Fear", "Surprise", "Disgust", "Neutral"]

for e in mycollection.find({'tag': {'$exists': False}}):
    newsid = e['_id']  # This should already be an ObjectId, no conversion needed
    newstitle = e['title']
    newsdescription = e['description']
    if newstitle == '[Removed]':
        print("El Title esta vacío. Quieres borrarlo? Responde Yes o No")
        respuesta = input()
        if respuesta.lower().strip() == 'yes':
            mycollection.delete_one({'_id': ObjectId(newsid)})
            print(f"Se ha borrado la noticia con _id{newsid}")
        else:
            print("Ok, entonces friégate.")
            print("")

    else:
        print(newstitle)
        print(newsdescription)
        print('Agrega el tag aqui: ', end="")
        tag = input().strip().capitalize()
        if tag  not in emotions:
            print(f"{tag} es inválido. Elige entre las siguientes opciones:{emotions}")
            print('')
            print("Agrega el nuevo tag aqui: ", end="")
            print('')
            tag= input().strip().capitalize()

        else: #tag bueno
            print('')
            print('')
            print(newsid)
            print(f'AQUI ESTA EL NUEVO TAG: {tag}')
            print('')

            # Use ObjectId to ensure proper format for _id in the update query
            if tag == 'Neutral':
                count = mycollection.count_documents({'tag': 'Neutral'})
                print(f'Existen {count} documentos con el tag {tag}')
                print(f'Quieres conservarlo o adios ? Y/N ', end="")
                res = input('').lower().strip()
                if res == 'n':
                    mycollection.delete_one({'_id': ObjectId(newsid)})
                else:
                    response = mycollection.update_one({'_id': ObjectId(newsid)}, {'$set': {'tag': str(tag)}})
                    print(f'A sus ordenes PM =)')
            else:    
                response = mycollection.update_one({'_id': ObjectId(newsid)}, {'$set': {'tag': str(tag)}})
            
                if response.matched_count == 0:
                    print("No document found with the given ID.")
                else:
                    print("Document updated successfully.")
                    print("")

            print(f"Document count")
            print('')
            for c in mycollection.aggregate([{'$match': {'tag': {'$exists': True}}}, 
                                             {'$group': {'_id': '$tag', 'count': {'$sum': 1}}}]):
                print(f"{c['_id']} tiene: {c['count']}")