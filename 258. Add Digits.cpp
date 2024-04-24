//Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
//Input: num = 38
//Output: 2
//Explanation: The process is
//38 --> 3 + 8 --> 11
//11 --> 1 + 1 --> 2 
//Since 2 has only one digit, return it.
#include <bits/stdc++.h>
using namespace std;

int addDigits(int num)
{
    int rem, temp;
    int sum = 0;

    if (num == 0)
    {
        return 0;
    }
    else
    {
        temp = num;
        while (temp != 0)
        {
            rem = temp % 10;
            sum = sum + rem;
            temp = temp / 10;
        }
        if (sum < 10)    // becz we need single digit
        {
            return sum;
        }
        else
        {
            return addDigits(sum);
        }
    }
}
int main()
{
    int num;
    cout << "Enter number : ";
    cin >> num;

    cout << addDigits(num);
}