
// filter method 
var myArray = [11,234,56,789,87,654,32,345,67,890,23,456]

var mainResult= myArray.filter(function (value){
    return value%2 == 1
})
console.log(mainResult)

// filter method 
var myArray = [11,234,56,789,87,654,32,345,67,890,23,456]

var mainResult= myArray.filter(function (value){
    return value >300
})
console.log(mainResult)

// custom filter method 

var spacialArray =[123,456,789,45,67,89,00,98,76,543,212,34,56,7,8,9]

    function myFunction(spacialArray,callback){
        var newArray = [ ]
        for (var i =0; i<spacialArray.length;i++){
            if (callback(spacialArray[i],i,spacialArray)){
                newArray.push(spacialArray[i])
            }
        }
        return newArray
    }

    // find Even number 
    var result = myFunction(spacialArray,function(value){
        return value % 2 == 0
    })
    console.log(result)
    // find Odd number 
    var result2 = myFunction(spacialArray,function(value){
        return value % 2 == 1
    })
    console.log(result2)
    // find > or < than number 

    var result3 = myFunction(spacialArray,function (value){
        return value >200
    })
    console.log(result3)











