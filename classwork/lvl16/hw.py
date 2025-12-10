#2) დაბეჭდეთ რიცხვები 10-დან -10ის ჩათვლით

for i in range(10, -11, -1):
    print(i)

#3) დაბეჭდეთ ყველა კენტი რიცხვი 1-დან 100-ის ჩათვლით

for i in range(1, 101, 2):
    print(i)

#4) მომხმარებელს შემოატანინეთ პაროლი იქამდე სანამ ის არ გაუტოლდება "goa123"-ს, ამასთან ერთად მას უნდა ჰქონდეს მხოლოდ 3 მცდელობა სწორი პაროლის შესაყვანად. ყოველი არასწორი მცდელობისას დაუბეჭეთ "Password is incorrect! Try again", ასევე დაუბეჭდეთ ის თუ რამდენი მცდელობა(მხოლოდ რიცხვი არა, ტექსტი გასაგებად). if და else გამოყტენების გარეშე


password = "goa123"
attempts = 3

while attempts > 0:
    user_input = input("Enter password: ")

    correct = (user_input == password) * 1

    while correct:
        print("Password is correct")
        break

    attempts = attempts - (1 - correct)

    while 1 - correct:
        print("Password is incorrect! Try again")
        print("Attempts left:", attempts)
        break

    while correct:
        break





