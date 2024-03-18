import json
letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W"]
def wrap():
  drugs = []
  for letter in letters :
    file = open("DrugsWebScrapping/dumps/dumpedDrugs_"+letter+".json")
    data = json.load(file)
    drugs = drugs + data
    file.close()
  
  corrected = open("DrugsWebScrapping/dumps/dumpedDrugs_Error_Correction.json")
  d = json.load(corrected)
  drugs = drugs + d
  corrected.close()

  with open("DrugsWebScrapping/dumpedDrugs.json", "w", encoding='utf8') as outfile: 
    json.dump(drugs, outfile, ensure_ascii=False)

wrap()