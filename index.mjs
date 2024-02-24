import gpio from "array-gpio";

// GPIO 17
const sw = gpio.setInput(26);

sw.watch((state) => {
  if (state) {
    console.log("button pushed!");
  }
});

setTimeout(() => {
  process.exit();
}, 5000);
