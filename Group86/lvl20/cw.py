# numbers_sum = 0

# for i in range(5):
#     num = int(input("Enter the number: "))
#     numbers_sum += num

# print("the numbers sum is:", numbers_sum)

# if numbers_sum % 2 == 0:
#     print("even")
# else:
#     print("odd")






# while True:
#     num = int(input("enter the number: "))
    
#     if num % 5 == 0 and num % 7 == 0:
#         print("your num entered condition:", num)
#         break
#     else:
#         print("This number is not a multiple of 5 and 7")




# 1) ლეპტოპი - 1500ლ # 
# 2) ტელეფონი - 1000ლ # 
# 3) ფეხსაცმელი - 100ლ # 
# 4) პერანგი - 50ლ # 
# 5) რვეული - 5ლ


balance = float(input("შეიყვანეთ თქვენი ბალანსი: "))

if balance >= 1500:
    print("თქვენ შეგიძლიათ იყიდოთ ლეპტოპი")
elif balance >= 1000:
    print("თქვენ შეგიძლიათ იყიდოთ ტელეფონი")
elif balance >= 100:
    print("თქვენ შეგიძლიათ იყიდოთ ფეხსაცმელი")
elif balance >= 50:
    print("თქვენ შეგიძლიათ იყიდოთ პერანგი")
elif balance >= 5:
    print("თქვენ შეგიძლიათ იყიდოთ რვეული")
else:
    print("სამწუხაროდ, თქვენ ვერ იყიდით")





num = float(input("შეიყვანეთ რიცხვი: "))

if num > 0:
    print("რიცხვი დადებითია")
elif num < 0:
    print("რიცხვი უარყოფითია")
else:
    print("ეს რიცხვი ნულს უდრის")







