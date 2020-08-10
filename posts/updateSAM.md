---
title: Opdatér SAM
summary: Sådan opdateres SAM på adminsitrativ eller frivillig PC
date: 2020-08-11
author: CJK
---

Opdatér SAM

Alt efter hvilke ændringer man foretager, er trinene for opdatering af SAM forskellige:

# Ændringer af template_oas.json eller template_regnote.json (oaws/webapp/samTemplates)
1. lav update af templaten (eks. url'er til autocomplete m.m.)
2. Gå eventuelt ind i deploy_layouts.json. Skal oftest ske, da formularændringer ofte vil lede til ændringer i online views.
2.2 Hvis man har lavet index-view-ændringer skal man have amazon-indexet opdateret først!
3. Deploy oaws igen. Test ved at klikke broser i Google App Engine Launcher

# Ændringer af deploy_layouts.json (oaws/webapp/samTemplates)
1. Opdater deploy-layout-filen
Hvis man har lavet index-view-ændringer skal man have amazon-indexet opdateret først!
2. Deploy oaws igen. Test ved at klikke broser i Google App Engine Launcher

# Ændringer af clientSetup.json (kan kun bruges på en enkelt institution ad gangen)
Denne fil skal manuelt overskrive clientSetup.json hos de enkelte brugere

# Ændringer af csvConfig-filer (oaws/webapp/csvConfig)
1. Opdater csv-fil
2. Deploy oaws
2. send get_request til https://openaws.appspot.com/update_csv_config

# Ændringer i SAMs kildekode og/eller _compile
1. Følg processerne i SAM_compile_new_version.txt og Sam_test_new_version.txt