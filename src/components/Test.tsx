import React from 'react';
import { StyledTest } from './Test.styles';
import { decrement, increment, setName } from '../store/counterSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const Test = () => {
  const counterState = useAppSelector((state) => state.counter);

  const { value, name } = counterState;
  const dispatch = useAppDispatch();
  return (
    <StyledTest>
      <div>{value}</div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>Name is: {name}</div>
      <div>
        <button onClick={() => dispatch(setName('Alan'))}>Set name</button>
      </div>
    </StyledTest>
  );
};

export default Test;
