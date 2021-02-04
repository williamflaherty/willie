$(document).ready(function(){
                  var newGenre = new Array();
                  
                  var genres = [ "Nacho Cheese Doritos<sup>&reg;</sup>",
                  "Cool Ranch Doritos<sup>&reg;</sup>",
                  "Fiery Doritos<sup>&reg;</sup>",
                  "Locos",
                  "Tacos",
                  "Supreme",
                  "Crunchy",
                  "Soft",
                  "Grilled",
                  "Steak",
                  "Taco",
                  "Cheesy",
                  "Naked",
                  "Gordita",
                  "Doritos<sup>&reg;</sup>",
                  "Double Decker<sup>&reg;</sup>",
                  "Loaded",
                  "Bean",
                  "Burrito",
                  "7-Layer",
                  "Beefy",
                  "XXL",
                  "Stuft",
                  "Smother",
                  "Three Cheese",
                  "Meatless",
                  "Shredded",
                  "Veggie",
                  "Potato",
                  "Griller",
                  "Combo",
                  "Black Bean",
                  "Chipotle",
                  "Triple",
                  "Double",
                  "Spicy",
                  "Nachos",
                  "Crunchwrap",
                  "Doubledilla",
                  "Quesarito",
                  "Quesadilla",
                  "Nachos Supreme<sup>&reg;</sup>",
                  "Nachos Bellgrande<sup>&reg;</sup>",
                  "Bellgrande",
                  "Meximelt<sup>&reg;</sup>",
                  "Mexican",
                  "Pizza",
                  "Chalupa",
                  "Bowl",
                  "Fiesta",
                  "Fritos<sup>&reg;</sup>",
                  "Roll Up",
                  "Big",
                  "Baja",
                  "Baja Blast<sup>&trade;</sup>",
                  "Verde",
                  "Fire",
                  "Blast"

                  ];
                  
                  $('#button').click(function(e){
                                     e.preventDefault();
                                     var val1, val2, val3, j, count = 0; 

                                     while( count != 3 ){
                                          j = Math.floor(Math.random()*genres.length);
                                          str = genres[j];

                                          if( count == 2 ){
                                                newGenre.push(genres[j]);
                                          }
                                          else {
                                                newGenre.push(genres[j] + " ");
                                          }
                                          count = newGenre.length;
                                     }

                                     $('div.gen').html( "<div class='menu-itm' > " + newGenre[0] + newGenre[1] +  newGenre[2] + "</div>");
                                     
                                     count = 0;
                                     newGenre = []
                                     });
                  

                  });