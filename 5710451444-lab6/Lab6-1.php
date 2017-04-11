<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webtech";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$cusid = $citizen = $first = $last = "";
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		$cusid = $_POST["cusId"];
		$citizen = $_POST["citiId"];
		$first = $_POST["fname"];
		$last = $_POST["lname"];
	}
    $sql = "INSERT INTO Customers (CustomersID, CitizenID, Firstname, Lastname)
    VALUES ('$cusid', '$citizen', '$first', '$last')";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "New record created successfully";
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?>

<body>
<h1>FORM</h1>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
<table width="200" border="0">
  <tr>
    <td>CustomerID</td>
    <td><input type="text" name="cusId"/></td>
    <td>CitizenID</td>
    <td><input type="text" name="citiId"/></td>
  </tr>
  <tr>
    <td>Firstname</td>
    <td><input type="text" name="fname"/></td>
    <td>Lastname</td>
    <td><input type="text" name="lname"/></td>
  </tr>
  <tr>
  	<td><input type="submit" id="submit" value="Submit"/></td>
  </tr>
</table>
</form>
</body>
</html>