// 1. Given a list of integers, return a tuple containing the sum of all odd values and the product of all even values.
//    Ex: [4,2,5,7,3,6,9] => (24, 48)

function makeTuple(array_list) {
  oddSum=0,evenProd=1;
  for (let i = 0; i<array_list.length; i++){
    if (array_list[i]%2==0){
      evenProd = evenProd*array_list[i];
    }
    else{
      oddSum+=array_list[i];
    }
  }
  return[oddSum, evenProd];
}


// 2. Given a string written in kebab-case, convert it to SCREAMING_SNAKE_CASE
//    Ex: "electricity-is-really-just-organized-lightning" => "ELECTRICITY_IS_REALLY_JUST_ORGANIZED_LIGHTNING"
function kebabToScreamingSnakeCase(str) {
    let output = "";
    for (const char of str) {
      if (char == "-") {
        output += "_";
      } else {
        output += char.toUpperCase();
      }
    }
    console.log(output);
    return output;
}

// 3. A product can be made of multiple parts, which themselves can be made of more parts. Given a final product and a dictionary of key-value pairs, where the product is the key and a list of parts are the values, write a function to return the count of each part that is needed to construct the final product.

// parts = {
// 'A': ['B', 'B', 'C'],
// 'B': [],
// 'C': ['D','E','F'],
// 'D': [],
// 'E': ['B','D'],
// 'F': []
// }

// Ex: 'A' => {'B': 3, 'D': 2, 'F': 1}
// Ex: 'F' => {'F': 1}

// foreach part add count of required parts. recurse through adjacency lists and add to queue else add to results dictionary if dictionary list is empty
export function sum(a, b) {
  return a + b;
}

function requiredProductParts (productName, parts){
    q = []
    q.add(productName)
    requiredParts = {}
    while(q){
        curr = q.pop()
        console.log(curr)
        console.log(parts))
        if(parts[curr].length == 0){
            if(requiredParts[curr]){
            requiredParts[curr] += 1
            }
            else{
                requiredParts[curr] = 1
            }
        }
        else{
            parts[curr].forEach(part => q.add(part))
        }
    }
    console.log(requiredParts));
    // return requiredParts
}

const parts = {
'A': ['B', 'B', 'C'],
'B': [],
'C': ['D','E','F'],
'D': [],
'E': ['B','D'],
'F': []
}

requiredProductPartsRecursive('A', parts);
requiredProductPartsRecursive('F', parts);
// 4. Write the recursive version of the previous problem. If you have already done so, write the iterative version.

function requiredProductPartsRecursive (productName, parts){
    requiredParts = {}
    function helper(partName) {
        if(parts[partName].length == 0){
            requiredParts[partName] += 1}
        else{
            parts[partName].forEach(part => helper(part))
        }
    }
    helper(productName)
    console.log(requiredParts));
    // return requiredParts
}

requiredProductPartsRecursive('A', parts);
requiredProductPartsRecursive('F', parts);

// 1. Given a list of integers, return a tuple containing the sum of all odd values and the product of all even values.
//    Ex: [4,2,5,7,3,6,9] => (24, 48)

// function makeTupleRecursive(array_list, i, oddSum, evenProd) {
//   if (i<0){
//     Pair<int, int> outputPair = Pair.with(oddSum, evenProd);
//     return(outputPair);
//   }
//   if (array_list[i]%2==0){
//     evenProd = evenProd*array_list[i];
//   }
//   else{
//     oddSum+=array_list[i];
//   } 
//   makeTupleRecursive(array_list, i-1, oddSum, evenProd)
// }

// // 2. Given a string written in kebab-case, convert it to SCREAMING_SNAKE_CASE
// //    Ex: "electricity-is-really-just-organized-lightning" => "ELECTRICITY_IS_REALLY_JUST_ORGANIZED_LIGHTNING"

// function kebabToScreamingSnakeCaseRecursive(str){
//   var output =str.charAt(0);

//   if(str.length()<1){
//     return str;
//   }
//   if (str.charAt(0)=='-'){
//     output = '_';
//     str = output + str.substring(1);
//   }
//   else{
//     output = Character.toUpperCase(str.charAt(0));
//     str = output + str.substring(1);
//   }
  
//   return output + kebabToScreamingSnakeCaseRecursive(str.substring(1));
  
// }

