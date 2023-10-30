<?php
$con = mysqli_connect('139.196.253.115','root','Huangruilong10.3');
if(!$con)
{
    echo "未连接数据库";
    header("refresh:2;url=http://139.196.253.115");
}
else
{  
    mysqli_select_db($con,"blog");
    $sql="insert into message(nickname,connect,message) values ('$_POST[nickname]','$_POST[connect]', '$_POST[message]')";

    if(!mysqli_query($con, $sql))
    { 
        die('Error:'.mysqli_error($con));
    }
    else
    {
        echo "发送成功，博主很快就会看到哦（该页面自动跳转）";
        mysqli_close($con);
        header("refresh:2;url=http://139.196.253.115");
    }
}
?>