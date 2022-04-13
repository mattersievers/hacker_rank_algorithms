// In this challenge, the task is to debug the existing code to successfully execute all provided test files. (At most 3 lines may be edited.)
// Original:
// string strings_xor(string s, string t) {

//     string res = "";
//     for(int i = 0; i < s.size(); i++) {
//         if(s[i] = t[i])
//             res = '0';
//         else
//             res = '1';
//     }

//     return res;
// }
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

string strings_xor(string s, string t) {

    string res = "";
    for(int i = 0; i < s.size(); i++) {
        if(s[i] == t[i])
            res += '0';
        else
            res += '1';
    }

    return res;
}

int main() {
    string s, t;
    s="10101";
    t="00101";
    cout << "The Sample Test Case of 10101 and 00101 yields " << strings_xor(s, t) << endl;
    cout << "Please input first string:  " << endl;
    cin >> s;
    cout << "Please input second string:  " <<  endl;
    cin >> t;
    cout << "Resulting xor string: " << strings_xor(s, t) << endl;
    return 0;
}

