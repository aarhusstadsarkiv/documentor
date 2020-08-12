---
title: Installér SAM
summary: Procedure for installation af SAM på administrativ eller frivillig PC
author: CJK
eleventyNavigation:
  key: Installér SAM
  parent: Software
---

Der skal bruges SAMs autoinstaller, som bruges af alle klienter hos alle kuratorer (ligger i SAM_v4 og kan recompiles ud fra autoinstaller i sourcecode-mappen)

ALLE REFEREREDE DIRS SKAL VÆRE OPRETTET PÅ FORHÅND!

clientSetup.json-filen:
```json
{
    # Genereres af os
    "CLIENT_NAME" : "Aarhus Stadsarkiv SAM",
    # Random 64-karakter ascii-streng, som også gemmes i oaws/webapp/csvConfig/accessConfig_v2.json
    "CLIENT_SECRET" : "Secret string",
    # Må man få amazon-exe og eventuelt flere exe-filer i deployfasen eller ej
    "CLIENT_INCLUDE_DEPLOY_EXECUTABLES" : true,
    
    # SAM henter update-links fra dette domæne ved at inkludere '&view=ids' i query_params
    "URL_SEARCH_ENDPOINT" : "https://www.aarhusarkivet.dk/search",
    # BASEURL til oaws
    "URL_ENDPOINT_BASE" : "https://openaws.appspot.com",
    # RELATIONS-BASEURL. Bruges af SAM i deploy-fasen, men hvordan nu egentlig?
    "URL_ENDPOINT_RELATION_TOOLBOX" : "https://openaws.appspot.com/relations",
    # AUTOCOMPLETE
    "URL_ENDPOINT_AA_AUTOCOMPLETE" : "http://aarhusiana.appspot.com/autocomplete_v3",
    
    # Kan måske slettes
    "URL_ENDPOINT_RECORD" : "https://openaws.appspot.com/records_v2",
    # SAM bruger til records-opdateringer, POST-kald
    "URL_ENDPOINT_RECORD_TOOLBOX" : "https://openaws.appspot.com/oas_tools",
    # SAMs backend
    "URL_ENDPOINT_SAM_TOOLBOX" : "https://openaws.appspot.com/sam_tools_v2",

    # Her ligger alle binære proces-filer (digitale filer som ikke er deployed endnu, men som er hentet ind i SAM og processeret, eks. checksum, størrelse...)
    "FILE_DIR_ENTRY" : "M:\\Borgerservice-Biblioteker\\Stadsarkivet\\SAM_TEMP_v4",
    # Hertil overføres alle temp-filer fra proces-folderen
    "FILE_DIR_BINARY_STORAGE" : "M:\\Borgerservice-Biblioteker\\Stadsarkivet\\_DIGITALT ARKIV\\ark_binary_store",
    # Her lægges og slettes alle access-udgaver... vist nok
    "FILE_DIR_ACCESS" : "M:\\Borgerservice-Biblioteker\\Stadsarkivet\\_DIGITALT ARKIV\\ark_binary_access",

    # Kommentar-felt
    "#DEPLOY_NOTE" : "Deploy section is used for automated uploads via executables (using the sam-interface), if DEPLOY_CSV_CLEANUP is set to true it will remove the deploy csv source after running execuables",
    # Alle exe-filer skal tage csv-filen (SAM-format) fra SAM som eneste argument. Csv-filen har følgende 3 kolonner: oasID, record_view og index_view. Views'ne er defineret i oaws's deploy-setup filer.
    # De to views og oasid-kolonnen er muligvis hardcoded i SAM - spørg Jens
    "DEPLOY_EXECUTABLE_LIST" : ["amazonBoto3Upload\\amazonUpload.exe"],
    # SAM giver en csv-fil til eventuelle deploy-trins exe-filer. Hvis man vil se outputtet fra SAM (lægges vist i csvDeploy i SAM-folderen), sættes værdien til false
    "DEPLOY_CSV_CLEANUP" : true
}
```