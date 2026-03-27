nums = [1,2,3,4,5,6,7,8,9,10]

for i in range(11,21):
    nums.append(i)

for i in range(5):
    nums.pop()

print(nums)


nums = [1,2,3,4,5,6,7,8,9,10]

for i in range(11,21):
    nums.append(i)

for i in range(1,6):
    nums.remove(i)

print(nums)


nums = [1,2,3,4,5,6,7,8,9,10]

nums.insert(5, 100)
nums.insert(6, 200)

nums.remove(1)
nums.remove(2)
nums.remove(3)
nums.remove(4)
nums.remove(5)

for i in range(5):
    nums.pop()

print(nums)



colors = ["red", "green", "blue", "yellow", "purple"]

colors.pop()

print(colors)


nums = [10, 20, 30, 40]

nums.append(50)

print(nums)