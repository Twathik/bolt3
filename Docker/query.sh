#docker run --rm -v ./dcmkt_data:/var/local imbio/dcmtk findscu -W -aec CRXP -Xs /var/local/test.xml -k   0008,0050="*" -k 0040,0100="*" 192.168.1.41 4242

#docker run --rm -v ./dcmkt_data:/var/local imbio/dcmtk findscu -W 192.168.1.41 4242 -k 0008,0050="*" -k 0010,0010  -k 0040,0100[0].0008,0060="XA"


#docker run --rm -v ./dcmkt_data:/var/local -w /var/local imbio/dcmtk findscu -W 3.3.3.11 104 /var/local/modality.dcm -X


#docker run --rm -v ./worklists:/var/local imbio/dcmtk dcmdump /var/local/modality.dcm > wl_inova.txt

docker run --rm -v ./worklists:/var/local imbio/dcmtk dump2dcm /var/local/f8db7b91-677d-4440-8e3c-757cffa77b64.txt /var/local/test.wl