num = int(input("Enter Number: "))
if num >= 50:
    print(num * 5)
else:
    print(num ** 2)






password = "goa123"
password = int(input("Enter Your password"))
if password == "goa123":
    print("Password is correct")
else:
    print("Password is inccorect")




num = int(input("Enter a number: "))

if num >= 1:
    total = 0
    for i in range(1, num + 1):
        total += i
    print(":", total)
else:
    print("Please enter a number that is 1 or greater")


