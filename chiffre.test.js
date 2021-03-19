const chiffre = require('./chiffre');

/*test('should return arabic number to roman', ()=>{
    expect(chiffre(1234)).toBe('MCCXXXIV');
    expect(chiffre(4520)).toBe("Le chiffre n'est pas compris entre 1 et 3999 inclus.");
    expect(chiffre(764)).toBe('DCCLXIV');
});*/

test('should return roman number to arabic', ()=>{
    expect(chiffre('MCCXXXIV')).toBe(1234);
    expect(chiffre('IV')).toBe(4);
    expect(chiffre('DCCLXIV')).toBe(764);
});