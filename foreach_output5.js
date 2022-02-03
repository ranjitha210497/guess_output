const elements = [1, 2, 3, 4, 5];

elements.forEach(element => {
  console.log(element);

  if(element == 2){
    return;
    //break;
    // continue;
  }
})