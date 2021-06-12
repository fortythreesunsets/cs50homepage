//index.html
$(document).ready(function(){
    $('.about_me').popover();
});

//quotes.html
function change_quote(index)
{

        var book_quotes = [
		{
			quote: "I am, in the end, what you made me.",
			info: "- Cassandra Clare, City of Ashes",
			image: "https://images.unsplash.com/photo-1504846158394-5251e668cc44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"
		},
		{
			quote: "I don't know half of you half as well as I should like; \n and I like less than half of you half as well as you deserve.",
			info: "- J.R.R. Tolkien, The Fellowship of the Ring",
			image:"https://images.unsplash.com/photo-1506466010722-395aa2bef877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1188&q=80"
		},
		{
		        quote: "'One day', you said, 'I watched the sunset forty-three times!' \n And a little later you added: 'You know, when one is that sad, one can get to love the sunset.' \n 'Were you that sad, then, on the day of the forty-three sunsets?' But the prince made no answer",
                        info: "- Antoine de Saint-Exupéry, The Little Prince",
                        image: "https://images.unsplash.com/photo-1575881875475-31023242e3f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                },
                {
                        quote: "'I love you,' I say to him, only it comes out, 'Hey.'\n 'So damn much,' he says back, only it comes out, 'Dude.'",
                        info: "- Jandy Nelson, I'll Give You the Sun",
                        image: "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80"
                },
                {
                        quote: "And in that moment, I swear we were infinite.",
                        info: "- Stephen Chbosky, The Perks of Being a Wallflower",
                        image: "https://images.unsplash.com/photo-1552705910-bf8497b2e19d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                },
                {
                        quote: "'I'm sorry,' Locke said as his cards fluttered down. \n 'That was another shitty thing to say. Gods, when did we discover how easy it is to be cruel to one another?'",
                        info: "- Scott Lynch, Red Seas Under Red Skies",
                        image: "https://images.unsplash.com/photo-1590880449155-b54f958ce314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1015&q=80"
                },
                {
                        quote: "I talk of dreams, \n Which are the children of an idle brain, \n Begot of nothing but vain fantasy",
                        info: "- William Shakespeare, Romeo & Juliet",
                        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&auto=format&fit=crop&w=1071&q=80"
                },
                {
                        quote: "You are part of my existence, part of myself. \n You have been in every line I have ever read",
                        info: "- Charles Dickens, Great Expectations",
                        image: "https://images.unsplash.com/photo-1516030829726-c7644f13c4d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
                },
                {
                        quote: "I’m going to be thrown out of Paradise tomorrow, Beatrice. \n Our only hope is that you find me afterward. Look for me in Hell.",
                        info: "- Sylvain Reynard, Gabriel's Inferno",
                        image: "https://images.unsplash.com/photo-1505840369380-d1a2c04d0dd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                },
                {
                        quote: "He is half of my soul, as the poets say.",
                        info: "Madeline Miller, The Song of Achilles",
                        image: "https://images.unsplash.com/photo-1482555556731-04fd7eb4d24d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                }
	];
        document.getElementById("quote").innerText = book_quotes[index].quote;
        document.getElementById("info").innerText = book_quotes[index].info;
        document.getElementById("top").style.backgroundImage = "url('"+ book_quotes[index].image +"')";
}

//paintings.html
function change_paintingInfo(index)
{
        var paintings = [
                {
			title: "Fallen Angel",
			info: "Alexandre Cabanel, 1847",
			p_style: "Academicism"
                },
                {
			title: "The House on the Bridge",
			info: "Diego Rivera, 1909",
			p_style: "Symbolism"
                },
                {
			title: "Wanderer above the Sea of Fog",
			info: "Caspar David Friedrich, 1818",
			p_style: "Romanticism"
                },
                {
			title: "Late afternoon by the Sea (The Red Wave)",
			info: "Joaquín Clausell, 1910",
			p_style: "Impressionism"
                },
                {
			title: "Beach Study",
			info: "Henry Scott Tuke, 1928",
			p_style: "Impressionism"
                },
                {
			title: "The Lament for Icarus",
			info: "Herbert James Draper, 1898",
			p_style: "Academicism"
                },
                {
			title: "Nighthawks",
			info: "Edward Hooper, 1942",
			p_style: "Modernism"
                },
                {
			title: "Terrace of a café at night (Place du Forum)",
			info: "Vincent Van Gogh, 1888",
			p_style: "Post-impressionism"
                },
                {
			title: "The Dead Flower",
			info: "Manuel Ocaranza, 1868",
			p_style: "Romanticism"
                }
        ];
        document.getElementById("painting_title").innerText = paintings[index].title;
        document.getElementById("painting_info").innerText = paintings[index].info;
        document.getElementById("painting_style").innerText = paintings[index].p_style;
}

//films.html
//button to toggle sidebar and box with info
document.querySelector('button').onclick = function () {
  document.getElementById('sidebar').classList.toggle('hide_show');

  if(document.getElementById('film_container').style.visibility == "visible"){
    document.getElementById('film_container').style.visibility = "hidden";
    document.getElementsByClassName('box').style.visibility = "hidden";
  }
  else{
    document.getElementById('film_container').style.visibility = "visible";
    document.getElementById('box').style.visibility = "visible";
  }
}


function change_filmInfo(index)
{
  var films = [
          {
                  title: "La La Land",
                  tagline: "Here's to the fools who dream",
                  year: "2016",
                  director: "Damien Chazelle",
                  storyline: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
                  genres: "Comedy | Drama | Music | Musical | Romance",
                  image: "https://lh3.googleusercontent.com/Aj61BJfofRjUPWiPpq34OdBtNX74P5MtbczhcEUcoh3-ROO7aJlgpQbm6iQKApDkGnFiHAXaUB0TNEiMbRkOB036q1JPk0sFg8NE1Txu9xp9jM4bXOpeG81VgdryoxmKUu7PfbEFWw=w2400"

          },
          {
                  title: "Le Samouraï",
                  tagline: "His only friend was his gun!",
                  year: "1967",
                  director: "Jean-Pierre Melville",
                  storyline: "Hitman Jef Costello is a perfectionist who never gets caught. One night however, after killing a night-club owner, he's seen by witnesses. His efforts to provide himself with an alibi fail and more and more he gets driven into a corner.",
                  genres: "Crime | Drama | Mystery | Thriller",
                  image: "https://lh3.googleusercontent.com/heWble9NNi7ubbeuf1h7J5ZM6_mmnev3OMCcAce4-ClO0BC_TmI5b_e29FGPOI_QVbOb93GsN8SKyaes4C4RBc1VtY81uk5lADs4eVXpweE6SiL-50LW44dWreWaYyqhpQsYeG283A=w2400"
          },
          {
                  title: "Edge of Tomorrow",
                  tagline: "Live, Die, Repeat",
                  year: "2014",
                  director: "Doug Liman",
                  storyline: "A soldier fighting aliens gets to relive the same day over and over again, the day restarting every time he dies.",
                  genres: "Action | Adventure | Sci-Fi",
                  image: "https://lh3.googleusercontent.com/UXgouLyb0YpszTMx9PhlPhw-6np0tXxHRO0XWHl91hqqLzfeaAap7VpF1kYPHTZOrzDBfVoFE9Y_gA0qfRTfkp4TBtIGCPPByoFEdHeuSGpeQydQNmwDGC1wnEnWR6QxaYOOAEyPHw=w2400"
          },
          {
                  title: "Her",
                  tagline: "A Spike Jonze Love Story",
                  year: "2013",
                  director: "Spike Jonze",
                  storyline: "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
                  genres: "Drama | Romance | Sci-Fi",
                  image: "https://lh3.googleusercontent.com/MR3pcgHhQBO4Os1WN7fvuqFirIeMZmDrn7_bPUuhx2niuV_YgSsmmaTyprsODoTJ9B84Sg1M3ir3aSmCKir0nVrnOVZ2CpqjFHRNUEYHrdDGcjg5Mu7UDI1UMdNHrh_oX519BNcHTA=w2400"
          },
          {
                  title: "Interstellar",
                  tagline: "Mankind was born on Earth. It was never meant to die here",
                  year: "2014",
                  director: "Christopher Nolan",
                  storyline: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                  genres: "Adventure | Drama | Sci-Fi | Thriller",
                  image: "https://lh3.googleusercontent.com/DIp7vNiP5AFXQZy9DvCc84QDwRSsW0bXeUhoCnsomoqnZmeE6P4xS-gMjAwp1dmE0Yd0r5T9hoNaxGFyTgU66oStSF_5byMIOZ3gtxivpwdrvJ6e6jO7a3Go0Hdxh2Nsh-VXGbKYAA=w2400"

          },
          {
                  title: "Pride & Prejudice",
                  tagline: "A romance ahead of its time",
                  year: "2005",
                  director: "Joe Wright",
                  storyline: "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class. Can each overcome their own pride and prejudice?",
                  genres: "Drama | Romance",
                  image: "https://lh3.googleusercontent.com/6KOhl4JQ6VbS0MP-vobH_4iMZ6bsNItm2yhEF7nA4WSmLrFhM-J4nalBXz4QeVQBeR39PJA572XTL2-UPfHOKTSiZVG1PA4PlFV9V8ptuykP77T8bPmrkOGGTscEP9XAeGCoeVndhQ=w2400"

          },
          {
                  title: "Black Swan",
                  tagline: "I just want to be perfect",
                  year: "2010",
                  director: "Darren Aronofsky",
                  storyline: "A committed dancer struggles to maintain her sanity after winning the lead role in a production of Tchaikovsky's Swan Lake.",
                  genres: "Drama | Thriller",
                  image: "https://lh3.googleusercontent.com/UEFLVgm4sRUN8ccGTYcyV3bTv7rFGWLngkadwzbKUOcrtD3w_5wq9ME20AO-a1UW1PgkSVA0-SFw-8g-eAdCz2YKwKVQ2AMGWs9U7nypXlqOlVNcTjnwyj5lYeNImCdGR2p-o1CGJg=w2400"
          },
          {
                  title: "Moulin Rouge!",
                  tagline: "No laws. No limits. One rule. Never fall in love",
                  year: "2001",
                  director: "Baz Luhrmann",
                  storyline: "A poet falls for a beautiful courtesan whom a jealous duke covets.",
                  genres: "Drama | Musical | Romance",
                  image: "https://lh3.googleusercontent.com/noiZFO7DT57yl8sdfjtLJSmNQ6s4CGeOuH9qD6pyRfnytgbigS4dUD7DxgR4iC4yihBkrz3QrbsLYY0OFiqf5VlMTzNFcJhCSbuEWBGc5Kt7zPSyub372pkedxVRKxSeIMZn4kH9Xg=w2400"
          },
          {
                  title: "La leggenda del pianista sull'oceano",
                  tagline: "A beatiful story of a man who could do anything... except be ordinary",
                  year: "1998",
                  director: "Giuseppe Tornatore",
                  storyline: "A baby boy, discovered in 1900 on an ocean liner, grows into a musical prodigy, never setting foot on land.",
                  genres: "Drama | Music | Romance",
                  image: "https://lh3.googleusercontent.com/DyFFDVxW2mFPC05xDGILpSPvVnJUIDcvtmGmmjYn-Xro5MdMEvjsr0nIcjEG0AlrVIz0zOfVyfxFGoG0OUo2hzf_VZwCz-vJqiQEmX5Rk7MxdsHJXVAtuw3piwu9qIB1wR8io54q8g=w2400"
          },
          {
                  title: "Scott Pilgrim vs. the World",
                  tagline: "An epic of epic epicness",
                  year: "2010",
                  director: "Edgar Wright",
                  storyline: "Scott Pilgrim must defeat his new girlfriend's seven evil exes in order to win her heart.",
                  genres: "Action | Comedy | Fantasy | Romance",
                  image: "https://lh3.googleusercontent.com/Vw5ZnEjW1vKRjmaj8fwrx4jbUSE3JLzMQRoSwcA6WzmuAYbDHINQh3OYhR356Zmy6_U89J2ozkx284Byc9K02AqTs__32n-_GakSXrTCv7qEfIVebsvRJJUPIJZn5mL7RGfO20qLcQ=w2400"

          }
          ];
          document.getElementById("film_container").style.visibility = "visible";
          document.getElementById("movie_title").innerText = films[index].title;
          document.getElementById("tagline").innerText = films[index].tagline;
          document.getElementById("year").innerText = films[index].year;
          document.getElementById("director").innerText = 'Directed by ' + films[index].director;
          document.getElementById("storyline").innerText = films[index].storyline;
          document.getElementById("genres").innerText = films[index].genres;
          document.body.style.backgroundImage = "url('"+films[index].image+"')";
}

//albums.html
$(document).ready(function()
{
  $(".dropdown-toggle").dropdown();
});

function change_albumInfo(index)
{
    var albums = [
        {
            title: "Más",
			artist: "Alejandro Sanz",
			year: "1997",
			tracklist: "1. Y, ¿Si Fuera Ella?\n 2. Ese Último Momento\n 3. Corazón Partío\n 4. Siempre Es De Noche\n 5. La Margarita Dijo No\n 6. Hoy Que No Estás\n 7. Un Charquito De Estrellas\n 8. Amiga Mía\n 9. Si Hay Dios...\n 10. Aquello Que Me Diste",
			image: "https://lh3.googleusercontent.com/n3VJ1XE44g0a0IR1ryImk0jkQPGL4UMfZL_Exuaq-Ahpy79ekj3GL1tf4Uj1bjHTOpHvZxNlJikViUbtLG63Avf2XEymTNwZOAGXpM_ZYtxTuPVdq8U1wYXXRIRcllLk-Nn24GdvhA=w2400"
        },
        {
            title: "Moraima",
			artist: "Andrés Suárez",
			year: "2013",
			tracklist: "1. Piedras y Charcos\n 2. No Te Quiero Tanto\n 3. 320 Días (Hace Un Año)\n 4. Rosa y Manuel\n 5. Números Cardinales\n 6. Esta Vez, Si Puedes\n 7. 6 Caricias\n 8. Benijo\n 9. Más De Un 36\n 10. Aún Te Recuerdo\n 11. Así Fue\n 12. Vuelve\n 13. La Ví Bailar Flamenco\n 14. Necesitaba un Vals Para Olvidarte",
            image: "https://lh3.googleusercontent.com/aD-UtmuG0GnXRg9aXaHj6Sj770mBV7lb8In6o4H4ZsMLaFm-Ng751pO6n9ecncr4XnuKAA2ou12O2oovZ1WAJOa9Fyo-QHyqISepa4-nhP3gbA0gzqCr8I5fue-O7iuyGHd60VjAvw=w2400"
        },
        {
            title: "Blurryface",
			artist: "twenty one pilots",
			year: "2015",
			tracklist: "1. Heavydirtysoul\n 2. Stressed Out\n 3. Ride\n 4. Fairly Local\n 5. Tear In My Heart\n 6. Lane Boy\n 7. The Judge\n 8. Doubt\n 9. Polarize\n 10. We Don't Believe What's On TV\n 11. Message Man\n 12. Hometown\n 13. Not Today\n 14. Goner",
            image: "https://lh3.googleusercontent.com/b_lOT8n_Zb06Ae-w73uGYE9HDfdJa668ZOxWGWxD_6fPYjHKgRI1w1Sk9YliS2Wifp6_ztmo1fm4F1U43RpvYdDaaJSxc52O5zlFV15lbBVDeNtd8T5lO2kts8PF53j2v4d5iuxC8A=w2400"
        },
        {
            title: "Room on the\n3rd Floor",
			artist: "McFLY",
			year: "2004",
			tracklist: "1. 5 Colours In Her Hair\n 2. Obviously	\n 3. Room On The 3rd Floor\n 4. That Girl\n 5. Hypnotised\n 6. Saturday Night\n 7. Met This Girl\n 8. She Left Me\n 9. Down By The Lake\n 10. Unsaid Things\n 11. Surfer Babe\n 12. Not Alone\n 13. Broccoli",
            image: "https://lh3.googleusercontent.com/LU-V6hLxCPaN2RPW_VhIJ1FTdyeSdDk5c3dL7ZA5r1XXUqNZh1Qs6c1K0zho3YYbhODvk1NgqWvVOVZf7rcrl8ls11gVAulhKVUcQoyEI2lRwLbPvTDc9H7vbnpLNB1FJXsaaI_jeg=w2400"
        },
        {
            title: "Breakaway",
			artist: "Kelly Clarkson",
			year: "2004",
			tracklist: "1. Breakaway\n 2. Since U Been Gone\n 3. Behind These Hazel Eyes\n 4. Because Of You\n 5. Gone\n 6. Addicted\n 7. Where Is Your Heart\n 8. Walk Away\n 9. You Found Me\n 10. I Hate Myself For Losing You\n 11. Hear Me\n 12. Beautiful Disaster (Live)",
            image: "https://lh3.googleusercontent.com/aPjJqNv7DmjseTORYTclGlPNknouKqs1CQY6eA3U3YWyHNW3UmmaqkCOU-59gzJzdoHcIFYrpeMKEln22vPKtetAglXcNfz6ejFfu4g_WJcwWE-TOc-F93mG3ckjVbeZievUe_mWMQ=w2400"
        },
        {
            title: "Nek",
			artist: "Nek",
			year: "1997",
			tracklist: "1. Laura No Está\n 2. Tu Nombre\n 3. Espérame\n 4. Tú Estás Aquí\n 5. Tú\n 6. Dime Porqué\n 7. Cómo Vivir Sin Ti\n 8. Nada Como Vivir\n 9. Queda Mucho Más\n 10. Seguimos Juntos\n 11. Laura No Está (Radio Vocal Version)",
            image: "https://lh3.googleusercontent.com/4zxsdVTQTjMYdU_nQZDrvvfXNPU8gywnmgphUu6bZP-TIURLfoSNzoRfNSlV93XdBkzo3gZAtbHl64uj8pRE0t1P-fndjUOArWAkTPGGPeToxsjPT6riRFxHCQalD-iPdwtcboUKRA=w2400"
        },
        {
            title: "111",
			artist: "Tiziano Ferro",
			year: "2003",
			tracklist: "1. Centoundici\n 2. Xverso\n 3. Sere Nere\n 4. Ti Voglio Bene\n 5. In Bagno In Aeroporto\n 6. Non Me Lo So Spiegare\n 7. Mia Nonna\n 8. 10 Piegamenti!\n 9. Temple Bar\n 10. Giugno '84\nv 11. Eri Come L'Oro Ora Sei Come Loro\n 12. Chi Non Ha Talento Insegna\n 13. 13 Anni",
            image: "https://lh3.googleusercontent.com/WSCVy3oqaMBMO1DcpPObbZ4y5_-69oG33znppc0KnKHg8FO3-bUvYrUVDr2gjWuhpCGAR5Q_hJOY_5xe51BLvJ9z11kY-XZAs70r7kM9auQku8azooM5xjlBFYnvixUP7Zaxz28ULQ=w2400"
         },
         {
            title: "Revenge of the \nCrashtones!",
			artist: "The Crashtones!",
			year: "2019",
			tracklist: "1. Arson\n 2. Seven 'Til Dawn\n 3. The Night The World Ended\n 4. It Came From A Man's World\n 5. Class President\n 6. Smile\n 7. And We All Stop\n 8. Daddy Of Destruction\n 9. Captain Champion\n 10. Base Of Your Skull (I Love You From The)\n 11. Lloyd Dobler\n 12. Hollywood Fever\n 13. Coma",
            image: "https://lh3.googleusercontent.com/2e03ahRu2ThG-ZBlpICxeKz1NgqaIoWFLtlMKN_I7JTbqh5TmbGxUMQM7LMWEDfh0GlpR_kaaUbyuXmfwZGDRu99oYew3kUrWyCm0ckEWS4qXjZL0eF2JQjOgnD0iOpKDrBFhneKwg=w2400"
         },
         {
            title: "Still Not Getting\nAny",
			artist: "Simple Plan",
			year: "2004",
			tracklist: "1. Shut Up!\n 2. Welcome To My Life\n 3. Perfect World\n 4. Thank You\n 5. Me Against The World\n 6. Crazy\n 7. Jump\n 8. Everytime\n 9. Promise\n 10. One\n 11. Untitled",
            image: "https://lh3.googleusercontent.com/YDsB1IFmkE5uWl1G_OE2q-uqHf2aBkjRV0i7q1QAi710Tyfpxlg5HUsU_0Q7jkFAhfm25j7MnsEtI7bfWK7HNWXFj0wPYSlcw_f8atsjvb0rTwdtLpq-ei80lZnv8vY83zYysMj0Nw=w2400"
         },
         {
            title: "The Smiths",
			artist: "The Smiths",
			year: "1984",
			tracklist: "1. Reel Around The Fountain\n 2. You've Got Everything Now\n 3. Miserable Lie\n 4. Pretty Girls Make Graves\n 5. The Hand That Rocks The Cradle\n 6. Still Ill\n 7. Hand In Glove\n 8. What Difference Does It Make?\n 9. I Don't Owe You Anything\n 10. Suffer Little Children",
            image: "https://lh3.googleusercontent.com/I4yy0Da5MAfqXxXj-1L-cHqHyYVxXrg-7FdnHfvkSE2o_Huynj4R97qOWlBsmjgrKcXUsEnMMUz6cY_EScPO-kC2_K1kKhkxo9iVaVagNizYbxlAvNfdrInrvqbviiJOG_HJBb6xwg=w2400"
          }
    ];

    document.getElementById("album_title").innerText = albums[index].title;
    document.getElementById("artist").innerText = albums[index].artist;
    document.getElementById("year").innerText = albums[index].year;
    document.getElementById("tracklist").innerText = albums[index].tracklist;
    document.getElementById("album_cover").style.backgroundImage = "url('"+ albums[index].image +"')";
}