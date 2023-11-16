import json


from ScrapLetter import scrapLetter



def main():
  nomenclature = []
  letter = input("Enter the letter to scrap: ")
  nomenclature = nomenclature + scrapLetter(letter)
  
  with open("DrugsWebScrapping/dumpedDrugs.json", "w", encoding='utf8') as outfile: 
    json.dump(nomenclature, outfile, ensure_ascii=False)


main()