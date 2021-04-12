var json = [{ "key1" : "val1", "key2" : "val2"},{ "key1" : "2val1", "key2" : "2val2"},{ "key1" : "3val1", "key2" : "3val2"}];

//console.log(json);
//console.log(json[0]);
//console.log(JSON.stringify(json));

console.log(json.filter(e => e.key1 == "val1"));