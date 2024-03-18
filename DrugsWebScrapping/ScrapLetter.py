import requests
from bs4 import BeautifulSoup
from ScrapPageFromLetter import scrapPageFromLetter
import json


def scrapLetter(letter):
  drugs = []
  page = requests.get("https://www.pharmnet-dz.com/alphabet.aspx?char="+letter)
  src = page.content
  soup = BeautifulSoup(src, "lxml", from_encoding="utf-8")
  mainDiv = soup.find("div", {"class":"content container"}).find("section",{"class":"widget"}).find('div',{"class":"body"})
  buttons = mainDiv.contents[9]
  
  links = buttons.find_all("a")
  for link in links :
    print(f"""
          Lettre {letter}
          page {link.text.strip()}
          """)
    drugs = drugs+scrapPageFromLetter(letter, link.text.strip())
    

  with open("DrugsWebScrapping/dumps/dumpedDrugs_"+letter+".json", "w", encoding='utf8') as outfile: 
    json.dump(drugs, outfile, ensure_ascii=False)  
  
  
  return drugs

