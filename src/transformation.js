function transform(input){
  const splitedInput = input.split('\n')
  
  const uniqueItems = new Set(splitedInput);
  
  const backToArray = [...uniqueItems]
  
  return backToArray.join();
}

export default transform;
