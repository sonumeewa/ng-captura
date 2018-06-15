export class Translation {
    constructor(public language: string, public id: string, public translators: string[]) {}
}

export const Translations: Translation[] = [
    new Translation("Arabic", "ar", ["mohi-othman"]),
    new Translation("Chinese (Simplified) ", "zh-CN", ["Airborne76"]),
    new Translation("Chinese (Traditional)", "zh-TW", ["anxgang"]),
    new Translation("Czech", "cs", ["nofutur3"]),
    new Translation("Danish", "da", ["Martin4ndersen"]),
    new Translation("Dutch", "nl", ["demichiel"]),
    new Translation("English", "en", ["Mathew Sachin"]),
    new Translation("Finnish", "fi", ["Mknsri"]),
    new Translation("French", "fr", ["baptistecolin"]),
    new Translation("German", "de", ["flxn"]),
    new Translation("Hebrew", "he", ["yotam180"]),
    new Translation("Icelandic", "is", ["gautsson"]),
    new Translation("Indonesian", "id", ["TheFaR8"]),
    new Translation("Italian", "it", ["simocosimo"]),
    new Translation("Japanese", "ja", ["heartguard"]),
    new Translation("Malayalam", "ml", ["Mathew Sachin"]),
    new Translation("Norwegian", "no", ["goggenb"]),
    new Translation("Polish", "pl", ["j4nw"]),
    new Translation("Portuguese", "pt", ["igorruckert"]),
    new Translation("Romanian", "ro", ["AndreeaEne"]),
    new Translation("Russian", "ru", ["rvgulyaev"]),
    new Translation("Spanish", "es", ["KNTRO", "Jhovany200"]),
    new Translation("Swedish", "sv", ["Arrowfan"]),
    new Translation("Thai", "th", ["kerlos"]),
    new Translation("Turkish", "tr", ["sgbasaraner"]),
    new Translation("Ukrainian", "uk", ["Marusyk"])
];