export class DeskDuplTestResult {
    constructor(public name: string, public ok: boolean) { }
}

export const DeskDuplTestResults: DeskDuplTestResult[] = [
    new DeskDuplTestResult("NFS Most Wanted 2012", true),
    new DeskDuplTestResult("Burnout Paraduse Ultimate Box", true),
    new DeskDuplTestResult("Resident Evil 7", true),
    new DeskDuplTestResult("Watch Dogs 2", false),
    new DeskDuplTestResult("Steins;Gate 0", true)
];