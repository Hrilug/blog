<?php
//第一种链接mysql数据库的代码方式；
$con = mysqli_connect('localhost','root','hrilug');
if(!$con)
{
    echo "未连接数据库";
    header("refresh:2;url=http://www.hrilug.xyz");
}
else
{  
   //echo "link successfully";
   // echo $_POST[gonghao];

    mysqli_select_db($con,"blog");
    $sql="insert into message(nickname,connect,message) values ('$_POST[nickname]','$_POST[connect]', '$_POST[message]')";

    //if(!mysqli_query($con,"insert into yuangonginf(name,connect,message) values ('hrilug','3198727736@qq.com', 'Hello Word!')"))
    if(!mysqli_query($con, $sql))
    {
        die('Error:'.mysqli_error($con));
    }
    else
    {
        echo "发送成功，博主很快就会看到哦";
        mysqli_close($con);
        header("refresh:2;url=http://www.hrilug.xyz#about");
    }
}
?>