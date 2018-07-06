export class Donation {
    // amount should include currency
    constructor(public name: string, public amount: string, public website?: string) { }
}

export const DonationHistory: Donation[] = [
    new Donation("GOFF Concepts L.L.C.", "$25 USD", "http://goffconcepts.com"),
    new Donation("George van der Ven", "$10 USD"),
    new Donation("Geoffroy Menard", "$15 CAD"),
    new Donation("Ian Harpur", "1,000 RUB"),
    new Donation("Christian Brüggemann", "€ 5.00 EUR"),
    new Donation("Grisha Konzalaev", "300 RUB"),
    new Donation("--", "£20.00 GBP")
];