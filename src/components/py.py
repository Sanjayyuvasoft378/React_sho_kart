
def solve(s):
    for i in s.split():
        result=s.replace(i,i.capitalize())
    return result
s = "sanjay gupta"
result = solve(s)

