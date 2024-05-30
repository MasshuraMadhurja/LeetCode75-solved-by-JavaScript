var compress = function (chars) {
    let s = chars[0];
    let count = 1;
    for (let i = 1; i < chars.length; i++) {
        if (chars[i] === chars[i - 1]) {
            count++;
        } else {
            if (count > 1) {
                s += count;
               
            }
            s += chars[i];
            count = 1;
            
        }
        if (i === chars.length - 1 && count > 1) {
            s += count;
        }
    }
     for (let i = 0; i < s.length; i++) {
         chars[i] = s[i];
    }
   return s.length;
};
