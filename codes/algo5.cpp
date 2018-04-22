#include <iostream>
#include <vector>
using namespace std;
void eratosfen(int n){
	vector< char > prime (n+1,true);
	prime[0] = prime[1] = false;
	for (int i=2; n>i; ++i)
		if (prime[i])
				for (int j=i*i; n>j; j+=i)
					prime[j] = false;
	if(prime[n]){
		printf("true");
	}
	else{
		printf("false");
	}
}
int main()
{
    int n;
cin>>n;
eratosfen(n);
}
