/** @jsx h */
import { h } from "preact";
import { ButtonCounter } from "./components/ButtonCounter";

export const App = () => {
  return (
    <div class="p-2">
      <h1>Preact TSX Starter</h1>
      <ButtonCounter name="Some Title" />
    </div>
  );
};
