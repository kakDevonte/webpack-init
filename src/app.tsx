import { Counter } from "@/components/counter";
import { Button } from "@elephas/react-core";

export const App = () => {
  return (
    <div>
      <Button appearance="danger">Critical error happened</Button>
      <h1>Hello!</h1>
      <Counter />
    </div>
  );
};
