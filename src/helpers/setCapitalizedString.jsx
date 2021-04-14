export const setCapital = (string) => {
   
  const arraySplit = string.split(' ');

  
  const stringNew = []

  for (let i = 0; i <= arraySplit.length; i++) {
    stringNew.push(Capitalize( arraySplit[i] ))
  }

  return `${stringNew[0]} ${stringNew[1]}`
  
};

const Capitalize = (str) => {
    if(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
  };

