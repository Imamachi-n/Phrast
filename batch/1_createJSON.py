import json

input_file = open("./The_Longman_Defining_Vocabulary.txt", 'r')
output_file = open("./The_Longman_Defining_Vocabulary.json", 'w')

dict = []
count = 1
for line in input_file:
    data = line.split(',')
    for item in data:
        item = item.strip().split(" ")[0]
        dict.append({"id": count, "word": item, "level_id": 1})
        count += 1

json.dump(dict, output_file)
