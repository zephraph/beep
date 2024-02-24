import { setInput } from "rpi-gpio";

// GPIO 17
const sw = setInput(26);

sw.watch((state) => {
  if (state) {
    console.log("button pushed!");
  }
});
