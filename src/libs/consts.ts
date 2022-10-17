export type Types = "ROCK" | "PAPER" | "SCISSORS";

export type ChoicesType = {
  id: number;
  type: Types;
  beats: Types;
};

export const CHOICES: Array<ChoicesType> = [
  {
    id: 0,
    type: "ROCK",
    beats: "SCISSORS",
  },
  {
    id: 1,
    type: "PAPER",
    beats: "ROCK",
  },
  {
    id: 2,
    type: "SCISSORS",
    beats: "PAPER",
  },
];
