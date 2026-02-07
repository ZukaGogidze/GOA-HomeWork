#1
name = input("Enter your name: ")
print(name.upper())

#2
name = input("Enter your name: ")
print(name.lower())

#3
name = input("Enter your name: ")
print(name.capitalize())

#4
word = "example" 
symbol = input("Enter a symbol: ")

if symbol in word:
    print(f"{symbol} - {word.index(symbol)}")
else:
    print("This symbol is not in word")

#5
my_name = "YourName"
print(len(my_name))


#6
name = input("Enter your name: ")
print(name.startswith())


#7
name = input("Enter your name: ")
print(name.endswith())





