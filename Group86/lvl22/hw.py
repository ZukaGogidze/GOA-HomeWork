# 2) გაიმეორეთ ნასწავლი მასალა: for loop, while loop, if/elif/else და მათი კომბინაციით გააკეთეთ რამოდენიმე მარტივი მაგალითი.გამოიყენეთ ასევე ჩაშენებული if-ები

for i in range(1, 20):
    print(i)


for i in range(5, 200, 5):
    print(i)

num = 1

while num <= 5:
    print(num)
    num += 1




number = 10

if number > 0:
    print("number is positive")
    if number %2 == 0:
        print("even")
    else:
        print("odd")
else:
    print("ან უარყოფითია ან ნულია")
