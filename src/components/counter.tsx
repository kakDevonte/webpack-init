import { useUnit } from "effector-react";
import styled from "@emotion/styled";
import { $counter, incremented, decremented } from "./store";

const Button = styled.button({
  color: "white",
  backgroundColor: "#2962FF",
  borderRadius: 4,
  padding: 10,
  border: "none",
  cursor: "pointer",
  transition: "background-color .2s ease",
  ":hover": {
    backgroundColor: "#2959E0",
  },
  ":active": {
    backgroundColor: "#224BBC",
  },
});

const Group = styled.div({
  display: "flex",
  gap: 12,
});

export const Counter = () => {
  const [counter, onIncremented, onDecremented] = useUnit([
    $counter,
    incremented,
    decremented,
  ]);

  return (
    <div>
      Counter: {counter}
      <Group>
        <Button onClick={onIncremented}>Increment</Button>
        <Button onClick={onDecremented}>Decrement</Button>
      </Group>
    </div>
  );
};
