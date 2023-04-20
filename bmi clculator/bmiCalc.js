// function (weight,height){
//     var bmi = weight/ (height * height);
//     return bmi ;
// }


function (weight,height) {
    var bmi = weight / Math.pow(height,2);
    return bmi ;
}