const sentence = "hello there from lighthouse labs";
let i = 1;
for (const char of sentence) {
  
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, 1000*i) // <= 1s delay to make it noticeable. Can dial it down later.
  i = i+1;
}


setTimeout(function(){
  process.stdout.write('\n');
}, 1000*i);
