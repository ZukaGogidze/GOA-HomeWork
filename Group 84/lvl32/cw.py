# 1) შექმენით რამდენიმე ელემენტიანი სია და დაბეჭდეთ ამ სიის სიგრძე შესაბამისი ფუნქციის მეშვეობით

# 2) შექმენით სახელების სია (minimum 5 elements), მომხმარებელს input ფუნქციის მეშვეობით შემოატანინეთ სახელი და ჩაამატეთ მომხმარებლის შემოტანილი მნიშვნელობა სიის ბოლოში. გამოიყენეთ შესაბამისი ფუნქცია.

# 3) insert ფუნქციის მეშვეობით ჩაამატეთ 3-ე index-ზე ახალი სახელი "Tarieli"

# 4) pop ფუნქციის მეშვეობით სიაში წაშალეთ მე-4-ე index-ზე მყოფი მნიშვნელობა სიიდან

# 5) remove ფუნქციის მეშვეობით წაშალეთ 1 ნებისმიერი სახელი თქვენი წინასწარ გამზადებული სიიდან.

# 6) მომხმარებელს შემოატანინეთ სახელი და შეამოწმეთ თუ რომელ index-ზე დგას ელემენტი თუა სიაში რა თქმა უნდა, თუ არაა სიაში მაშინ დაუბეჭდეთ რომ "not index in list"

# 7) შექმენით 5 რიცხვიანი ელემენტიანი სია. for ციკლის მეშვეობით მომხმარებელს შემოატანინეთ კიდევ 5 რიცხვი და თითოეული შემოტანილი რიცხვი .append ფუნქციის მეშვეობით ჩაამატეთ არსებულ სიაში. საბოლოოდ დაბეჭდეთ ეს სია.




names = ["Zuka", 80, "Davit"]
print(len(names))


names = ["Ana", "Giorgi", "Nino", "Luka", "Mariam"]
user_name = input("Enter a name: ")
names.append(user_name)
print(names)


names.insert(3, "Tarieli")
print(names)


names.pop(4)
print(names)



names.remove("Ana")
print(names)



search_name = input("Enter a name to search: ")
if search_name in names:
    print(names.index(search_name))
else:
    print("not index in list")



nums = [1, 2, 3, 4, 5]

for i in range(5):
    num = int(input("Enter a number: "))
    nums.append(num)

print(nums)