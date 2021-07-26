<?php
$ad=$_GET['isminiz'];
$kilo=$_GET['kilonuz'];
echo "Merhabalar". " " .$ad ."<br>";

if($kilo>70)
{
	echo "Kilolusun";
}
else
{
	echo "Az Kilo Al";
}


?>

<table>
	<tr>
		<?php

			for($i=1; $i<=10; $i++)
			{
				
				
				echo "<td>";
				
				for($y=1; $y<=10; $y++)
					{	
						$x = $i*$y;
						$kontrol = $x%2;
						if($kontrol == 0)
						{
							$renk = "#000";
						}
						else
						{
							$renk = "red";
						}

						echo "<p style='color:".$renk."'>";

						echo $i."*".$y ."=". $i*$y ."<br>";
						
						echo "</p>";
					}
					echo "</td>";
				
			}

		?>

	</tr>	
</table>
