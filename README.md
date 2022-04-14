# Rest-API
Servern innehåller 5 olika `requests`.<br>
Finns även en **INDEX.HTM**L fil för att använda dem olika requestsen.<br>
**2** `GET` Requests. En för hämta alla users eller hämta en specifik user från user.json filen.<br>
**1** `POST` Request. För att lägga till en user med den infromationen du skriver in antingen i bodyn eller inputsen.<br>
**1** `DELETE` Request. För att ta bort en user, du behöver skriva in **ID** och om det inte finns kommer du få en 404 response.<br>
**1** `PUT` Request. För att ändra en user, du behöver skriva in ett korrekt **ID** och sedan ändra informationen i bodyn eller inputsen. Om usern inte finns så får du en 404 response.
 
## Getting Started
1. `NPM I` installera dependencies och skapar Node_Modules mapp
2. `node index.js` startar servern. 
3. Öppna webbläsaren skriv in localhost:3000 **( Om du inte har ändrat porten i index.js filen )**
4. Lek runt med dem olika `HTTTP` requesten.

## Requests.rest FIL
Innehåller dem olika requesten `POST, GET, PUT, DELETE` och är färdigskrivna, du kan även ändra informationen i **BODY** som är innanför `{}` objektet om du vill redigera, ta bort eller hämta hem en specifik user.
