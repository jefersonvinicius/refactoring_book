export type Performance = {
    playID: string;
    audience: number;
};

export type Invoice = {
    customer: string;
    performances: Performance[];
};

export type Play = {
    name: string;
    type: string;
};
