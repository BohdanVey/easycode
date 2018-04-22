
#include <iostream>
#include <string>
#include<vector>
using namespace std;
vector<int> zfunctiontrivial(string s) {
    int n = (int) s.length();
    vector<int> z(n);
    for (int i = 1; i < n; ++i)
        while (i + z[i] < n && s[z[i]] == s[i + z[i]])
            ++z[i];
    return z;
}
int main()
{
 string s;
 cin>>s;
vector<int>a=zfunctiontrivial(s);
for(int i=0;i<a.size();i++){
 cout<<a[i]<<endl;
}
}
