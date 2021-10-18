# Part 2
1. At line 12, "3" is printed because we declare a var i = 0 and incremented it 3 times before breaking out of the for loop. It maintains the value at line 12 and does not go out of scope since it was declare using var.

2. At line 13, "150" is printed because the last iteration of the loop sets var discountedPrice = prices[2] * (1 - 0.5) which calculates to 150. It maintains the value at line 13 and does not go out of scope since it was declare using var.

3. At line 14, "150" is printed because the last iteration of the loop sets finalPrice to 150 and does not go out of scope by line 14 since it was declared using var.

4. The function discountPrices returns [50,100,150] since it takes each element in the input array [100,200,300] and applies a 0.5 discount to each elements before pushing it to an array, finalPrice, to return.

5. At line 12, the code results in ReferenceError: since variable i was declared using let, it has a scope limited to the forloop, so it isn't defined at line 12 which is outside.

6. At line 13, the code results in ReferenceError: since variable discountedPrice was declared using let, it has a scope limited to the for loop block, isn't defined at line 13 which is outside.

7. At line 14, "150" is printed because we declared finalPrice was declared using let in the function body, so line 14 is still within scope of the variable.

8. The function returns [50,100,150] because the function has an input of [100,200,300] and will calculate the discounted price of each element. It will then calculate the finalPrice and then push that value to the array discounted which was declared earlier in the function body with let to be returned.

9. At line 11, the code results in ReferenceError: since variable i was declared with let, it has a scope limited to the forloop, so it isn't defined at line 12 which is outside.

10. At line 12, "3" is printed since length was declared using const at the beginning of the function body and is still defined at line 12. The value 3 comes from the amount of elements within the array prices which is 3.

11. The function returns [50,100,150] because the for loop calculates each discounted price and pushes it to the array discounted which was declared using const. The function avoids a TypeError since the variable was not reassigned any values.

12. 
    A. student.name;
    B. student["Grad year"];
    C. student.greeting();
    D. student["Favorite Teacher"];
    E. student.courseLoad[0];

13. 
    A. 32 since '3' is a string and 2 is concatenated
    B. 1 since '3' is converted to 
    C. 3 since null is considered 0
    D. 3null since '3' is a string and null is concatenated
    E. 4 since true is considered 1 via boolean value
    F. 0 since false and null are both considered 0
    G. 3undefined since '3' is a string and undefined is concatenated
    H. NaN since undefined is considered NaN and the 3 - NaN results in NaN

14. 
    A. True since '2' is converted to a value of 2 which is greater than 1
    B. False since both '2' and '12' are considered strings and only compares the first digit. Since '1' is greater than '2' it returns false.
    C. True since '2' is converted to a value of 2 and == allows for type conversion. 2 == 2 is true.
    D. False since === is strict equality and will return false since they are not the same type.
    E. False since == allows true to be considered 1 but 1 does not equal 2 and is false.
    F. True since Boolean(2) returns true boolean and since both true and boolean(2) are the same type, === will return true.

15. The difference between the == and === operators is that == allows for type conversion before comparison while === is a strict equality that requires the two operands to be of the same type.

16. See part2-question16.js

17. 
    Call function with modifyArray([1,2,3], doSomething)
    Loop through each element in the arry and call function doSomething() passing in that element
    doSomething() doubles whatever is passed in
    The result of doSomething is passed into newArr
    So each element of [1,2,3] is doubled to [2,4,6]
    The final result is [2,4,6]

18. See part2-question18.js

19. The code will print "1 4 3 2" (each number is on a new line). 
    1. console.log(1) prints 1
    2. console.log(2) is delayed by 1000
    3. console.log(3) is delayed by 0
    4. console.log(4) prints 4
    5. console.log(3) prints 3
    6. console.log(2) prints 2