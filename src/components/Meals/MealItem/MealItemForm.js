import React, { Fragment, useRef, useState, useTransition } from "react";
import Card from "../../UI/card";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const [amountIsValid,setAmountIsValid]=useState(true)
  const amountInputRef= useRef();
  const submitHandler=event=>{
    event.preventDefault();  
    const enteredAmount= amountInputRef.current.value; 
    const enteredAmountNumber= +enteredAmount;
    if(enteredAmount.trim().length===0||enteredAmountNumber<1||enteredAmountNumber>5){
      setAmountIsValid(false)
      return;
    }else{
      setAmountIsValid(true)
    }
  props.onAddToCart(enteredAmountNumber);
  }  
  return (
    <Fragment>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
        // ref={amountInputRef} wont work this is custom input change code in INPUt component
          label="Amount"
          ref={amountInputRef}
          input={{
           
            id: "amount_"+props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        {/* with one {} evaluate js exp, with 2 {{}} sets as obj */}
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter valid amount 1-5</p>}
      </form>
      
    </Fragment>
  );
};
export default MealItemForm;
