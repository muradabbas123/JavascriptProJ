const input = document.getElementById('input');

function palindrome(str){
 return str.split("").reverse().join("")
}

function check(){

  const value = input.value
  let lowerCaseValue = value.toLowerCase()
  const reversed = palindrome(lowerCaseValue)

  if (lowerCaseValue === reversed) {
      alert(reversed +" is a palindrome")
  }

else {
  alert("not a palindrom!!!!")
}

input.value =""
}