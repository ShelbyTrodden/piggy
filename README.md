Describe: vowelFinder();

Test: “Identify when a word begins with a vowel”
Code vowelFinder(“ants”)
Expected output true

test: "concat "way" to the end of a word that starts with a vowel"
code vowelFinder("ants")
Expected output "antsway"

Describe queenFinder();

Test: "identify when a word starts with "qu""
code queenFinder("quinn")
expected output: true

Test: "if a word starts with "qu" remove qu and concat "quay" "
code queenFinder("quinn")
expected output: "innquay"

Describe consFinder();

test "identify index of first vowel in a word"
code consFinder("school")
expected output: [3]

test "