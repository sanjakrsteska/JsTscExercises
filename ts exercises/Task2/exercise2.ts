function checkData(param: string | number): string | number {
    if(typeof param === 'string')
    {
        return param.length;
    }
   else if(typeof param === 'number')
   {
    return param*2;
   }
   else {
    return "Not a valid parameter type"
   }

}

console.log(checkData(2))
console.log(checkData("Hello"))