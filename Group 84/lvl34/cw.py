def greet(name=None):
    if name is None:
        print("Hello World!")
    else:
        print(f"Hello {name}")

greet()          
greet("Nika")    


def double(number):
    return pow(number, 2)
print(double(5))  

def checkOdd(number):
    return "ლუწი" if number % 2 == 0 else "კენტი"
print(checkOdd(7))    

def BMI(height, weight):
    bmi = weight / (height * height)
    return round(bmi, 2)
print(BMI(1.75, 70))  


