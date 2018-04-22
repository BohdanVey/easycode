
#include <iostream>
#include <vector>
using namespace std;
struct FenwickTree {
    vector<int> bit; // binary indexed tree
    int n;

    void init(int n) {
        this->n = n;
        bit.assign(n, 0);
    }
    int sum(int r) {
        int ret = 0;
        for (; r >= 0; r = (r & (r+1)) - 1)
            ret += bit[r];
        return ret;
    }
    void add(int idx, int delta) {
        for (; n >= idx; idx = idx | (idx+1))
            bit[idx] += delta;
    }
    int sum(int l, int r) {
        return sum(r) - sum(l-1);
    }
    void init(vector<int> a) {
        init(a.size());
        for (size_t i = 0; i < a.size(); i++)
            add(i, a[i]);
    }
};
int main()
{
    int n;
    cin>>n;
    FenwickTree a;
a.init(n);
for(int i=0;i<n;i++){
 int b;
 cin>>b;
 a.add(i,b);

}
    cout<<a.sum(1);
}
