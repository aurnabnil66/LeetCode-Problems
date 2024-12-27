#include<bits/stdc++.h>
using namespace std;
vector<vector<int>> graph;   // [0,3],[1,2],[0,2] each pair is an indirected graph
vector<bool> visited;
void dfs(int i, vector<int>&index, vector<char>&letters, string s)
{
    visited[i] = true;
    index.push_back(i);
    letters.push_back(s[i]);
    for(int x : graph[i])
    {
        if (!visited[x])
        {
            dfs(x,index,letters,s);
        }
        
    }

}

string smallestStringWithSwaps(string s, vector<vector<int>>& pairs) 
{
    int n = s.size();
    graph.resize(n);
    visited.resize(n,false);

    for(auto x : pairs)
    {
        graph[x[0]].push_back(x[1]);
        graph[x[1]].push_back(x[0]);
    }

    for (int i = 0; i < n; i++)
    {
        vector<int> index; 
        vector<char> letters;
        if (!visited[i])
        {
            dfs(i,index,letters,s);
        }
        sort(index.begin(), index.end());
        sort(letters.begin(), letters.end());

        for (int i = 0; i < index.size(); i++)
        {
            s[index[i]] = letters[i];
        }
        
    }
    return s;
        
}

int main()
{
    string str;
    int n, start_point, end_point;
    vector<vector<int>> pairs;
    cout << "Enter string : ";
    cin >> str;

    cout << "Enter number of pairs : ";
    cin >> n;
    cout << "Enter Pairs : " << endl;
     for (int i = 0; i < n; i++)
    {
        cout << "Enter start point : ";
        cin >> start_point;
        cout << "Enter end point : ";
        cin >> end_point;

        vector<int> px;
        px.push_back(start_point);
        px.push_back(end_point);
        pairs.push_back(px);
    }

    string result = smallestStringWithSwaps(str, pairs);
    cout << result;
}