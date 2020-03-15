<%@page import="Project.FileManager"%>;

<% 
    FileManager fm = new FileManager();
    out.print(fm.read("score.json"));
%>