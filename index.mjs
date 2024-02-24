import { setInput } from "array-gpio";

// GPIO 17
const sw = setInput(26);

sw.watch((state) => {
  if (state) {
    console.log("button pushed!");
  }
});
