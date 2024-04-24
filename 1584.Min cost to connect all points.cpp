#include <bits/stdc++.h>
using namespace std;
int distance(vector<int> &point1, vector<int> &point2)
{
    return abs(point1[0] - point2[0]) + abs(point1[1] - point2[1]);
}
int minCostConnectPoints(vector<vector<int>> &points)
{
    int n = points.size();
    vector<int> visited(n, 0);
    vector<int> minCost(n, INT_MAX);
    int current_Point = 0;
    minCost[0] = 0;
    int answer = 0;

    while (current_Point >= 0)
    {
        visited[current_Point] = 1;
        int next_Point = -1;
        int min_current = INT_MAX;
        for (int i = 0; i < n; i++)
        {
            if (visited[i] || current_Point == i)
            {
                continue;
            }
            minCost[i] = min(distance(points[current_Point], points[i]), minCost[i]);
            if (minCost[i] < min_current)
            {
                min_current = minCost[i];
                next_Point = i;
            }
        }
        if (min_current == INT_MAX)
        {
            answer += 0;
        }
        else
        {
            answer += min_current;
        }
        current_Point = next_Point;
    }
    return answer;
}

int main()
{
    vector<vector<int>> points;
    int n, start_point, end_point;
    cout << "Enter number of items : ";
    cin >> n;

    for (int i = 0; i < n; i++)
    {
        cout << "Enter start point : ";
        cin >> start_point;
        cout << "Enter end point : ";
        cin >> end_point;

        vector<int> px;
        px.push_back(start_point);
        px.push_back(end_point);
        points.push_back(px);
    }
    int result = minCostConnectPoints(points);
    cout << "Minimum Cost : " << result;

    return 0;
}