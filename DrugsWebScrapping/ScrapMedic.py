import requests
from bs4 import BeautifulSoup, Tag


def scrap(drug):
  baseURL="http://www.pharmnet-dz.com/"
  page = requests.get(baseURL + drug['link'])
  src = page.content
  soup = BeautifulSoup(src, "lxml", from_encoding="utf-8")
  

  mainSection = soup.find('section',{"class": "widget ui-ribbon-container"})
  bodyDiv = mainSection.find('div',{"class": "body"})
  rawDiv = bodyDiv.find('div',{"class":"row"})

  drug["vignette"] = {}
  drug["infos"] = {}
  # Get FullName
  fullName = rawDiv.contents[1].contents[1].find('h3').text.strip()
  drug['fullName'] = fullName
  drug["img"] = rawDiv.contents[3].find('img').get("src")
  

  #Get vignette info  
  vignetteSrc= rawDiv.contents[3].find("iframe").get("src")
  vignetteRequest = requests.get(baseURL + vignetteSrc)
  vignetteContent = vignetteRequest.content
  vignetteSoup = BeautifulSoup(vignetteContent, "lxml", from_encoding="utf-8")
  drug["vignette"]["labo"] = vignetteSoup.find('div',{"class": "Labo"}).text.strip()
  drug["vignette"]["nomCommercial"] = vignetteSoup.find('div',{"class": "NomCommercial"}).text.strip()
  drug["vignette"]["DCI"] = vignetteSoup.find('div',{"class": "DCI"}).text.strip()
  drug["vignette"]["PPA"] = vignetteSoup.find('div',{"class": "PPA"}).text.strip()
  drug["vignette"]["TR"] = vignetteSoup.find('div',{"class": "TR"}).text.strip()
  drug["vignette"]["background"] = vignetteSoup.find('div',{"class": "Vignettebackground"}).get('class')[1]
  

  mainInfo = rawDiv.contents[5]
  mainInfo1a = mainInfo.contents[1].find_all("a")
  mainInfo1strong= mainInfo.contents[1].find_all("strong")
  mainInfo2strong= mainInfo.contents[3].find_all("strong")
  mainInfo2i= mainInfo.contents[3].find_all("i")
  
  
  drug["infos"]["labo"] = mainInfo1a[0].text.strip()
  drug["infos"]["classPharmaco"] = mainInfo1a[1].text.strip()
  drug["infos"]["classTherapeutique"] = mainInfo1a[2].text.strip()
  drug["infos"]["classTherapeutique"] = mainInfo1a[2].text.strip()
  drug["infos"]["nomCommercial"] = mainInfo1strong[0].next_element.next_element.strip()
  drug["infos"]["codeDCI"] = mainInfo1strong[1].next_element.next_element.strip()
  drug["infos"]["forme"] = mainInfo1strong[2].next_element.next_element.strip()
  drug["infos"]["dosage"] = mainInfo1strong[3].next_element.next_element.strip()
  drug["infos"]["conditionnement"] = mainInfo1strong[4].next_element.next_element.strip()

  drug["infos"]["liste"] = mainInfo2strong[1].next_element.next_element.strip()
  drug["infos"]["pays"] = mainInfo2strong[2].next_element.next_element.strip()
     
  if(isinstance(mainInfo2strong[4].next_element.next_element, Tag)):
    drug["infos"]["remboursable"] = "oui"
  else: 
    drug["infos"]["remboursable"]= "non"
   

  drug["infos"]["TTR"] = mainInfo2strong[5].next_element.next_element.strip()
  drug["infos"]["PPA"] = mainInfo2strong[6].next_element.next_element.strip()
  drug["infos"]["NumEnregistrement"] = mainInfo2strong[7].next_element.next_element.strip()
  

  return drug
  
