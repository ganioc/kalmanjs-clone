import { KalmanFilter} from "./kalman.mjs"

var kf= new KalmanFilter();
console.log(kf.filter(3));



var dataConstant = Array.apply(null, {length: dataSetSize}).map(function() {
    return 4;
});

  var noisyDataConstant = dataConstant.map(function(v) {
    return v + randn(0, 3);
});

