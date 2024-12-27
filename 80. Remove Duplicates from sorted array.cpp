// 80. Remove Duplicates from sorted array ||
// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

#include <bits/stdc++.h>
using namespace std;
int removeDuplicates(vector<int> nums)
{
    if (nums.size() < 3)
    {
        return nums.size();
    }

    int i = 2;
    for (int j = 2; j < nums.size(); j++)
    {
        if (nums[j] != nums[i - 2])
        {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}
int main()
{
    vector<int> nums;
    int n, ele;
    cout << "Enter number of elements : ";
    cin >> n;
    cout << "Enter elements : " << endl;
    for (int i = 0; i < n; i++)
    {
        cin >> ele;
        nums.push_back(ele);
    }

    cout << "New size : " << removeDuplicates(nums) << endl;
}
