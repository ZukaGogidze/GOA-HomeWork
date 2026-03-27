def add_numbers(a, b):
    result = a + b
    
    return result

sum_result = add_numbers(5, 3)


print(sum_result)




def multiply_list(numbers):
    product = 1 

    for num in numbers:
        product = product * num 

    return product


print(multiply_list([2, 3, 4]))



#4


def first_function(x):
    return x

def second_function(y):
    return y * 2

result = second_function(first_function(5))

print(result)