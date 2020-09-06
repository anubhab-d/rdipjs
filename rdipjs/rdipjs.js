function dis(val)
         {
             document.getElementById("result").value+=val
         }

         function solve()
         {
             let x = document.getElementById("result").value
             let y = eval(x)
             document.getElementById("result").value = y
         }

         function clr()
         {
             document.getElementById("result").value = ""
         }


         function myFunction() {
           var x;

           x = document.getElementById("name").value;
           if (isNaN(x)) {
             return true
           } else {
             document.getElementById("demo").innerHTML = "Name must be with letters";
             return false
           }

         }


         function checkPalindrome() {
           var revStr = "";
           var str = document.getElementById("str").value;
           var i = str.length;
           for (var j = i; j >= 0; j--) {
             revStr = revStr + str.charAt(j);
           }
           if (str == revStr) {
             alert("The entry is Palindrome");
           } else {
             alert("The entry is not a Palindrome");
           }
         }
