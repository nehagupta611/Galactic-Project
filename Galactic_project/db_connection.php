<?php
$host = 'localhost';
$db_name = 'root@localhost';
$username = 'root';
$password = 'root';

// Create a database connection
$connection = new mysqli($host, $username, $password, $db_name);

// Check the connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}
?>
