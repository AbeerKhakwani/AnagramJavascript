describe('anagramChecker', function() {
    it("checks to see if one letter word matches", function() {
        expect(anagram("a","a")).to.equal("match");
    });

    it("checks to see if 2 letter word matches", function() {
        expect(anagram("ab","ab")).to.equal("match");
    });
    it("checks to see if 2 letter word does not matches", function() {
        expect(anagram("ab","ac")).to.equal("Nope");
    });
    it("checks to see if 2 words match the original word", function() {
        expect(anagram("ab","ac ab")).to.equal("ab");
    });
    it("checks to see if word in a diffrent order matchs the original word", function() {
        expect(anagram("ab","ba")).to.equal("ab");
    });

});
