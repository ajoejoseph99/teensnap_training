// This function finds common user IDs between two lists.
// It is intentionally slow and inefficient.
function findCommonUsers(listA, listB) {
    let commonUsers = [];

    // Loop through every item in the first list
    for (let i = 0; i < listA.length; i++) {
        
        // Loop through every item in the second list for EACH item in the first
        for (let j = 0; j < listB.length; j++) {
            
            // Check for match
            if (listA[i] === listB[j]) {
                
                // Check if we already added them to avoid duplicates
                if (!commonUsers.includes(listA[i])) {
                    commonUsers.push(listA[i]);
                }
            }
        }
    }

    return commonUsers;
}

// Imagine these lists had 100,000 items each... 
// This would take hours to finish!
