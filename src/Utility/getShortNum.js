const shortNumber = Intl.NumberFormat('en', { notation: 'compact' });

const getShortNumber=(num)=>{
   const shortNum = shortNumber.format(num)
   return shortNum
}

export default getShortNumber