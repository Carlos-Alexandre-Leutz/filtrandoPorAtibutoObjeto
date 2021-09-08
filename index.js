Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );

// Example use:
var scores = {
    John: 2, Sarah: 3, Janet: 1
};
var filtered = Object.filter(scores, score => score > 1); 
console.log(filtered);
