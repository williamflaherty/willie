$(document).ready(function(){

                  var person = { 

                        "Erin" : false,
                        "Kelly" : false,
                        "Brooke" : false,
                        "Yolanda" : false,
                        "TJ"  : false,
                        "Jennifer" : false,
                        "Ashley" : false,
                        "Stephani" : false,
                        "Mike" : false,
                        "Estevan" : false,
                        "Sonya" : false,
                        "Sabrina" : false,
                        "Kim" : false,
                        "Jeff" : false,
                        "Chuck" : false,
                        "Donitha" : false,
                        "Wendy" : false,
                        "Amy" : false,
                        "Willie" : false,
                        "Caleb" : false,
                        "Becca" : false,
                        "Miles" : false,
                        "Amy" : false,
                        "Laura" : false,
                        "Ben" : false,

                        
                        

                  };

                  var questions = [ 
                        "Who was your childhood actor/actress crush?",
                        "You have your own late night talk show, who do you invite as your first guest?",
                        "What’s the best piece of advice you’ve ever been given?",
                        "Say you’re independently wealthy and don’t have to work, what would you do with your time?",
                        "What would your superpower be and why?",
                        "As a child, what did you want to be when you grew up?",
                        "Have you ever completed anything on your “bucket list”?",
                        "What was the country you last visited outside of United States?",
                        "If you could live anywhere in the world for a year, where would it be?",
                        "If you could instantly become an expert in something, what would it be?",
                        "If you could change places with anyone in the world, who would it be and why?",
                        "Would you rather meet your travel back in time to meet your ancestors or to the future to meet your descendants?",
                        "If you could have the power of teleportation right now, where would you go and why?",
                        "What book, movie read/seen recently you would recommend and why?",
                        "What fictional world or place would you like to visit?",
                        "What’s the best advice you’ve ever heard?",
                        "What would you do with your “15 minutes of fame”?",
                        "What sport would you compete in if you were in the Olympics?",
                        "Which band / artist – dead or alive would you like to see in concert?",
                        "What book, movie read/seen recently you would recommend and why?",
                        "What is your favorite meal to cook and why?",
                        "If a movie was made of your life what genre would it be, who would play you?",
                        "What was your first job?",
                        "Who’s someone you really admire?",
                        "What’s something you want to do in the next year that you’ve never done before?",

                  ];

                  Array.prototype.shuffle = function(){
                          for (var i = 0; i < this.length; i++){
                              var a = this[i];
                              var b = Math.floor(Math.random() * this.length);
                              this[i] = this[b];
                              this[b] = a;
                          }
                      }

                  function shuffleProperties(obj) {
                          var new_obj = {};
                          var keys = getKeys(obj);
                          keys.shuffle();
                          for (var key in keys){
                              if (key == "shuffle") continue; // skip our prototype method
                              new_obj[keys[key]] = obj[keys[key]];
                          }
                          return new_obj;
                      }
                     
                  function getKeys(obj){
                          var arr = new Array();
                          for (var key in obj)
                              arr.push(key);
                          return arr;
                      }

                  function randomNoRepeats(array) {
                          var copy = array.slice(0);
                          return function() {
                            if (copy.length < 1) { copy = array.slice(0); }
                            let index = Math.floor(Math.random() * copy.length);
                            let item = copy[index];
                            copy.splice(index, 1);
                            return item;
                          };
                        }


                  $('#button').click(function(e){
                                    e.preventDefault();
                                    $('div#list').html("");
                                    let choose = randomNoRepeats(questions);
                                    let team = shuffleProperties(person); // run shuffle

                                    // shuffle(questions); //j = Math.floor(Math.random()*(questions.length)); who knows how shuffle seeds lmao
                                    // personCnt = Object.keys(person).length;
                                    // qCnt = questions.length;
                                    for( t in team ){
                                          team[t] = choose();
                                          $('div#list').append(`<p>${t}: ${team[t]}<hr></p>`);
                                    }
                                    // for( i = 0; i < personCnt; i++){
                                    //       if( i < qCnt ){
                                    //             person[i] = questions[i];
                                    //       }
                                    //       else { //in case of needing repeats, just give a random question
                                    //             j = Math.floor(Math.random()*(questions.length)); 
                                    //             person[i] = questions[j];
                                    //       }
                                    // }
                        
                                    // for (let [key, value] of Object.entries(object1)) {
                                    //       $('div#list').html(`<p>${key}: ${value}</p><br/>`);

                                    //  }

                                     });
                        });



                     
                     




