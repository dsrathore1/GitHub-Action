package main

import "fmt"

func main() {
	fmt.Println("\n🎊 Welcome to Golang 🎊")

	var fruitList = []string{"Apple", "Mango", "Orange", "Guava"}

	fmt.Println("\nYour fruit list is :- ", fruitList)

	fmt.Print("\nYour dynamic array's element :- ")

	count := 5
	for i := 0; i < count; i++ {
		fmt.Print(2*i, " ")
	}

}
