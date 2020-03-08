<%@page import="SessionManager.FileManager"%><%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%
FileManager fm = new FileManager();

out.print(fm.read("defaultCards.json"));
%>