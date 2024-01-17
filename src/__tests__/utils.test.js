// Your tests here
import { isPalindrome } from "../utils"

describe("isPalindrome", () => {
    test("tests if word is the same front to back", () => {
        const word = ""
        const bool = isPalindrome(word)
        expect(bool).toBe(false)
    })

    test("tests if word is the same front to back", () => {
        const word = "raCecaR"
        const bool = isPalindrome(word)
        expect(bool).toBe(true)
    })

    test("tests if word is the same front to back", () => {
        const word = "raCecaR532"
        const bool = isPalindrome(word)
        expect(bool).toBe(false)
    })
})