import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.counter.toggleCounterState);
  const counter = useSelector((state) => state.counter.counter);
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };
  const increaseHandler = () => {
    dispatch(counterAction.increase(5));
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {!show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
