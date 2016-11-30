<?php
$ob1 = new StdClass();
$ob1->status = "done";
$ob1->description = "Friday salary day";

$ob2 = new StdClass();
$ob2->status = "To be done";
$ob2->description = "satuday outing";
$result = array($ob1,$ob2);
echo json_encode($result);