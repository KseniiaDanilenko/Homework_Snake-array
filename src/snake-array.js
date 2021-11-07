const snakeArray = (snakeStart) => {
   const width = 7;
   const heigth = 6;
    let array = new Array(heigth).fill().map(() => new Array(width).fill(""));
    let counter = snakeStart; 
    let startColumn = 0;
    let endColumn = width - 1;
    let startRow = 0;
    let endRow = heigth - 1;
    while(startColumn<=endColumn && startRow <= endRow){
        for( let i = startColumn; i<= endColumn; i++){
            array[startRow][i] = counter; 
            counter ++;
         }
         startRow++;
         for(let j = startRow; j<=endRow; j++){
             array[j][endColumn] = counter;
             counter++;
         }
         endColumn--;
         for (let k = endColumn; k>=startColumn; k--){
             array[endRow][k] = counter;
             counter++;
         } 
         endRow--;
         for(let g = endRow; g>= startRow; g--){
             array[g][startColumn] = counter;
             counter++;
         }
         startColumn++;
    }
   return array;
}
module.exports = snakeArray;
