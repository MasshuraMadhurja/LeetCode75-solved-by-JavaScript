var isSubsequence = function(s, t) {
    let i = 0; // Pointer for s

    for (let j = 0; j < t.length; j++) {
        if (i < s.length && s[i] === t[j]) {
            i++;
        }
    }

    return i === s.length;
};
