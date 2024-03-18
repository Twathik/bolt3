import tabula

pdf_path = "./src/20201027-thesaurus-referentiel-national-des-interactions-medicamenteuses-20102020.pdf"

#dfs = tabula.read_pdf(pdf_path, pages="all")

# print(len(dfs))
tabula.convert_into(pdf_path, "medInteractions.csv",
                    output_format="csv", pages="all")
