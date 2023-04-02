function genTableLayout(m,n)
{
    document.write("<table height= 100% width= 100%>");
    for(i=0;i<m;i++)
    {
        document.write("<tr>");
        for(j=0;j<n;j++)
        {   
            if( (i+j) % 2 == 0)
                clr= "red" ;
            else
                clr= "black";
            document.write("<td bgcolor='" + clr + "'>" + "HELLO" + "</td>");
        }
        document.write("</tr>");
    }
}