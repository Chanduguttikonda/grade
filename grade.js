//finding the student grade

function getResult() {
    console.log("getResult function called");
    // Get the input values
    var rno = document.getElementById("rno").value;
    var fna = document.getElementById("fna").value;
    var html = parseInt(document.getElementById("html").value);
    var css = parseInt(document.getElementById("css").value);
    var js = parseInt(document.getElementById("js").value);
    var bs = parseInt(document.getElementById("bs").value);
  
    // Calculate the total marks
    var total = html + css + js + bs;
  
    // Calculate the average marks
    var average = total / 4;
  
    // Calculate the grade
    var grade;
    if (average >= 90) {
      grade = "A";
    } else if (average >= 80) {
      grade = "B";
    } else if (average >= 70) {
      grade = "C";
    } else if (average >= 60) {
      grade = "D";
    } else {
      grade = "F";
    }
  
    // Display the results
    document.getElementById("total").innerHTML = "Total: " + total;
    document.getElementById("average").innerHTML = "Average: " + average.toFixed(2);
    document.getElementById("grade").innerHTML = "Grade: " + grade;
  }