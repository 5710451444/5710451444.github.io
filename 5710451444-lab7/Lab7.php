<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  
  <script type="text/javascript" src="tableExport/tableExport.js"></script>
  <script type="text/javascript" src="tableExport/jquery.base64.js"></script>
  
  <script type="text/javascript" src="tableExport/jspdf/jspdf.js"></script>
  <script type="text/javascript" src="tableExport/jspdf/libs/sprintf.js"></script>
  <script type="text/javascript" src="tableExport/jspdf/libs/base64.js"></script>
  
</head>

<body>
<script type="text/javascript">
$(document).ready(function(e) {
    $("#pdf").click(function(e){
		$("#mytable").tableExport({
			type:'pdf',
			escape: false
			});
	});
	$("#excel").click(function(e){
		$("#mytable").tableExport({
			type:'excel',
			escape: false
			});
	});
	$("#json").click(function(e){
		$("#mytable").tableExport({
			type:'json',
			escape: false
			});
	});
	$("#xml").click(function(e){
		$("#mytable").tableExport({
			type:'xml',
			escape: false
			});
	});
	
});
</script>

<?php
echo "<h1>JOIN ข้อ 21. รหัสลูกค้า ชื่อและนามสกุลลูกค้า ว่าไปดูอสังหาวันไหนบ้าง</h1>";
echo "<table id='mytable' style='border: solid 1px black;'>";
  echo "<thead><tr><th>Client no.</th><th>First name</th><th>Last name</th><th>View date</th></tr></thead>";

class TableRows extends RecursiveIteratorIterator {
     function __construct($it) {
         parent::__construct($it, self::LEAVES_ONLY);
     }

     function current() {
         return "<td style='width: 150px; border: 1px solid black;'>" . parent::current(). "</td>";
     }

     function beginChildren() {
         echo "<tr>";
     }

     function endChildren() {
         echo "</tr>" . "\n";
     }
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dreamhome";

try {
     $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     $stmt = $conn->prepare("SELECT client.clientno, client.fname, client.lname, viewing.viewdate FROM client INNER JOIN viewing ON client.clientno = viewing.clientno");
     $stmt->execute();

     // set the resulting array to associative
     $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);

     foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) {
         echo $v;
     }
}
catch(PDOException $e) {
     echo "Error: " . $e->getMessage();
}
$conn = null;
echo "</table>";
echo"<div class='dropdown'>
  <button class='btn btn-primary dropdown-toggle' type='button' data-toggle='dropdown'>SELECT FORMAT
  <span class='caret'></span></button>
  <ul class='dropdown-menu'>
    <li><a id='pdf' href='#'>PDF</a></li>
    <li><a id='excel' href='#'>EXCEL</a></li>
    <li><a id='json' href='#'>JSON</a></li>
	<li><a id='xml' href='#'>XML</a></li>
  </ul>
</div>";
?>
</body>
</html>
