import { SportkaTypeState } from "../../../state";
import st from "./Sportka.module.css";

type SportkaType = {
  lottery: SportkaTypeState
}

export const Sportka = (props:SportkaType) => {

  return(
    <div className={st.sportka}>
      <div className={st.sportkaLine}>
        <h3>Line:</h3>
        <ul className={st.sportkaLineList}>
          {props.lottery.sportkaLine.map((m) => {
            return(
              <li className={st.sportkaLineItem}>
                {m}
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <h3>Chance:</h3>
        <ul className={st.sportkaChance}>
          {props.lottery.sportkaChance.map((m) => {
            return(
              <li className={st.sportkaChanceItem}>{m}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}