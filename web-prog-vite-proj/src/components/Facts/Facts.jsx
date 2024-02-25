const facts = [
    "1. Avocados are a fruit, not a vegetable. They're technically considered a single-seeded berry, believe it or not.",
    "2. The Eiffel Tower can be 15 cm taller during the summer, due to thermal expansion meaning the iron heats up, the particles gain kinetic energy and take up more space.",
    "3. Trypophobia is the fear of closely-packed holes. Or more specifically, an aversion to the sight of irregular patterns or clusters of small holes or bumps. No crumpets for them, then.",
    "4. Allodoxaphobia is the fear of other people's opinions. It's a rare social phobia that's characterised by an irrational and overwhelming fear of what other people think.",
    "5. Australia is wider than the moon. The moon sits at 3400km in diameter, while Australia’s diameter from east to west is almost 4000km.",
    "6. 'Mellifluous' is a sound that is pleasingly smooth and musical to hear.",
    "7. The Spice Girls were originally a band called Touch. When we first started [with the name Touch], we were pretty bland, Mel C told The Guardian in 2018. We felt like we had to fit into a mould.",
    "8. Emma Bunton auditioned for the role of Bianca Butcher in Eastenders. Baby Spice already had a small part in the soap back in the 90s but tried out for a full-time role. She was pipped to the post by Patsy Palmer but ended up auditioning for the Spice Girls not long after.",
    "9. Human teeth are the only part of the body that cannot heal themselves. Teeth are coated in enamel which is not a living tissue.",
    "10. It's illegal to own just one guinea pig in Switzerland. It's considered animal abuse because they're social beings and get lonely.",
    "11. The Ancient Romans used to drop a piece of toast into their wine for good health - hence why we 'raise a toast'.",
    "12. The heart of a shrimp is located in its head. They also have an open circulatory system, which means they have no arteries and their organs float directly in blood.",
    "13. Amy Poehler was only seven years older than Rachel McAdams when she took on the role of 'cool mom' in Mean Girls. Rachel was 25 as Regina George - Amy was 32 as her mum.",
    "14. People are more creative in the shower. When we take a warm shower, we experience an increased dopamine flow that makes us more creative.",
    "15. Baby rabbits are called kits. Cute!",
    "16. The unicorn is the national animal of Scotland. It was apparently chosen because of its connection with dominance and chivalry as well as purity and innocence in Celtic mythology.",
    "17. The first aeroplane flew on December 17, 1903. Wilbur and Orville Wright made four brief flights at Kitty Hawk, North Carolina, with their first powered aircraft, aka the first airplane.",
    "18. Venus is the only planet to spin clockwise. It travels around the sun once every 225 Earth days but it rotates clockwise once every 243 days.",
    "19. Nutmeg is a hallucinogen. The spice contains myristicin, a natural compound that has mind-altering effects if ingested in large doses.",
    "20. A 73-year-old bottle of French Burgundy became the most expensive bottle of wine ever sold at auction in 2018, going for $558,000 (approx £439,300). The bottle of 1945 Romanee-Conti sold at Sotheby for more than 17 times its original estimate of $32,000.",
    "21. Competitive art used to be an Olympic sport. Between 1912 and 1948, the international sporting events awarded medals for music, painting, sculpture and architecture. Shame it didn't catch on, the famous pottery scene in Ghost could have won an Olympic medal as well as an Academy Award for the best screenplay.",
    "22. A chef's hat has 100 pleats. Apparently, it's meant to represent the 100 ways you can cook an egg. Wonder if Gordon Ramsay knows that.",
    "23. In 2014, there was a Tinder match in Antarctica. Two research scientists matched on the global dating app in the most remote part of the world - a man working at the United States Antarctic McMurdo Station and a woman camping a 45-minute helicopter ride away. What are the chances?!",
    "24. The Spanish national anthem has no words. The 'Marcha Real' is one of only four national anthems in the world (along with those of Bosnia and Herzegovina, Kosovo, and San Marino) to have no official lyrics.",
    "25. The Japanese word 'Kuchi zamishi' is the act of eating when you're not hungry because your mouth is lonely. We do this all the time.",
    "26. The probability of a blue lobster existing is widely touted as being one in two million. Bright blue lobsters are so-coloured because of a genetic abnormality that causes them to produce more of a certain protein than others.",
    "27. There’s only one letter that doesn’t appear in any American state name. There's a Z in Arizona and an X in Texas, but no Q in any of them.",
    "28. Louboutins' iconic red soles were inspired by Andy Warhol. The 60s pop artist's drawing Flowers caught the eye of the famous designer which gave him the idea to add the infamous sole to his designs.",
    "29. A book called 'A la recherche du temps perdu' by Marcel Proust contains an estimated 9,609,000 characters, making it the longest book in the world. The title translates to 'Remembrance of Things Past'.",
    "30. Google images was literally created after Jennifer Lopez wore that infamous dress at the 2000 Grammys. So many people were searching for her outfit, the search engine added an imagine function.",
    "31. Big Ben's clock stopped at 10:07 p.m. on 27 May 2005, most likely due to an extremely hot temperature of 31.8 degrees Celsius.",
    "32. Walt Disney currently holds the most Academy Awards. Disney won 26 Oscars over the course of his career and was nominated a grand total of 59 times.",
    "33. There's a fruit that tastes like chocolate pudding. Can we get in on this? Apparently, there's a fruit native to Central and South America called black sapote that tastes like chocolate and sweet custard.",
    "34. Queen Elizabeth II was a trained mechanic. When she was 16, the Queen joined the British employment agency at the Labour Exchange and learned the basics of truck repair. Apparently, she can repair tires and repair engines. Is there anything the Queen can't do?!",
    "35. The Easter Island heads have bodies. Those iconic stone heads - you know the ones. In the 2010s, archaeologists found that two of the Pacific Island figures actually had torsos that measured as high as 33 feet.",
    "36. M&Ms are named after the businessmen who created them. But what do the M's stand for? Forrest Mars and Bruce Murrie, who apparently didn't have the best relationship as Mars leveraged Murrie out of his 20% share of the business before it became the biggest-selling sweet in the US. Ouch.",
    "37. Pigeons can tell the difference between Picasso and Monet. What?! A 1995 study shows that the birds can differentiate between the two artists.",
    "38. The real name for a hashtag is an octothorpe. The 'octo' refers to the eight points in the symbol, but according to the Merriam-Webster dictionary the 'thorpe' part is a mystery.",
    "39. The actors who voiced Mickey and Minnie mouse got married in real life. Russi Taylor (Minnie) and Wayne Allwine (Mickey) tied the knot in 1991.",
    "40. You can hear a blue whale's heartbeat from over 2 miles away. Blue whales weigh an average of between 130,000 and 150,000kg, with their hearts weighing roughly 180kg.",
    "41. The last letter added to the English alphabet was 'J'. The letter dates back to 1524, and before that the letter 'i' was used for both the 'i' and 'j' sounds.",
    "42. There is actually a word for someone giving an opinion on something they know nothing about. An 'ultracrepidarian' is someone who voices thoughts beyond their expertise.",
    "43. The Chupa Chups logo was designed by Salvador Dalí. The surrealist artist designed the logo in 1969.",
    "44. Ketchup was once sold as medicine. The condiment was prescribed and sold to people suffering with indigestion back in 1834.",
    "45. The world's longest walking distance is 14,000 miles. You can walk from Magadan in Russia to Cape Town in South Africa. It requires no flying or sailing - just bridges and open roads.",
    "46. The moon has moonquakes. They happen due to tidal stresses connected to the distance between the moon and the Earth.",
    "47. Humans are the only animals that blush. Apparently, we're also the only animals that experience embarrassment, too. This is because it's a complex emotion that involves understanding other people's opinions.",
    "48. All the clocks in Pulp Fiction are set to 4.20. Looks like we're going to have to rewatch the film to find out.",
    "49. Kim Kardashian has a 'glam' clause in her will. It states that if she's ever in a position where she can't get ready herself, can't communicate, or she's unconscious, someone has to make sure her hair, nails, and makeup are all perfect.",
    "50. An ostrich's eye is bigger than its brain. This could be why the birds often run round in circles when trying to escape predators despite their fast running speed.",
    "51. A jiffy is an actual unit of time. It's 1/100th of a second.",
    "52. You can't hum if you hold your nose... Gotcha!",
    "53. Vatican City is the smallest country in the world. It's 120 times smaller than the island of Manhattan.",
    "54. Japan has over 200 flavours of Kit Kats. They're exclusively created for different regions, cities, and seasons. There are some tasty-sounding ones like banana, blueberry cheesecake and Oreo ice cream, as well as some very questionable ones like baked potato, melon and cheese, wasabi, and vegetable juice.",
    "55. Kris Jenner has 12 grandchildren. (Extra points if you can list them in order of age.) Kourtney Kardashianhas three children, Mason, 13, Penelope, 10, and Reign, 8. Kim has four, North, 9, Saint, 7, Chicago, 5 and Psalm, 3. Rob has one, Dream, 6. Khloé has two, True, 4 and a baby boy (a name hasn't been announced yet), born August 2022. Kylie has two, Stormi, 5 and Aire, one.",
    "And that's it!, thanks for reading!"
]

export function Facts({ count }) {
    return (
        <div className="funFacts">
            <h3>Edd's Random Fun Facts!</h3>
            {
                count > 0 ?
                    <h2>{facts[count - 1]}</h2>
                    :
                    <h2>Use the counter to go between facts!</h2>
            }
        </div>
    )
}