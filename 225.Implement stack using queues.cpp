#include <bits/stdc++.h>
using namespace std;
class MyStack
{
public:
    MyStack()
    {
    }
    
    queue<int> q;
    void push(int x)
    {
        q.push(x);
    }

    int pop()
    {
        int n = q.size();
        while(n>1)
        {
            q.push(q.front());
            q.pop();
        }
        int top = q.front();
        q.pop();
        return top;
    }

    int top()
    {
        int n = q.size();
        while(n>1)
        {
            q.push(q.front());
            q.pop();
        }
        int top = q.front();
        q.pop();
        q.push(top);
        return top;
    }

    bool empty()
    {
        return q.empty();
    }
};