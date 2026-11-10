//define the actions of the Console object, method
function printConsole()
{
    var name_line = "<td>" + this.name + "</td>";
    var maker_line = "<td>" + this.manufacturer + "</td>";
    var year_line = "<td>" + this.year + "</td>";
    var storage_line = "<td>" + this.storage + "</td>";
    var price_line = "<td>" + this.price + "</td>";

    var row = "<tr>" + name_line + maker_line + year_line + storage_line + price_line + "</tr>";
    document.write(row);
}

//define an object using constructor function
function Console(name, manufacturer, year, storage, price)
{
    //list of attributes for this object
    this.name = name;
    this.manufacturer = manufacturer;
    this.year = year;
    this.storage = storage;
    this.price = price;
    //assign method to the console object
    this.printConsole = printConsole;
}

//create console objects
var ps5 = new Console("PlayStation 5", "Sony", 2020, "825GB", "$499");
var xbox = new Console("Xbox Series X", "Microsoft", 2020, "1TB", "$499");
var switchConsole = new Console("Nintendo Switch", "Nintendo", 2017, "32GB", "$299");
var steamDeck = new Console("Steam Deck", "Valve", 2022, "256GB", "$529");
var ps4 = new Console("PlayStation 4", "Sony", 2013, "500GB", "$399");


//create an array of console objects
var consoleArray = [ps5, xbox, switchConsole, steamDeck, ps4];

for(var counter = 0; counter < consoleArray.length; counter++)
{
    consoleArray[counter].printConsole();
}