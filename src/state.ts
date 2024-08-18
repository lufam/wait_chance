
export type SportkaTypeState = {
  sportkaLine: number[];
  sportkaChance: number[];
}

type EuroJackType = {
  lineFirst: number[];
  lineSecond: number[];
  extra6: number[]
}

type LotteryTypeState = {
  euroJack: EuroJackType;
  sportka:  SportkaTypeState;
}

type StateType = {
  boxing: [],
  basket: [],
  lottery: LotteryTypeState
}

const State:StateType  = {

  boxing: [

  ],

  basket: [

  ],

  lottery: {
    euroJack: {
      lineFirst: [1, 30, 30, 30, 50],
      lineSecond: [1, 12],
      extra6: [0, 6, 6, 6, 6, 9],
    },
    sportka: {
      sportkaLine: [1, 20, 20, 20, 20, 49],
      sportkaChance: [0, 5, 5, 5, 5, 9]
    },
  },
  
}


export let sportkaState = State.lottery.sportka;