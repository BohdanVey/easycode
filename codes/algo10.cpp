#include <iostream>
#include <stdio.h>
using namespace std;
int fact_pow (int n, int k) {
    int res = 0;
    while (n) {
        n /= k;
        res += n;
    }
    return res;
}
int main()
{
    int n,k;
cin>>n>>k;
cout<<fact_pow(n,k);
}
