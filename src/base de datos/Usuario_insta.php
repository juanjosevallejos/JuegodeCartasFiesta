<?php

include("ConexionSorteos.php");

if(isset($_POST['instagram']) && !empty($_POST['instagram']) &&
    isset($_POST['Nombre_Apellido']) && !empty($_POST['Nombre_Apellido'])){

        mysqli_query($ConexionSorteos,("INSERT INTO usuarios (instagram,Nombre_Apellido) VALUES('$_POST[instagram]','$_POST[Nombre_Apellido]')"));
        echo "Datos insertados";
    
    }else{
        echo "error al ingresar datos ";
    }

?>


<html>
    <head>
        <title>SORTEO</title>

    </head>
    <body>
        <?php
        $ConexionSorteos=mysqli_connect($host, $user, $pw, $db);
        ?>






    <center>
        <table class="table">

            <thead>
                <tr>
                    <th>instagram</th>
                    <th>Nombre y Apellido</th>

                </tr>

            </thead>


            <?php

            $sql="SELECT * FROM usuarios";
            $result=mysqli_query($ConexionSorteos, $sql);
            while($mostrar=mysqli_fetch_array($result)){ 
            ?>
            <tbody>
                <tr>
                    <th><?php echo $mostrar ['instagram'] ?> </th>
                    <th><?php echo $mostrar ['Nombre_Apellido'] ?></th>
                </tr>
            

            <?php
             }
            ?>
        </tbody>
        </table>
        </center>


    </body>
</html>