const songsList = [
    "2Pac - Dear Mama.mp3", "2TH - Zonard.mp3", "4 Non Blondes - What's Up.mp3", "47ter - Côte Ouest.mp3", "47ter - On avait dit.mp3", "47ter - Plus tard.mp3", "47ter - Soleil noir.mp3", "7 Jaws, Seezy - Accro.mp3", "7 Jaws, Seezy - Courrier (Freestyle RAGE).mp3", "7 Jaws, Seezy - Par ici.mp3", "7 Jaws, Seezy - Turbo S.mp3", "A Tribe Called Quest - Can I Kick It.mp3", "ABBA - Dancing Queen.mp3", "ABBA - Gimme! Gimme! Gimme! (A Man After Midnight).mp3", "ABBA - Lay All Your Love On Me.mp3", "ABBA - Mamma Mia.mp3", "ABBA - Money, Money, Money.mp3", "ABBA - Super Trouper.mp3", "ABBA - Take A Chance On Me.mp3", "ABBA - The Winner Takes It All.mp3", "ABBA - Voulez-Vous.mp3", "ACDC - Back In Black.mp3", "ACDC - For Those About to Rock (We Salute You).mp3", "ACDC - Highway to Hell.mp3", "ACDC - T.N.T..mp3", "ACDC - Thunderstruck.mp3", "ACDC - You Shook Me All Night Long.mp3", "AUSTN - In Betweenin'.mp3", "Akon - Right Now (Na Na Na).mp3", "Alain Souchon - Foule sentimentale.mp3", "Alan Silvestri - The Avengers.mp3", "Alan Walker - Faded.mp3", "Alan Walker, AuRa, Tomine Harket - Darkside.mp3", "Alan Walker, K-391, Emelie Hollow - Lily.mp3", "Alan Walker, Sabrina Carpenter, Farruko - On My Way.mp3", "Alonzo - Santana.mp3", "Amy Winehouse - Rehab.mp3", "Angus & Julia Stone - Big Jet Plane.mp3", "Ariane - Dragon Ball Z - Générique.mp3", "Ava Max - So Am I.mp3", "Avicii - Heaven.mp3", "Avicii - The Nights.mp3", "Avicii, Sandro Cavazza - Without You (feat. Sandro Cavazza).mp3", "Axelle Red - Sensualité.mp3", "Aya Nakamura - Copines.mp3", "BB Brunes - Dis-moi.mp3", "Baha Men - Who Let The Dogs Out.mp3", "Bakermat - Baby.mp3", "Bastille - Pompeii.mp3", "Bazzi - Mine.mp3", "Bee Gees - Night Fever - From 'Saturday Night Fever' Soundtrack.mp3", "Big Shaq - Man's Not Hot.mp3", "Bill Conti - Going The Distance - From 'Rocky' Soundtrack Remastered 2006.mp3", "Bill Medley, Jennifer Warnes - (I've Had) The Time Of My Life - From 'Dirty Dancing' Soundtrack.mp3", "Black Eyed Peas - Boom Boom Pow.mp3", "Black Eyed Peas - Just Can’t Get Enough.mp3", "Black Eyed Peas - Pump It.mp3", "Black Eyed Peas - Where Is The Love.mp3", "Bloc Party - Banquet.mp3", "Bloc Party - Helicopter.mp3", "Bobby McFerrin - Don't Worry Be Happy.mp3", "Bolémvn, Maes - 10K.mp3", "Boney M. - Daddy Cool.mp3", "Boney M. - Rasputin.mp3", "Boney M. - Sunny.mp3", "Booba - Arc-en-ciel.mp3", "Booba - Azerty.mp3", "Booba - GP.mp3", "Booba - RATPI WORLD.mp3", "Booba - RST.mp3", "Booba - Ultra.mp3", "Booba - VARIANT.mp3", "Bosh - Djomb - Bien ou quoi.mp3", "Boyzone - Baby Can I Hold You - Edit.mp3", "Britney Spears - Toxic.mp3", "Britney Spears - Womanizer.mp3", "Bruno Mars - Marry You.mp3", "Bruno Mars - Treasure.mp3", "CHIC - Le Freak - 2018 Remaster.mp3", "Caesars - Jerk It Out.mp3", "Carbozo, Ninho - Carbozo 2.0.mp3", "Carl Douglas - Kung Fu Fighting.mp3", "Cascada - Everytime We Touch.mp3", "Cher - Believe.mp3", "Chris Burton - Love Letters.mp3", "Chris de Burgh - The Lady In Red.mp3", "Christophe Maé - On s'attache.mp3", "Claude François - Cette année-là.mp3", "Claude François - Le lundi au soleil.mp3", "Claude François - Si J'Avais Un Marteau.mp3", "Coldplay - A Sky Full of Stars.mp3", "Coldplay - Fix You.mp3", "Coldplay - Hymn for the Weekend.mp3", "Coldplay - Paradise.mp3", "Coldplay - The Scientist.mp3", "Coldplay - Viva La Vida.mp3", "Coldplay - Yellow.mp3", "Colonel Reyel - Aurélie.mp3", "Colonel Reyel - Toi & moi.mp3", "Commodores - Brick House.mp3", "Corona - The Rhythm of the Night.mp3", "Crazy Town - Butterfly.mp3", "Creedence Clearwater Revival - Fortunate Son.mp3", "Crystal Fighters - Love Natural.mp3", "Curtis Hairston - I Want You All Tonight.mp3", "DJ Jazzy Jeff & The Fresh Prince - The Fresh Prince of Bel-Air.mp3", "Daft Punk - One More Time.mp3", "Daft Punk, Pharrell Williams - Lose Yourself to Dance (feat. Pharrell Williams).mp3", "Daft Punk, Pharrell Williams, Nile Rodgers - Get Lucky (Radio Edit) [feat. Pharrell Williams and Nile Rodgers].mp3", "Daler Mehndi - Tunak Tunak Tun.mp3", "Damso - 911.mp3", "Damso - Feu de bois.mp3", "Damso - N. J Respect R.mp3", "Damso - SENTIMENTAL.mp3", "Damso - Œveillé.mp3", "Damso - Γ. Mosaïque solitaire.mp3", "Damso - Θ. Macarena.mp3", "Damso - Π. VANTABLACK.mp3", "Damso - Σ. MOROSE.mp3", "Damso - Φ. THEVIE RADIO.mp3", "Damso - Ψ. PASSION.mp3", "Daniel Balavoine - Je ne suis pas un héros.mp3", "Dave - Vanina (Runaway) - Live à L'Olympia.mp3", "David Arnold, arr. Joel Goldsmith - Stargate SG-1- Main Title.mp3", "David Ruffin - I've Got A Need For You.mp3", "Desireless - Voyage voyage.mp3", "Destiny's Child - Survivor.mp3", "Début De Soirée - Nuit de folie.mp3", "Diam's - Jeune Demoiselle.mp3", "Diam's - La Boulette (Génération Nan Nan).mp3", "Dire Straits - Sultans of Swing.mp3", "Dire Straits - Walk Of Life - Remastered 1996.mp3", "Discobitch - C'est beau la bourgeoisie - Radio Edit.mp3", "Doctor Dru, Adana Twins - Juicy Fruit.mp3", "Doctors Pop - Gimme Gimme Gimme.mp3", "Doctors Pop - Super Trouper.mp3", "Donna Summer - Hot Stuff.mp3", "Dosseh - Habitué.mp3", "Drake - Nonstop.mp3", "Dua Lipa - Break My Heart.mp3", "Dua Lipa - Physical.mp3", "E-Dubble - Changed My Mind.mp3", "E-Dubble - Don't Like My Music.mp3", "E-Dubble - Plan A.mp3", "E-Dubble - Robot's Can't Drink.mp3", "E-Dubble - Two Tone Rebel.mp3", "E-Dubble - What It Do.mp3", "Earth, Wind & Fire - Let's Groove.mp3", "Earth, Wind & Fire - September.mp3", "Earth, Wind & Fire, The Emotions - Boogie Wonderland (with The Emotions) - Single Version.mp3", "Elfie - Tom Sawyer- Le Petit Monde De Tom Sawyer.mp3", "Elvis Presley - Hound Dog.mp3", "Eminem - My Name Is.mp3", "Eminem - Not Afraid.mp3", "Eminem - Venom - Music From The Motion Picture.mp3", "Eminem - Without Me.mp3", "Europe - The Final Countdown.mp3", "Eurythmics, Annie Lennox, Dave Stewart, Steve Angello - Sweet Dreams (Are Made Of This) - Steve Angello Bootleg.mp3", "Fatal Bazooka - Fous ta cagoule.mp3", "Fatal Bazooka - J'aime trop ton boule (Shake ton booty).mp3", "Fatal Bazooka - Trankillement.mp3", "Flo Rida - Whistle.mp3", "Fools Garden - Lemon Tree.mp3", "France Gall - Ella, elle l'a - Remasterisé en 2004.mp3", "France Gall - Poupée de cire, poupée de son.mp3", "Francky Vincent - Fruit de la passion.mp3", "Frenetics - I Feel a Man.mp3", "GAMPER & DADONI - Gimme! Gimme! Gimme!.mp3", "GAMPER & DADONI, Emily Roberts - Bittersweet Symphony.mp3", "GIMS - Bella.mp3", "GIMS - Est-ce que tu m'aimes - Pilule bleue.mp3", "GIMS - J'me tire.mp3", "Gala - Freed from Desire.mp3", "Gala, Molella, Phil Jay - Freed From Desire.mp3", "Galantis - Runaway (U & I).mp3", "Gaullin - Moonlight.mp3", "Gazo - HAINE&SEX.mp3", "Geek Music - Yu-Gi-Oh! Main Theme (From 'Yu-Gi-Oh!').mp3", "George Benson - Give Me the Night - Edit.mp3", "George Duke - Reach Out.mp3", "Geri Halliwell - It's Raining Men.mp3", "Gilbert Montagné - On va s'aimer.mp3", "Gnarls Barkley, CeeLo Green, Danger Mouse - Crazy.mp3", "Gogglebox - Happy Days.mp3", "Gogglebox - Magnum.mp3", "Green Day - American Idiot.mp3", "Green Day - Basket Case.mp3", "Grégoire - Toi + Moi.mp3", "Guns N' Roses - Sweet Child O' Mine.mp3", "Gwen Guthrie - It Should Have Been You.mp3", "Haddaway - What Is Love - 7' Mix.mp3", "Halsey - Without Me.mp3", "Harold Melvin & The Blue Notes, Teddy Pendergrass - The Love I Lost (feat. Teddy Pendergrass).mp3", "Helene Fischer, Peter Boström - Atemlos durch die Nacht - Bassflow Main RadioVideo Mix.mp3", "Helmut Fritz - Ça m'énerve - Radio Edit.mp3", "Hornet La Frappe - Taga.mp3", "IAM - Je danse le Mia.mp3", "Images - Les démons de minuit (Version single).mp3", "Imagine Dragons - Bad Liar.mp3", "Imagine Dragons - Believer.mp3", "Imagine Dragons - Demons.mp3", "Imagine Dragons - Natural.mp3", "Imagine Dragons - On Top Of The World.mp3", "Imagine Dragons - Radioactive.mp3", "Imagine Dragons - Warriors.mp3", "Indeep - Last Night a D.J. Saved My Life.mp3", "Indochine - 3 nuits par semaine.mp3", "Indochine - L'aventurier.mp3", "Irene Cara - Flashdance...What a Feeling - Radio Edit.mp3", "Iyaz - Replay.mp3", "JAŸ-Z, Linkin Park - Numb Encore.mp3", "James Bay - Best Fake Smile.mp3", "James Brown & The Famous Flames - I Got You (I Feel Good).mp3", "James Brown - Get Up (I Feel Like Being A) Sex Machine.mp3", "Jason Derulo - Trumpets.mp3", "Jason Derulo - Want to Want Me.mp3", "Jason Derulo - Whatcha Say.mp3", "Jax Jones, Martin Solveig, Madison Beer - All Day and Night.mp3", "Jena Lee - J'aimerais tellement.mp3", "Jess Glynne - I'll Be There.mp3", "Jessy Matador - Décalé Gwada.mp3", "Joe Dassin - Les Champs-Elysées.mp3", "Joe Dassin - Siffler sur la colline.mp3", "Johnny Cash - Hurt.mp3", "Johnny Cash - I Walk the Line.mp3", "Johnny Hallyday - Le pénitencier.mp3", "Jonas Blue, Jack & Jack - Rise.mp3", "Jul - JCVD.mp3", "Julian Perretta - Wonder Why.mp3", "KALEO - Way Down We Go.mp3", "KC & The Sunshine Band - Give It Up.mp3", "KIK - Nancy.mp3", "KT Tunstall - Suddenly I See.mp3", "Kaaris - Diarabi.mp3", "Kaaris - Gun salute.mp3", "Kalazh44, Capital Bra, Samra, Nimo, Luciano - Royal Rumble.mp3", "Kamini - J'suis blanc.mp3", "Kamini - Marly-Gomont.mp3", "Kanye West - Stronger.mp3", "Katrina & The Waves - Walking On Sunshine.mp3", "Katy Perry - Hot N Cold.mp3", "Keen' V - Rien qu'une fois.mp3", "Kendrick Lamar - HUMBLE..mp3", "Kesha - TiK ToK.mp3", "Kev Adams - Yallah Yallah (l'arrivée d'Aladin).mp3", "Khaled - Aïcha.mp3", "Khalid - Free Spirit.mp3", "Kid Cudi - Tequila Shots.mp3", "Koba LaD, Gazo - Daddy chocolat.mp3", "Kool & The Gang - Celebration - Single Version.mp3", "Kool & The Gang - Fresh.mp3", "Kool & The Gang - Get Down On It.mp3", "Kool & The Gang - Ladies Night - Single Version.mp3", "Koxie - Garçon.mp3", "L'Algérino - Les menottes (Tching Tchang Tchong).mp3", "La Fouine - Du ferme.mp3", "La Fouine - Toute la night.mp3", "La Fouine - Veni vidi vici.mp3", "Lady Gaga - Bad Romance.mp3", "Lady Gaga - Poker Face.mp3", "Las Ketchup - The Ketchup Song (Aserejé) - Spanglish Version.mp3", "Laurent Voulzy - Rockollection.mp3", "Laylow, Damso - R9R-LINE (feat. Damso).mp3", "League of Legends, 2WEI, Edda Hayes - Warriors.mp3", "Leonard Cohen - Hallelujah.mp3", "Les Marins D'Iroise - Santiano.mp3", "Leto - Paris c'est magique.mp3", "Lil Dicky - Earth.mp3", "Lil Nas X - MONTERO (Call Me By Your Name).mp3", "Lil Nas X, Jack Harlow - INDUSTRY BABY (feat. Jack Harlow).mp3", "Linkin Park - In the End.mp3", "Lionel Richie - All Night Long - Single Version.mp3", "Lionel Richie - Say You, Say Me.mp3", "Lorenzo - Damdamdeo.mp3", "Lost Sky - Dreams.mp3", "Lost Sky - Fearless.mp3", "Louise Attaque - J't'emmène au vent.mp3", "Lukas Graham - 7 Years.mp3", "Lukas Graham - Mama Said.mp3", "M83 - Outro.mp3", "MC Hammer - U Can't Touch This.mp3", "MIKA - Relax, Take It Easy.mp3", "Macklemore, Kesha - Good Old Days (feat. Kesha).mp3", "Madison's Band - Last Night.mp3", "Madonna - Hung Up.mp3", "Maes - Street.mp3", "Manau - La tribu de Dana.mp3", "Marc Cohn - Walking in Memphis.mp3", "Marc Lavoine - Elle a les yeux revolver.mp3", "Mariah Carey - All I Want for Christmas Is You.mp3", "Maroon 5 - Sugar.mp3", "Maroon 5, Cardi B - Girls Like You - Cardi B Version.mp3", "Maroon 5, Christina Aguilera - Moves Like Jagger - Studio Recording From 'The Voice' Performance.mp3", "Maroon 5, SZA - What Lovers Do.mp3", "Maroon 5, Wiz Khalifa - Payphone.mp3", "Marshmello, Bastille - Happier.mp3", "Martin Garrix, Macklemore, Fall Out Boy - Summer Days (feat. Macklemore & Patrick Stump of Fall Out Boy).mp3", "Martin Jensen, James Arthur - Nobody.mp3", "Metallica - Nothing Else Matters - Remastered 2021.mp3", "Miami Sound Machine, Gloria Estefan - Conga!.mp3", "Michael Jackson - Beat It.mp3", "Michael Jackson - Billie Jean.mp3", "Michael Jackson - Black or White.mp3", "Michael Jackson - Don't Stop 'Til You Get Enough.mp3", "Michael Jackson - Smooth Criminal - 2012 Remaster.mp3", "Michael Jackson - Stranger in Moscow.mp3", "Michael Jackson - The Way You Make Me Feel - 2012 Remaster.mp3", "Michael Jackson - Who Is It.mp3", "Michael Jackson - You Rock My World.mp3", "Michael Jackson, The Jacksons - Shake Your Body (Down to the Ground) - Remastered Single Version.mp3", "Michael Sembello - Maniac - From 'Flashdance' Soundtrack.mp3", "Michel Delpech - Pour un flirt.mp3", "Michel Fugain & Le Big Bazar - Une belle histoire.mp3", "Michel Sardou - Être une femme.mp3", "Michel Sardou - La maladie d'amour.mp3", "Milky Chance - Stolen Dance.mp3", "Mötley Crüe - Kickstart My Heart.mp3", "Muse - Starlight.mp3", "Nena - 99 Luftballons.mp3", "Nico & Vinz - Am I Wrong.mp3", "Ninho - Bavard.mp3", "Ninho - Dis-moi que tu m'aimes.mp3", "Ninho - Fendi.mp3", "Ninho - Filon.mp3", "Ninho - Goutte d'eau.mp3", "Ninho - Gros vendeurs.mp3", "Ninho - Jeune Lossa.mp3", "Ninho - L'ancien.mp3", "Ninho - La vie qu'on mène.mp3", "Ninho - Lettre à une femme.mp3", "Ninho - M.I.L.S 3.mp3", "Ninho - Mamacita.mp3", "Ninho - Mauvais Djo.mp3", "Ninho - Millésimes.mp3", "Ninho - Sans peine.mp3", "Ninho - Tout en Gucci.mp3", "Ninho - Un Poco.mp3", "Ninho - Zipette.mp3", "Niska - Mr Sal.mp3", "Niska - Réseaux.mp3", "Niska - Salé.mp3", "No Limit, Orelsan, Ninho - Millions.mp3", "Of Monsters and Men - Little Talks.mp3", "Orchestre symphonique Divertimento - Pirate des Caraïbes.mp3", "Orelsan - Basique.mp3", "Orelsan - La terre est ronde.mp3", "Owl City - Fireflies.mp3", "Owl City, Carly Rae Jepsen - Good Time.mp3", "PLK - C'est mort.mp3", "PLK, Niska - On sait jamais (feat. Niska).mp3", "PZK - Chuis Bo!.mp3", "Panic! At The Disco - High Hopes.mp3", "Patrick Hernandez - Born to Be Alive - The Original.mp3", "Paul Cless - Suavemente.mp3", "Pentatonix, Lindsey Stirling - Radioactive.mp3", "Peter & Sloane - Besoin de rien, envie de toi.mp3", "Pidi - Ça va aller.mp3", "Pitbull - I Know You want Me (Calle Ocho).mp3", "Plastic Bertrand - Ca Plane Pour Moi.mp3", "Portugal. The Man - Feel It Still.mp3", "Pow Wow - Le chat.mp3", "Queen - Another One Bites The Dust - Remastered 2011.mp3", "Queen - Bohemian Rhapsody - Remastered 2011.mp3", "Queen - I Want To Break Free - Single Remix.mp3", "Queen - We Will Rock You - Remastered 2011.mp3", "R.E.M. - Shiny Happy People.mp3", "R3HAB, A Touch Of Class - All Around The World (La La La).mp3", "Rag'n'Bone Man - Human.mp3", "Redbone - Come and Get Your Love - Single Version.mp3", "Renaud - Corona Song.mp3", "Renaud, Axelle Red - Manhattan-Kaboul.mp3", "Ricchi E Poveri - Sarà perché ti amo.mp3", "Rick James - Super Freak.mp3", "Rihanna - Diamonds.mp3", "Rihanna - Don't Stop The Music.mp3", "Rilès - Brothers.mp3", "Rilès - THANK GOD.mp3", "Roddy Ricch - The Box.mp3", "Rohff - La Puissance.mp3", "Rok - Carré PIV.mp3", "Rok - Ragazza.mp3", "Rok - Roi.mp3", "Roxette - Listen To Your Heart.mp3", "SANTA - Générique de Fin.mp3", "SCH - Anarchie.mp3", "SCH - Fusil.mp3", "SHAED - Trampoline.mp3", "Sabaton - Bismarck.mp3", "Sabaton - Primo Victoria.mp3", "Sabaton - To Hell and Back.mp3", "Salt-N-Pepa - Shoop.mp3", "Scissor Sisters - I Don't Feel Like Dancin' - Radio Edit.mp3", "Sean Kingston - Beautiful Girls.mp3", "Sean Paul - She Doesn't Mind.mp3", "Sexion d'Assaut - Avant qu'elle parte.mp3", "Sexion d'Assaut - Casquette à l'envers.mp3", "Sexion d'Assaut - Désolé.mp3", "Sexion d'Assaut - Ma direction.mp3", "Sexion d'Assaut - Wati House.mp3", "Sexion d'Assaut - Wati by Night.mp3", "Shakira - Whenever, Wherever.mp3", "Shania Twain - Man! I Feel Like A Woman!.mp3", "Shawn Mendes, Camila Cabello - Señorita.mp3", "Sia - Snowman.mp3", "Sister Sledge - He's the Greatest Dancer - 2006 Remaster.mp3", "Sister Sledge - We Are Family - 1995 Remaster.mp3", "Smash Mouth - All Star.mp3", "Snow - Informer.mp3", "Sofiane - #JesuispasséchezSo EP 12.mp3", "Sofiane - Tout l'monde s'en fout.mp3", "Steve Es - Hey Brother.mp3", "Stevie Wonder - I Just Called To Say I Love You.mp3", "Stevie Wonder - Superstition - Single Version.mp3", "Sting, Eric Clapton - It's Probably Me.mp3", "Stromae - Alors on danse - Radio Edit.mp3", "Stupeflip - The Antidote.mp3", "Sum 41 - Fat Lip.mp3", "Sum 41 - In Too Deep.mp3", "Sum 41 - The Hell Song.mp3", "Superbus - Butterfly.mp3", "Suprême NTM, Sofiane - Sur le drapeau.mp3", "Survivor - Eye of the Tiger.mp3", "TOTO - Africa.mp3", "Team BS - Team BS.mp3", "Téléphone - Cendrillon - Remasterisé en 2015.mp3", "Téléphone - Ça c'est vraiment toi - Remasterisé en 2006.mp3", "The Beatles - Let It Be - Remastered 2009.mp3", "The Beatles - Twist And Shout - Remastered 2009.mp3", "The Buggles - Video Killed The Radio Star.mp3", "The Cranberries - Ode To My Family - 2025 Remastered.mp3", "The Jackson 5 - ABC.mp3", "The Jackson 5 - I Want You Back.mp3", "The Jackson 5 - Who's Lovin' You.mp3", "The Jacksons - Blame It on the Boogie.mp3", "The Pointer Sisters - I'm So Excited.mp3", "The Strokes - You Only Live Once.mp3", "The Sugarhill Gang - Rapper's Delight.mp3", "The Weather Girls - It's Raining Men.mp3", "The Weeknd - Blinding Lights.mp3", "The Weeknd - Call Out My Name.mp3", "The Weeknd - The Hills.mp3", "TheFatRat - Reminiscence.mp3", "TheFatRat - Rise Up.mp3", "TheFatRat - Unity.mp3", "TheFatRat - Xenogenesis.mp3", "TheFatRat, Laura Brehm, Anna Yvette - Chosen.mp3", "TheVivi - DM.mp3", "Thierry Hazard - Le Jerk.mp3", "Tiësto, Sevenn, Gucci Mane - BOOM.mp3", "Tom Jones, Mousse T. - Sexbomb.mp3", "Toploader - Dancing in the Moonlight.mp3", "Travis Scott - BUTTERFLY EFFECT.mp3", "Travis Scott - HIGHEST IN THE ROOM.mp3", "Travis Scott - SICKO MODE.mp3", "Twenty One Pilots - Heathens.mp3", "Twenty One Pilots - Ride.mp3", "Twenty One Pilots - Stressed Out.mp3", "Two Door Cinema Club - What You Know.mp3", "USHER, Pitbull - DJ Got Us Fallin' In Love (feat. Pitbull).mp3", "VIZE - Glad You Came.mp3", "Vampire Weekend - A-Punk.mp3", "Village People - In The Navy - Single Version.mp3", "Village People - Y.M.C.A..mp3", "Weezer - Island In The Sun.mp3", "Wham! - Wake Me Up Before You Go-Go.mp3", "Whitney Houston - I Wanna Dance with Somebody (Who Loves Me).mp3", "Will Smith - Men In Black - From 'Men In Black' Soundtrack.mp3", "Will Smith - Miami.mp3", "Wiz Khalifa - Black and Yellow.mp3", "Wiz Khalifa, Charlie Puth - See You Again (feat. Charlie Puth).mp3", "Woodkid - Run Boy Run.mp3", "XXXTENTACION - Jocelyn Flores.mp3", "XXXTENTACION, Lil Pump, Swae Lee, Maluma - Arms Around You (feat. Maluma & Swae Lee).mp3", "Youv Dee - Opening.mp3", "ZZ Top - La Grange (2005 Remaster).mp3", "Zara Larsson - Lush Life.mp3", "Zebda - Tomber la chemise.mp3", "Zola - Wow.mp3", "Zouk Machine - Maldòn - Version originale.mp3", "a-ha - Take on Me.mp3", "gianni & kyle - 5 Shots.mp3", "iNi Kamoze, Salaam Remi - Here Comes the Hotstepper - Heartical Mix.mp3", "justine sainte, Ygal Amar - A World Without Danger.mp3", "why mona - Wannabe.mp3"
];

