# hw1

# append() ამატებს ახალ ელემენტს სიის ბოლოში
# insert() ამატებს ელემენტს კონკრეტულ პოზიციაზე (ინდექსზე)
# pop() შლის ელემენტს სიის ბოლოდან (ან მითითებული ინდექსიდან) და აბრუნებს მას


# hw2

my_list = [10, 20, 30, 40]

print(len(my_list))

# hw3

numbers = []

for i in range(5):
    num = int(input("შეიყვანეთ რიცხვი: "))
    numbers.append(num)  
print(numbers)

# hw4

colors = ["red", "green", "blue", "yellow", "purple"]

colors.pop() 

print(colors)

# hw5

animals = ["dog", "cat", "elephant", "lion"]

animals.insert(1, "monkey")

print(animals)


# hw6

students = []

for i in range(3):
    name = input("შეიყვანეთ სტუდენტის სახელი: ")
    students.append(name)

students.insert(0, "Teacher")

students.pop()

print("სიის სიგრძე:", len(students))

print("საბოლოო სია:", students)





