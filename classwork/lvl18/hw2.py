# 2) დაწერეთ პროგრამა, რომელიც მომხმარებელს შემოატანინებს რიცხვს, და დაბეჭდავს 1-დან შემოტანილი რიცხვის ჩათვლით ყველა რიცხვის ნამრავლს(ფაქტორიალს)


nnumber = int(input("enter the number: "))
factorial = 1

for i in range(1, nnumber + 1):
    factorial *= i

print(factorial)
