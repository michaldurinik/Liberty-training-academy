export class Candidate {
    constructor(public name: string,
                public constituency: string,
                public party: string,
                public votes: number,
                public percentage: number,
                public change: string,
                public changeAmount: number) {
    }
}
