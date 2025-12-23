#3) შექმენი ერთი ცვლადი სახელად secret და მომხმარებელს შემოატაინე რაიმე რიცხვი და სანამ მომხმარებელის მიერ შემოტანილი რიცხვი არგაუტოლდება შენსას 
#

secret = 10

num = int(input("guess the number: "))

while num != secret:
    num = int(input("inccorect"))

print("correct")