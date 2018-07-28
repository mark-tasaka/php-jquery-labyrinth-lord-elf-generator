/*Ability Score Prime Requisite XP Bonus/Penality*/
/*Elf*/

function primeReq(strength, intelligence)
{
    let message = "";
    
    if((strength >= 13) && (intelligence >= 13 && intelligence <=15))
        {
            message = "+5% Experience Point Adjustment (Prime Requisite)";
        }
    else if((strength >= 13) && (intelligence >= 16))
        {
            message = "+10% Experience Point Adjustment (Prime Requisite)";
        }
    
    return message;
}


function secondAttack(level)
{
    let message = "";
    
    if(level === 15)
        {
            message = "Fighter has 2 attacks per round.";
        }
    
    return message;
}