const jsmediatags = window.jsmediatags;
const audio = document.getElementById('audio-element');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const lyricsBtn = document.getElementById('lyrics-btn');
const lyricsContainer = document.getElementById('lyrics-container');
const lyricsContent = document.getElementById('lyrics-content');
const playlistContainer = document.getElementById('playlist');
const searchInput = document.getElementById('search-input');
const suggestionsDropdown = document.getElementById('search-suggestions');
const progressBar = document.getElementById('progress-bar');
const volumeSlider = document.getElementById('volume-slider');
const currentTimeEl = document.getElementById('current-time');
const totalDurationEl = document.getElementById('total-duration');
const currentTitleEl = document.getElementById('current-title');
const currentArtistEl = document.getElementById('current-artist');
const currentArtImg = document.getElementById('current-art-img');
const artPlaceholder = document.getElementById('art-placeholder');
const dynamicBg = document.getElementById('dynamic-bg');

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isLyricsOpen = false;
let syncedLyrics = [];
let isSynced = false;

function init() {
    renderPlaylist(songsList);
    loadSong(0);
}

function parseSong(filename) {
    const clean = filename.replace('.mp3', '');
    const parts = clean.split(' - ');
    return {
        artist: parts[0] || "Artiste Inconnu",
        title: parts[1] || parts[0],
        file: filename
    };
}

