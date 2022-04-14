// In this challenge, the task is to debug the existing code 
// to successfully execute all provided test files.

// Given an array of n distinct integers, transform the array into a zig zag sequence 
// by permuting the array elements. A sequence will be called a zig zag sequence if 
// the first k elements in the sequence are in increasing order and the last k elements 
// are in decreasing order, where k=(n+1)/2. You need to find the lexicographically 
// smallest zig zag sequence of the given array.

// Original Code:
// #include <bits/stdc++.h>
// using namespace std;

// void findZigZagSequence(vector < int > a, int n){
//     sort(a.begin(), a.end());
//     int mid = (n + 1)/2;
//     swap(a[mid], a[n-1]);

//     int st = mid + 1;
//     int ed = n - 1;
//     while(st <= ed){
//         swap(a[st], a[ed]);
//         st = st + 1;
//         ed = ed + 1;
//     }
//     for(int i = 0; i < n; i++){
//         if(i > 0) cout << " ";
//         cout << a[i];
//     }
//     cout << endl;
// }

// int main() {
//     int n, x;
//     int test_cases;
//     cin >> test_cases;

//     for(int cs = 1; cs <= test_cases; cs++){
//         cin >> n;
//         vector < int > a;
//         for(int i = 0; i < n; i++){
//             cin >> x;
//             a.push_back(x);
//         }
//         findZigZagSequence(a, n);
//     }
// }

#include <bits/stdc++.h>
using namespace std;

void findZigZagSequence(vector < int > a, int n){
    sort(a.begin(), a.end());
    int mid = (n)/2;
    swap(a[mid], a[n-1]);

    int st = mid + 1;
    int ed = n - 2;
    while(st <= ed){
        swap(a[st], a[ed]);
        st = st + 1;
        ed = ed - 1;
    }
    for(int i = 0; i < n; i++){
        if(i > 0) cout << " ";
        cout << a[i];
    }
    cout << endl;
}

int main() {
    int n, x;
    int test_cases;
    cout << "Input number of tests: " << endl;
    cin >> test_cases;

    for(int cs = 1; cs <= test_cases; cs++){
    cout << "Input number of entries: " << endl;
        cin >> n;
        vector < int > a;
        for(int i = 0; i < n; i++){
            cout << "Input element: " << endl;
            x = i+1;
            cin >> x;
            a.push_back(x);
        }
        cout << "Output: " << endl;
        findZigZagSequence(a, n);
    }
}