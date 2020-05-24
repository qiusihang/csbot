f = open("task/image/ground.csv")

c = 0
print("[",end="")
for line in f:
    c += 1
    data = line.split(",")
    print("\""+data[1].replace("\n","\""),end="")
    if c == 50: break
    print(end=",")
print("]")