function renderPlaylist(list) {
    playlistContainer.innerHTML = '';
    list.forEach((song) => {
        const { artist, title } = parseSong(song);
        const li = document.createElement('li');
        li.className = 'playlist-item';
        if (song === songsList[currentSongIndex]) li.classList.add('active');
        
        li.innerHTML = `
            <div class="item-info">
                <h4>${title}</h4>
                <p>${artist}</p>
            </div>
        `;
        
        li.onclick = () => {
            const originalIndex = songsList.indexOf(song);
            loadSong(originalIndex);
            playSong();
        };
        playlistContainer.appendChild(li);
    });
}

function loadSong(index) {
    currentSongIndex = index;
    const song = songsList[index];
    const { artist, title } = parseSong(song);
    
    audio.currentTime = 0;
    progressBar.value = 0;
    
    currentTitleEl.innerText = title;
    currentArtistEl.innerText = artist;
    const songPath = `src/${song}`;
    audio.src = songPath;
    
    extractAlbumArt(songPath);
    
    if (isLyricsOpen) {
        fetchLyrics(artist, title);
    } else {
        lyricsContent.innerHTML = "Cliquez sur <i class='fa-solid fa-microphone'></i> pour les paroles";
    }
    
    document.querySelectorAll('.playlist-item').forEach((item, i) => {
        const isActive = songsList.indexOf(song) === i;
        item.classList.toggle('active', isActive);
        if (isActive) item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}

function extractAlbumArt(url) {
    currentArtImg.style.display = 'none';
    artPlaceholder.style.display = 'block';
    if (!jsmediatags) return;

    const imageUrl = url.replace('.mp3', '.jpg');
    const imgTest = new Image();
    imgTest.crossOrigin = "Anonymous";
    imgTest.onload = () => {
        currentArtImg.src = imageUrl;
        currentArtImg.style.display = 'block';
        artPlaceholder.style.display = 'none';
        updateThemeFromImage(imageUrl);
    };
    imgTest.onerror = () => {
        try {
            jsmediatags.read(url, {
                onSuccess: function(tag) {
                    const image = tag.tags.picture;
                    if (image) {
                        const { data, format } = image;
                        let base64String = "";
                        for (let i = 0; i < data.length; i++) base64String += String.fromCharCode(data[i]);
                        const finalUrl = `data:${format};base64,${window.btoa(base64String)}`;
                        currentArtImg.src = finalUrl;
                        currentArtImg.style.display = 'block';
                        artPlaceholder.style.display = 'none';
                        updateThemeFromImage(finalUrl);
                    } else {
                        resetTheme();
                    }
                },
                onError: function() {
                    resetTheme();
                }
            });
        } catch (e) {
            resetTheme();
        }
    };
    imgTest.src = imageUrl;
}

function updateThemeFromImage(imgUrl) {
    dynamicBg.style.backgroundImage = `url('${imgUrl}')`;
    dynamicBg.classList.add('active');

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imgUrl;
    img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const getColor = (x, y) => {
            try {
                const data = ctx.getImageData(x, y, 1, 1).data;
                return `rgb(${data[0]}, ${data[1]}, ${data[2]})`;
            } catch (e) {
                return 'rgb(0,0,0)';
            }
        };

        const color1 = getColor(Math.floor(img.width * 0.2), Math.floor(img.height * 0.2));
        const color2 = getColor(Math.floor(img.width * 0.8), Math.floor(img.height * 0.8));
        const accent = getColor(Math.floor(img.width * 0.5), Math.floor(img.height * 0.5));

        document.documentElement.style.setProperty('--dynamic-color-1', color1);
        document.documentElement.style.setProperty('--dynamic-color-2', color2);
        document.documentElement.style.setProperty('--accent', accent);
    };
}

function resetTheme() {
    dynamicBg.classList.remove('active');
    document.documentElement.style.setProperty('--dynamic-color-1', '#0f172a');
    document.documentElement.style.setProperty('--dynamic-color-2', '#1e1b4b');
    document.documentElement.style.setProperty('--accent', '#38bdf8');
}

function playSong() {
    isPlaying = true;
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    audio.play().catch(() => {});
}

function pauseSong() {
    isPlaying = false;
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    audio.pause();
}

playBtn.onclick = () => isPlaying ? pauseSong() : playSong();

nextBtn.onclick = () => {
    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * songsList.length);
    } else {
        currentSongIndex = (currentSongIndex + 1) % songsList.length;
    }
    loadSong(currentSongIndex);
    playSong();
};

