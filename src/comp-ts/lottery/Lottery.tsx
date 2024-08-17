import React, { useState } from "react";
import st from "./Lottery.module.css";

export const Lottery = () => {

  let [selectedValue, setSelectedValue] = useState("sportka" || "euroJack")

  const handleChangeSportka = () => {
    
  }       

  const handleChangeEuroJack = () => {
    
  }   

  
  let [num, setNum] = useState(0);
  let genNumber = (min:number, max:number):void => {
    let num = Math.floor(Math.random() * (max-min) + min)
    setNum(num)
  }

  return (
    <div className={st.lottery}>
      <div className={st.selectLine}>
      <form>
          <label htmlFor="options">Choose an option:</label>
          <select id="options" value={selectedValue} >
            <option value="euro-jack">euro-jack</option>
            <option value="sportka">sportka</option>
          </select>
          <p>You selected: {selectedValue}</p>
        </form>
      </div>
      <div className={st.happyLine}>
        <span className={st.happyNum}>{num}</span>
        <span className={st.happyNum}>{num}</span>
        <span className={st.happyNum}>{num}</span>
        <span className={st.happyNum}>{num}</span>
        <span className={st.happyNum}>{num}</span>
        <span className={st.happyNum}>{num}</span>

        <span className={st.happyNum}>{num}</span>
      </div>
      <div className={st.buttonLine}>
        <button onClick={() => {genNumber(1, 50)}}>generate</button>
      </div>
    </div>
  )
}