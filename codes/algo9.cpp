#include <iostream>
#include <stdio.h>
int gcd (int a, int b, int & x, int & y) {
    if (a == 0) {
        x = 0;
        y = 1;
        return b;
    }
    int x1, y1;
    int d = gcd (b % a, a, x1, y1);
    x = y1 - (b / a) * x1;
    y = x1;
    return d;
}
int main()
{
    int a=0,b=0;
    int c,d;
    cin>>c>>d;
std::cout<<gcd(c,d,a,b);
}