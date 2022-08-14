## CharTypes

vowels
symbols

vowel_marks
yogavaahas
accents

virama

zwnj
zwj

consonants
extra_consonants

====

## Grammmar

### expanded

!!!NOTE: Add zwj & zwnj!!!

TOKEN = SYMBOL | AKSHARA | WHITESPACE
SYMBOL = symbols
AKSHARA = VOWEL | CONSONANT | CONJUNCT_CONSONANT
VOWEL = vowels | 
        vowels yogavaahas | 
        vowels accents | 
        vowels yogavaahas accents
CONSONANT = consonants |
            consonants virama |
            consonants virama joiner |
            consonants accents |
            consonants accents accents |
            consonants yogavaahas | 
            consonants yogavaahas accents | 
            consonants yogavaahas accents accents | 
            consonants vowel_marks | 
            consonants vowel_marks accents | 
            consonants vowel_marks accents accents | 
            consonants vowel_marks yogavaahas | 
            consonants vowel_marks yogavaahas accents |
            consonants vowel_marks yogavaahas accents accents |
            consonants matra accents | 
            consonants matra accents accents | 
            consonants vowel_marks matra | 
            consonants vowel_marks matra accents |
            consonants vowel_marks matra accents accents |
CONJUNCT_CONSONANT = (consonants virama)+ CONSONANT | 
                     (consonants virama joiner)+ CONSONANT
consonants = consonants | consonants + nukta

### contracted

TOKEN = SYMBOL | WHITESPACE | AKSHARA
SYMBOL = symbols
WHITESPACE = \s | \n | \t
AKSHARA = VOWEL | CONSONANT
VOWEL = vowels | vowels (yogavaahas | accents | yogavaahas accents)
CONSONANT = consonants | 
            consonants (virama | vowel_marks | vowel_marks yogavaahas | vowel_marks yogavaahas accents) |
            (consonants virama)* CONSONANT

===

## Questions

1. Is "consonants virama accents" sequence possible?
No. Only vowels can be uddatta/anudatta/svarita. Ref: Panini.

2. Is ॐ an akshara or a symbol? If syllable how many varnas? same as ओम् (i.e. 2)?
3. In case of अ॒प्स्व१॒॑न्तः is १ part of the प्स्व syllable or a separate symbol? If the former, typically, what can numbers it be? १, २ and ३?
4. Is अ॒॑ (vowel accent accent) sequence possible? If yes, is there an order in which the accents combine?
5. marks at the beginning of the string. Should it be counted? (Edge case)
6. marks after non-consonant chars. Should it be counted? (Edge case)

===

## Problems in devsyll

- "consonants vowel_marks* yogavaahas accents" is split as "consonants vowel_marks* yogavaahas" + "accents"
- recognises १२३ as one syllable