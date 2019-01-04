<?php

//get data from form
$n = $_POST['name'];
$g = $_POST['gender'];

//echo $n .'<br>'.$g;

//1. get contents
$d = file_get_contents('ppl.json');
//2. manipulate data, turn into php data
$d = json_decode($d, true);

$i = count($d);
++$i;

$a = [
    "id" => $i,
    "name" => $n,
    "gender" => $g
];

//add object to bottom of array
//array_unshift would add to top
array_push($d, $a);

$d = json_encode($d); 
file_put_contents('ppl.json', $d);    

//print_r($d);

//print_r($_FILES['photo']);
//$t to store temp location of updated file, when upload happens php tells us name of file, file type, size, errors if any, location, this is where php stores our file
$t = $_FILES['photo']['tmp_name'];

//where we want file to be stored and called
$p = 'img/'.$i.'.jpg';

move_uploaded_file($t,$p);

?>