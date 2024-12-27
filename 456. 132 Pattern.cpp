#include <bits/stdc++.h>
using namespace std;
bool find132pattern(vector<int> &nums)
{
    int n = nums.size();
    vector<int> min_arr(n);
    min_arr[0] = nums[0];
    for (int i = 1; i < n; i++)
    {
        min_arr[i] = min(nums[i], min_arr[i - 1]);
    }

    stack<int> st;
    for (int j = n - 1; j >= 0; j--)
    {
        while (!st.empty() && st.top() <= min_arr[j])
        {
            st.pop();
        }
        if (!st.empty() && st.top() < nums[j])
        {
            return true;
        }
        st.push(nums[j]);
    }
    return false;
}

int main()
{
    vector<int> nums;
    int n, ele;
    cout << "Enter number of elements : ";
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        cin >> ele;
        nums.push_back(ele);
    }

    bool result = find132pattern(nums);
    cout << "Output : " << result;
}