prevBtn.onclick = () => {
    currentSongIndex = (currentSongIndex - 1 + songsList.length) % songsList.length;
    loadSong(currentSongIndex);
    playSong();
};

shuffleBtn.onclick = () => {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle('active', isShuffle);
};

lyricsBtn.onclick = () => {
    isLyricsOpen = !isLyricsOpen;
    lyricsBtn.classList.toggle('active', isLyricsOpen);
    lyricsContainer.style.display = isLyricsOpen ? 'block' : 'none';
    if (isLyricsOpen) {
        const { artist, title } = parseSong(songsList[currentSongIndex]);
        fetchLyrics(artist, title);
    }
};

async function fetchLyrics(artist, title) {
    lyricsContent.innerHTML = "<div style='margin-top:50px'>Recherche des paroles...</div>";
    syncedLyrics = [];
    isSynced = false;
    
    const cleanArtist = artist.split(',')[0].split('feat')[0].trim();
    const cleanTitle = title.split('(')[0].split('-')[0].trim();

    try {
        const res = await fetch(`https://lrclib.net/api/get?artist_name=${encodeURIComponent(cleanArtist)}&track_name=${encodeURIComponent(cleanTitle)}`);
        const data = await res.json();
        
        if (data.syncedLyrics) {
            syncedLyrics = parseLRC(data.syncedLyrics);
            isSynced = true;
            displaySyncedLyrics();
        } else if (data.plainLyrics) {
            lyricsContent.innerText = data.plainLyrics;
        } else {
            const res2 = await fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(cleanArtist)}/${encodeURIComponent(cleanTitle)}`);
            const data2 = await res2.json();
            lyricsContent.innerText = data2.lyrics || "Paroles introuvables.";
        }
    } catch (error) {
        lyricsContent.innerText = "Erreur lors de la récupération.";
    }
}

function parseLRC(lrc) {
    const lines = lrc.split('\n');
    const result = [];
    const timeReg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
    lines.forEach(line => {
        const match = timeReg.exec(line);
        if (match) {
            const minutes = parseInt(match[1]);
            const seconds = parseInt(match[2]);
            const millis = parseInt(match[3]);
            const time = minutes * 60 + seconds + (millis > 99 ? millis / 1000 : millis / 100);
            const text = line.replace(timeReg, '').trim();
            if (text) result.push({ time, text });
        }
    });
    return result;
}

function displaySyncedLyrics() {
    lyricsContent.innerHTML = "";
    syncedLyrics.forEach((line, index) => {
        const p = document.createElement('p');
        p.className = 'lyric-line';
        p.innerText = line.text;
        p.onclick = () => { audio.currentTime = line.time; };
        lyricsContent.appendChild(p);
    });
}

audio.ontimeupdate = () => {
    const { duration, currentTime } = audio;
    if (!duration) return;
    progressBar.value = (currentTime / duration) * 100;
    currentTimeEl.innerText = formatTime(currentTime);
    totalDurationEl.innerText = formatTime(duration);
    
    if (isLyricsOpen && isSynced) {
        const adjustedTime = currentTime + 0.1;
        const activeIndex = syncedLyrics.findIndex((line, i) => {
            const nextLine = syncedLyrics[i + 1];
            return adjustedTime >= line.time && (!nextLine || adjustedTime < nextLine.time);
        });

        if (activeIndex !== -1) {
            const lines = lyricsContent.querySelectorAll('.lyric-line');
            lines.forEach((line, i) => {
                const wasActive = line.classList.contains('active');
                const isNowActive = i === activeIndex;
                
                if (isNowActive !== wasActive) {
                    line.classList.toggle('active', isNowActive);
                }

                if (isNowActive) {
                    const containerHeight = lyricsContainer.offsetHeight;
                    const lineOffset = line.offsetTop;
                    const lineHeight = line.offsetHeight;
                    lyricsContainer.scrollTo({
                        top: lineOffset - (containerHeight / 2) + (lineHeight / 2),
                        behavior: 'smooth'
                    });
                }
            });
        }
    }
};

searchInput.oninput = (e) => {
    const term = e.target.value.toLowerCase();
    if (!term) { suggestionsDropdown.style.display = 'none'; return; }
    const filtered = songsList.filter(s => s.toLowerCase().includes(term)).slice(0, 10);
    if (filtered.length > 0) {
        suggestionsDropdown.innerHTML = '';
        filtered.forEach(song => {
            const { artist, title } = parseSong(song);
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.innerHTML = `<h5>${title}</h5><p>${artist}</p>`;
            div.onclick = () => { loadSong(songsList.indexOf(song)); playSong(); suggestionsDropdown.style.display = 'none'; searchInput.value = ''; };
            suggestionsDropdown.appendChild(div);
        });
        suggestionsDropdown.style.display = 'block';
    } else suggestionsDropdown.style.display = 'none';
};

document.addEventListener('click', (e) => { if (!e.target.closest('.search-box')) suggestionsDropdown.style.display = 'none'; });

progressBar.oninput = (e) => { audio.currentTime = (e.target.value / 100) * audio.duration; };
volumeSlider.oninput = (e) => { audio.volume = e.target.value / 100; };
function formatTime(s) { const min = Math.floor(s/60); const sec = Math.floor(s%60); return `${min}:${sec < 10 ? '0' : ''}${sec}`; }
audio.onended = () => nextBtn.onclick();
init();
