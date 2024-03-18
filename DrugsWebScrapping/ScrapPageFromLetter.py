
import requests
from bs4 import BeautifulSoup
from ScrapMedic import scrap
import json
from colorama import Fore, Back, Style


def scrapPageFromLetter(letter, pageNumber):
  drugs = []
  page = requests.get("https://www.pharmnet-dz.com/alphabet.aspx?char="+letter+"&p="+pageNumber)
  src = page.content
  soup = BeautifulSoup(src, "lxml", from_encoding="utf-8")
  table = soup.find("table")
  raws = table.find_all("tr")
  raws.pop(0)

  for raw in raws:

    drug = {}
    columnsLinks = raw.find_all("a")
    columnsTr=raw.find_all("td")
    drug["link"] = columnsLinks[0].get("href")
    drug["fullName"]= columnsLinks[0].text.strip()
    drug["miniatureImageLink"] = columnsLinks[1].find("img").get("src")
    drug["type"] = columnsTr[5].text.strip()
    drug["prodLocal"] = columnsTr[6].text.strip()
    drug["comercialisé"] = columnsTr[7].text.strip()
    
    
    if columnsLinks[5]:
      drug["noticeLink"] = columnsLinks[5].get("href")
    else:
      drug["noticeLink"] = ""

    try: 
      drug = scrap(drug)
      drugs.append(drug)
        
      print(drug["fullName"])
    except:
      print(Fore.RED + Back.WHITE + "Error on:" + drug["fullName"])
      print(Style.RESET_ALL)
      with open("DrugsWebScrapping/dumps/dumpedDrugs_Errors"+letter+"_"+pageNumber+".txt", "a", encoding='utf8') as outfile: 
        outfile.write(drug["fullName"])
        
  
   

  return drugs    
  