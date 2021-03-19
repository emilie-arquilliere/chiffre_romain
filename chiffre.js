//on créé une fonction avec en entrée un paramètre
//on vérifie si le paramètre est une string ou un number
//si c'est une string : on convertie chiffre romain en chiffre arabe
    //on vérifie si les lettres (dont les espaces et caractères spéciaux) sont compatibles aux chiffres romains
    //si certaines lettres ne correspondent pas à des chiffres romains
        //on retourne une erreur
    //sinon on convertie en chiffre arabe
        //


//si c'est un number : on convertie chiffre arabe en chiffre romain
    //on passe le number en string pour récupérer le nombre de caractère et donc 
    //on détermine la taille du nombre pour déterminer les unités
    //une fois qu'on connait son unité, on gère par catégories d'unités
        //on commence par la catégorie la plus grande
        //dans chaque catégorie on gère élément par élément en fonction de son unité (ex: si c'est les millier on remplace les I par des M)

function chiffre(val){
    if(typeof val === 'string'){
        const reg = new RegExp(/[^IVXLCDM]/g);
        if(val.match(reg) !== null){
            return 'La chaine comprend des caractères différents des chiffres romains'
        }else{
            var i = 0, n = 0;
            val = val.toUpperCase();     
            // Calcul les milliers
            while (val.charAt(i) == "M") n+=1000, i++;
            
            // Calcul les centaines
            if(val.substr(i,2) == "CM") n+=900, i+=2; else 
            if(val.substr(i,2) == "CD") n+=400, i+=2; 
            else {
            if(val.charAt(i) == "D") n+= 500, i++;       
            while(val.charAt(i) == "C") n+=100, i++;
            }
            
            // Calcul les dizaines
            if(val.substr(i,2) == "XC") n+=90, i += 2; else 
            if(val.substr(i,2) == "XL") n+=40, i += 2; 
            else {
            if(val.charAt(i) == "L") n+=50, i++;  
            while (val.charAt(i) == "X") n+=10, i++;
            }
            
            // Calcul les unités
            if(val.substr(i,2) == "IX") n += 9, i+=2; else 
            if(val.substr(i,2) == "IV") n += 4, i += 2; 
            else {
            if(val.charAt(i) == "V") n += 5, i++; 
            while(val.charAt(i) == "I") n++, i++;
            }
            return n;
        }
    }
    if(Number.isInteger(val)){
        if(val>3999 || val < 1){
            return "Le chiffre n'est pas compris entre 1 et 3999 inclus."
        }else{
            const unite = {1: "I", 2: "II", 3: "III", 4:"IV", 5:"V",6:"VI",7:"VII", 8:"VIII",9:"IX"};
            const diz = {1: "X", 2: "XX", 3: "XXX", 4:"XL", 5:"L",6:"LX",7:"LXX", 8:"LXXX",9:"XC"};
            const cent = {1: "C", 2: "CC", 3: "CCC", 4:"CD", 5:"D",6:"DC",7:"DCC", 8:"DCCC",9:"CM"};
            const mil = {1: "M", 2: "MM", 3: "MMM"};
            let final = '';
            final += Math.trunc((val%10000)/1000) > 0 ? mil[Math.trunc((val%10000)/1000)] : '';
            final += Math.trunc((val%1000)/100) > 0 ? cent[Math.trunc((val%1000)/100)] : '';
            final += Math.trunc((val%100)/10) > 0 ? diz[Math.trunc((val%100)/10)] : '';
            final += val%10 > 0 ? unite[val%10] : '';

            return final;
        }
    }
}


module.exports = chiffre