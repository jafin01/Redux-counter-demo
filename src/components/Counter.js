import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const toggle = useSelector((state) => state.toggle);

  const incrementHandler = (val) => {
    dispatch(counterActions.increment(val))
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && (
        <>
          <div className={classes.value}>{counter}</div>
          <div className="counter">
            <button onClick={incrementHandler.bind(null, 1)}>Increment</button>
            <button onClick={incrementHandler.bind(null, 5)}>
              Increment by 5
            </button>
            <button onClick={decrementHandler}>Decrement</button>
          </div>
        </>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
