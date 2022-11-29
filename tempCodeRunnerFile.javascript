a = Range[45];
b = [2, 19, 32, 21, 5, 31, 43];

b = Sort[b];
For[i = 1, i <= 200000000, i = i + 1,
 If[Sort[RandomSample[a, 7]] == b, Print[i]]]