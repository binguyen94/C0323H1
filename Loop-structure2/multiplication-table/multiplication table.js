let square= "<table border='1' width=400px cellspacing='0' cellpadding='10'>";
for ( i=1 ; i<10 ; i++){
    square = square + '<tr>';
    for (j=1; j<10;j++){
    square = square + '<td>' + i + 'x' + j + '=' + ( i* j) + "</td>"  ;
    }
    square= square + '</tr>'
}
square = square + "</table>";
document.write(square);
